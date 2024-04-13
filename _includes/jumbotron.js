import { forceSimulation, forceCollide, forceCenter, forceManyBody, forceLink } from "https://cdn.jsdelivr.net/npm/d3-force@3/+esm";
import {
  Ticker,
  curveEaseInOut,
  MarkRenderGroup,
  Mark,
  PositionMap,
} from 'https://cdn.jsdelivr.net/npm/counterpoint-vis@latest/dist/counterpoint-vis.es.js';

let canvas = document.getElementById('jumbotron-canvas');
let width = 1000;
let height = 500;
const gutter = 100;
const pointSize = 3;
let numPoints = 40;
let numSeries = 5;
let ticker;
let markSet, nodes, hoveringSet;
let hoveringSeries = null;
let positionMap;
let simulationWidth;

function bezierCurveSeries(ctx, i) {
  let seriesMarks = markSet.stage.getVisibleMarks().filter((mark) => mark.attr('series') === i);
  let lastY = null, lastX = null;
  seriesMarks.forEach((mark, j) => {
    let x = mark.attr('x');
    let y = mark.attr('y');
    if (lastY == null) ctx.lineTo(x, y);
    else {
      let cpWidth = 1 / seriesMarks.length * simulationWidth * 0.5;
      ctx.bezierCurveTo(lastX + cpWidth, lastY, x - cpWidth, y, x, y);
    }
    lastX = x;
    lastY = y;
  });
}

function draw() {
  if (!!canvas) {
    let ctx = canvas.getContext('2d');

    if (!!ctx) {
      ctx.resetTransform();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.fillStyle = '#bbbbbb';
      ctx.globalAlpha = 0.3;
      for (let i = 0; i < numSeries; i++) {
        ctx?.save();
        ctx.beginPath();
        ctx.moveTo(-gutter, height);
        bezierCurveSeries(ctx, i);
        ctx.lineTo(width + gutter, height);
        ctx.closePath();
        ctx?.fill();
        ctx?.restore();
      }

      hoveringSet.stage.forEach((seriesInfo) => {
        let s = seriesInfo.id;
        ctx.globalAlpha = seriesInfo.attr('alpha');
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(-gutter, height);
        bezierCurveSeries(ctx, s);
        ctx.stroke();
        ctx.restore();

        // draw dots
        let seriesMarks = markSet.stage.getVisibleMarks().filter((mark) => mark.attr('series') === s);
        seriesMarks.forEach((mark) => {
          let x = mark.attr('x');
          let y = mark.attr('y');
          ctx?.save();
          ctx?.beginPath();
          ctx?.ellipse(x, y, pointSize, pointSize, 0, 0, 2 * Math.PI, false);
          ctx?.fill();
          ctx?.closePath();
          ctx?.restore();
        });      
      });
    }
  }
}

async function oscillatePoint(mark, initial = true) {
  let invert = initial ? Math.random() < 0.5 : false;
  try {
    await mark.animateTo('y', mark.attr('center') + (invert ? -1: 1) * mark.attr('amplitude'), { duration: mark.attr('period') }).wait('y');
    await mark.animateTo('y', mark.attr('center') + (invert ? 1: -1) * mark.attr('amplitude'), { duration: mark.attr('period') }).wait('y');
    oscillatePoint(mark, false);
  } catch (e) {}
}

function buildCanvas() {

  // initialize random positions
  nodes = new Array(numPoints * numSeries).fill(0).map((_, i) => ({
    x: (i % numPoints + Math.floor(i / numPoints) / numSeries) / (numPoints - 1),
    series: Math.floor(i / numPoints),
    amplitude: Math.random() * 0.1,
  }));
  nodes.forEach((n, i) => {
    if (i % numPoints == 0) n.center = (Math.random() * 0.5) + 0.25;
    else {
      while (!n.center || n.center < 0 || n.center > 1)
        n.center = nodes[i - 1].center + Math.random() * 0.2 - 0.1;
    }
  });
  
  markSet = new MarkRenderGroup(
    nodes.map(
      (n, i) =>
        new Mark(i, {
          series: n.series,
          x: { value: n.x, transform: (v) => v * simulationWidth - gutter },
          y: { value: n.center + (2 * Math.random() - 1) * n.amplitude, transform: (v) => v * height },
          amplitude: n.amplitude,
          center: n.center,
          radius: pointSize,
          period: Math.random() * 5000 + 5000
        })
    )
  ).configure({
    animationDuration: 3000,
    animationCurve: curveEaseInOut,
  });

  hoveringSet = new MarkRenderGroup().configure({ animationDuration: 200 }).configureStaging({
    enter: async (e) => e.animateTo('alpha', 1.0).wait('alpha'),
    exit: async (e) => e.animateTo('alpha', 0.0).wait('alpha')
  });

  // keep track of positions for mouseover interactions
  positionMap = new PositionMap().add(markSet);

  ticker = new Ticker([markSet, hoveringSet]).onChange(draw);

  markSet.forEach((m) => oscillatePoint(m));
}

if (!!canvas) {
  buildCanvas();

  // update on resize canvas
  new ResizeObserver(() => {
    if (!canvas) return;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    simulationWidth = (Math.max(width, 400) + gutter * 2);
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    console.log('drawing', width, height);
    draw();
  }).observe(canvas);
  
  // stop if the canvas gets removed
  let observer = new MutationObserver((e) => {
    if (e[0].removedNodes) {
      ticker.stop();
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
    let closestMarks = positionMap.marksNear(pos, (1 / numPoints) * simulationWidth);
    if (hoveringSeries != null)
        hoveringSet.delete(hoveringSeries);
    if (closestMarks.length >= 1) {
      let mark = closestMarks[0];
      hoveringSeries = mark.attr('series');
      hoveringSet.addMark(hoveringSet.stage.get(hoveringSeries) ?? new Mark(hoveringSeries, { alpha: 0.0 }));
    } else {
      hoveringSeries = null;
    }
  }
  
  canvas.addEventListener('mousemove', mouseover);
}

