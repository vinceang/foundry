// Larès — the day the weather writes, plus the booking enquiry handoff.
// Works progressively: with JS off the default (bluebird) state is fully shown.
(function () {
  "use strict";

  var dataEl = document.getElementById("sky-data");
  if (!dataEl) return;
  var skies = JSON.parse(dataEl.textContent);
  var byId = {};
  skies.forEach(function (s) { byId[s.id] = s; });

  var section = document.getElementById("weather");
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".sky-btn"));
  var facts = document.querySelectorAll("[data-fact]");
  var placeLines = document.querySelectorAll("[data-place-line]");
  var placeEls = document.querySelectorAll(".place");
  var svg = document.querySelector(".profile-svg");

  // profile geometry: y=120 is the base snow-line datum; section 0..220
  function setBand(sel, topPct, mode) {
    var el = svg.querySelector(sel);
    if (!el) return;
    if (topPct == null) { el.setAttribute("height", "0"); return; }
    // topPct measured from valley floor (0) to peak (100). Convert to svg y.
    var y = 220 - (topPct / 100) * 220;
    if (mode === "cap") { el.setAttribute("y", "0"); el.setAttribute("height", String(y)); }
    else if (mode === "sea") { el.setAttribute("y", String(y)); el.setAttribute("height", String(220 - y)); }
  }

  function apply(id) {
    var s = byId[id];
    if (!s) return;
    section.setAttribute("data-sky", id);

    tabs.forEach(function (t) {
      var on = t.getAttribute("data-sky-set") === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.setAttribute("tabindex", on ? "0" : "-1");
    });

    facts.forEach(function (f) {
      var key = f.getAttribute("data-fact");
      if (s[key] != null) f.textContent = s[key];
    });

    placeEls.forEach(function (el) {
      var key = el.getAttribute("data-place");
      var p = s.places[key];
      if (!p) return;
      var line = el.querySelector("[data-place-line]");
      if (line) line.textContent = p.line;
      var badge = el.querySelector(".place-state");
      if (badge) {
        badge.setAttribute("data-state", p.state);
        badge.textContent = p.state === "closed" ? "closed" : p.state === "care" ? "with a guardian" : "open";
      }
      el.setAttribute("data-open", p.state);
    });

    // elevation profile: snow line, cloud sea, storm/föhn cap
    var snow = svg.querySelector(".snowline");
    if (snow && s.snowline != null) {
      var sy = 220 - (s.snowline / 100) * 220;
      snow.setAttribute("y1", String(sy));
      snow.setAttribute("y2", String(sy));
    }
    setBand(".wx-cloudsea", s.cloudsea, "sea");
    setBand(".wx-cap", s.cap, "cap");
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { apply(t.getAttribute("data-sky-set")); });
  });

  // roving-tabindex keyboard support on the sky control
  section.querySelector(".sky-row").addEventListener("keydown", function (e) {
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next == null) return;
    e.preventDefault();
    tabs[next].focus();
    apply(tabs[next].getAttribute("data-sky-set"));
  });

  // set the initial (bluebird) state so place lines/badges are correct even with JS on
  apply("bluebird");

  // --- booking enquiry -> mailto handoff (no card, no payment) ---
  var form = document.getElementById("book-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var lines = [
        "A booking enquiry for Larès.",
        "",
        "Arrival: " + (f.arrival.value || "(not set)"),
        "Nights: " + (f.nights.value || "1"),
        "Beds: " + (f.beds.value || "1"),
        "Where: " + f.place.value,
        "",
        "Name: " + (f.name.value || ""),
        "Email: " + (f.email.value || ""),
        "",
        "Note:",
        (f.note.value || "(none)"),
      ];
      var subject = "Larès enquiry — " + (f.arrival.value || "dates to confirm") + ", " + (f.beds.value || "1") + " bed(s)";
      var href = "mailto:marta@lares-utia.example?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
      window.location.href = href;
    });
  }

  // reveals — settle once (skip entirely under nofx / reduced-motion)
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.documentElement.classList.contains("nofx") && !reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -12% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
