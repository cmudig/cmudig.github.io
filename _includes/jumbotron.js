import { forceSimulation, forceCollide, forceCenter, forceManyBody, forceLink } from "https://cdn.jsdelivr.net/npm/d3-force@3/+esm";
import {
  Ticker,
  curveEaseInOut,
  MarkRenderGroup,
  Mark,
  PositionMap,
  Attribute,
  Animator,
  interpolateTo,
  curveLinear,
} from 'https://cdn.jsdelivr.net/npm/counterpoint-vis@latest/dist/counterpoint-vis.es.js';

let canvas = document.getElementById('jumbotron-canvas');
let width = 1000;
let height = 500;
let simulationWidth, simulationHeight;
const gutter = 100;
const pointSize = 3;
let numPoints = 1000;
let simulation = null;
let currentTick = 0;
let ticker;
let markSet, nodes;
let xOffset, positionMap;
let lastPulsatedMark;

async function pan() {
  // linear animation of the x offset to slowly pan the 'camera'
  xOffset
    .animate(
      new Animator(
        interpolateTo(-gutter),
        ((simulationWidth + gutter) / 1000) * 30000,
        curveLinear
      )
    )
  try {
    await xOffset.wait();
    xOffset.set(simulationWidth + gutter);
    pan();
  } catch (e) {}
}

async function pulsateMark(mark, radius) {
  // animate the radius to the given size, then return to normal
  try {
    await mark.animateTo('radius', radius, { duration: 200 }).wait('radius');
    mark.animateTo('radius', pointSize, { duration: 500 });
  } catch (e) {}
}

function draw() {
  if (!!canvas) {
    let ctx = canvas.getContext('2d');

    if (!!ctx) {
      ctx.resetTransform();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.translate(0, -(simulationHeight - height) * 0.5);
      ctx.strokeStyle = '#bbb';
      ctx.lineWidth = 1.0;
      ctx.globalAlpha = 0.3;
      // Draw edges
      markSet.stage.forEach((mark) => {
        let x = mark.attr('x');
        let y = mark.attr('y');
        ctx?.beginPath();
        mark.adj('neighbors').forEach((neighbor) => {
          let nx = neighbor.attr('x');
          let ny = neighbor.attr('y');
          if (
            Math.max(Math.abs(nx - x), Math.abs(ny - y)) >
            simulationHeight * 0.5 ||
            (x < -gutter && nx < -gutter) || (x > width + gutter && nx > width + gutter)
          )
            return;
          ctx?.moveTo(x, y);
          ctx?.lineTo(nx, ny);
        });

        [...mark.adj('neighbors'), ...mark.sourceMarks()].forEach(
          (neighbor) => {
            // start a pulsating animation if the neighbor pulsated
            if (
              !mark.changed('radius') &&
              neighbor.attr('radius') > pointSize * 1.2
            ) {
              pulsateMark(
                mark,
                neighbor.attributes['radius'].future() * 0.95
              );
            }
          }
        );
        ctx?.stroke();
        ctx?.closePath();
      });
      ctx.globalAlpha = 1.0;

      // draw dots
      markSet.stage.forEach((mark) => {
        let x = mark.attr('x');
        let y = mark.attr('y');
        if (x < -gutter || x > width + gutter) return;
        ctx?.save();
        let r = mark.attr('radius');
        let color = mark.attr('color');
        ctx.globalAlpha = mark.attr('alpha');
        ctx.fillStyle = color;
        ctx?.beginPath();
        ctx?.ellipse(x, y, r, r, 0, 0, 2 * Math.PI, false);
        ctx?.fill();
        ctx?.closePath();
        ctx?.restore();
      });
    }
  }
}

function buildCanvas() {
  simulationWidth = width * 2;
  simulationHeight = 700;

  // initialize random positions
  nodes = new Array(numPoints).fill(0).map((_, i) => ({
    x: Math.random() * simulationWidth,
    y: Math.random() * simulationHeight,
  }));
  markSet = new MarkRenderGroup(
    nodes.map(
      (n, i) =>
        new Mark(i, {
          x: {
            value: n.x,
            transform: (v) => {
              // transform x values to be periodic within the simulation area
              let x = xOffset.get() + v;
              return ((x + gutter) % (simulationWidth + gutter * 2)) - gutter;
            },
          },
          y: n.y,
          color: `hsla(${Math.random() * 360}, 20%, 70%, 0.8)`,
          radius: pointSize,
          alpha: 1.0,
        })
    )
  ).configure({
    animationDuration: 3000,
    animationCurve: curveEaseInOut,
  });
  xOffset = new Attribute(simulationWidth + gutter);
  // keep track of positions for mouseover interactions
  positionMap = new PositionMap({ marksPerBin: 100 }).add(markSet);
  // randomly add edges to neighbors to create a network
  markSet.forEach((m) =>
    m.adj(
      'neighbors',
      positionMap
        .marksNear([m.attr('x'), m.attr('y')], 100)
        .slice(0, Math.floor(Math.random() * 14) + 5)
        .filter((n, i) => n.id > m.id && (i == 0 || Math.random() < 0.5))
    )
  );
  ticker = new Ticker([markSet, xOffset]).onChange(draw);
  
  pan();
  // set up d3 force simulation
  if (!!simulation) simulation.stop();
  simulation = forceSimulation(nodes)
    .force(
      'link',
      forceLink(
        markSet
          .map((m) =>
            m.adj('neighbors').map((n) => ({ source: m.id, target: n.id }))
          )
          .flat()
      )
      .distance(simulationHeight * 0.1)
      .strength(2)
    )
    .force(
      'center',
      forceCenter(simulationWidth / 2, simulationHeight / 2)
    )
    .force('collide', forceCollide(pointSize * 2))
    .force('repel', forceManyBody().strength(-2))
    .on('tick', () => {
      currentTick += 1;
      if (!markSet.marksAnimating()) {
        markSet
          .animateTo('x', (_, i) => nodes[i].x)
          .animateTo('y', (_, i) => nodes[i].y);
        nodes.forEach((n) => {
          n.x +=
            Math.random() * simulationHeight * 0.2 - simulationHeight * 0.1;
          n.y +=
            Math.random() * simulationHeight * 0.2 - simulationHeight * 0.1;
        });
      }
      if (currentTick % 100 == 0) {
        simulation?.alphaDecay(0);
      }
    });
}

if (!!canvas) {
  buildCanvas();

  // update on resize canvas
  new ResizeObserver(() => {
    if (!canvas) return;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    if (width > simulationWidth) buildCanvas();
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    draw();
  }).observe(canvas);
  
  // stop if the canvas gets removed
  let observer = new MutationObserver((e) => {
    if (e[0].removedNodes) {
      ticker.stop();
      simulation?.stop();
    }
  });
  observer.observe(canvas.parentElement, { childList: true });
  
  function mouseover(e) {
    let pos = [
      e.clientX - canvas.getBoundingClientRect().left,
      e.clientY - canvas.getBoundingClientRect().top,
    ];
    // pulsate the point under the mouse if not already animating
    positionMap.invalidate();
    let closestMarks = positionMap.marksNear(pos, pointSize * 5);
    if (closestMarks.length >= 1) {
      let mark = closestMarks[0];
      if (lastPulsatedMark === mark) return;
      lastPulsatedMark = mark;    
      if (!mark.changed('radius'))
        pulsateMark(mark, pointSize * 2.5);
    }
  }
  
  canvas.addEventListener('mousemove', mouseover);

  // pause when the canvas goes offscreen
  let onscreenObserver = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) {
      console.log('stopping');
      if (!!simulation) simulation.stop();
    }
    else {
      console.log('restarting');
      if (!!simulation) simulation.restart();
      else buildCanvas();
    }
  });
  onscreenObserver.observe(canvas);
}

