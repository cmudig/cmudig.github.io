(function() {
  var pubElems = document.querySelectorAll(".publication");
  var yearElems = document.querySelectorAll(".year");

  var clearElem = document.getElementById("clear-filters");

  var data = [];
  var allYears = new Set();

  pubElems.forEach(function(element) {
    var item = JSON.parse(element.getAttribute("data-pub"));

    allYears.add(item.year);

    item.element = element;

    data.push(item);
  });

  var engine = itemsjs(data, {
    aggregations: {
      venue_tags: {
        size: 5
      },
      authors: {
        size: 6
      },
      awards: {
        size: 5
      },
      tags: {
        size: 6
      },
      type: {
        size: 5
      }
    },
    searchableFields: ["authors", "awards", "tags", "type", "title", "content"]
  });

  // get default search from URL
  var hash = decodeURIComponent(window.location.hash.substr(1));

  var result = hash.split('&').reduce(function (res, item) {
      var [key, value] = item.split('=');
      if (key && value) {
        if (key in res) {
          res[key].push(value)
        } else {
          res[key] = [value];
        }
      }
      return res;
  }, {});

  var query = { filters: result };

  function setAggs(aggs) {
    document.querySelectorAll("#facets > .facet").forEach(function(facet) {
      var id = facet.getAttribute("id");

      var buckets = aggs[id].buckets;

      var el = facet.querySelector("ul");
      if (buckets.length === 0) {
        el.innerHTML = "Empty";
      } else {
        el.innerHTML = "";

        buckets.forEach(function(bucket) {
          if (query.filters[id] && query.filters[id].indexOf(bucket.key) >= 0) {
            bucket.in_query = true;
          }
        });

        var maxDocCount = Math.max.apply(
          null,
          buckets.map(function(bucket) {
            return bucket.doc_count;
          })
        );

        buckets.forEach(function(bucket) {
          var child = document.createElement("li");
          child.classList.add("mb2", "pointer");

          var wrap = document.createElement("span");
          child.appendChild(wrap);

          var text = document.createElement("span");
          text.innerText = bucket.key;
          text.setAttribute("title", bucket.key);
          var number = document.createElement("span");
          number.classList.add("gray", "f6");
          number.innerText = " (" + bucket.doc_count + ")";
          wrap.appendChild(text);
          wrap.appendChild(number);

          var barFull = document.createElement("div");
          barFull.classList.add("w-100", "bb", "b--black-20", "bw1", "mt1");
          child.append(barFull);

          var bar = document.createElement("div");
          bar.classList.add("bb", "b--cmu-red", "bw1");
          bar.style.marginBottom = "-.125rem";
          bar.style.width = "" + (bucket.doc_count / maxDocCount) * 100 + "%";
          barFull.append(bar);

          if (bucket.in_query) {
            child.classList.add("b");

            // remove filter
            child.onclick = function() {
              query.filters[id].splice(
                query.filters[id].indexOf(bucket.key),
                1
              );
              if (query.filters[id].length === 0) {
                delete query.filters[id];
              }
              search(query);
            };
          } else {
            // add to filter
            child.onclick = function() {
              if (query.filters[id]) {
                query.filters[id].push(bucket.key);
              } else {
                query.filters[id] = [bucket.key];
              }
              search(query);
            };
          }

          el.appendChild(child);
        });
      }
    });
  }

  var ftSearch = document.getElementById("ft-search");
  ftSearch.oninput = function() {
    var val = ftSearch.value;

    if (val) {
      query.query = val;
    } else {
      delete query.query;
    }

    search(query);
  }

  function search(query) {
    console.time("Search");

    var result = engine.search(Object.assign({ per_page: data.length }, query));

    setAggs(result.data.aggregations);

    var counter = pubElems.length - result.data.items.length;

    document.getElementById("count_hidden").innerText = counter;
    document.getElementById("count_total").innerText = pubElems.length;

    pubElems.forEach(function(element) {
      element.classList.add("dn");
    });

    var visibleYears = {};
    result.data.items.forEach(function(item) {
      item.element.classList.remove("dn");
      visibleYears[item.year] = 1;
    });

    yearElems.forEach(function(element) {
      element.classList.add("dn");
    });
    allYears.forEach(function(year) {
      if (year in visibleYears) {
        document.getElementById("y" + year).classList.remove("dn");
      }
    });

    // show or hide notification about filtered papers
    if (Object.keys(query.filters).length || query.query) {
      clearElem.classList.remove("dn");
    } else {
      clearElem.classList.add("dn");
    }

    console.timeEnd("Search");
  }

  clearElem.onclick = function() {
    query = { filters: {} };
    ftSearch.value = "";
    search(query);
  };

  search(query);

  document.getElementById("facets").classList.remove("dn");
})();
