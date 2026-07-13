function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* hifi-ui.jsx - primitives for the Trail de Chaumuzy hi-fi page */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ---- icons (Lucide-style strokes) ---- */
function Icon({
  n,
  s = 20,
  style
}) {
  const p = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style
  };
  const g = {
    menu: /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M3 12h18M3 18h18"
    }),
    x: /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6L6 18"
    }),
    arrow: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }),
    arrowDown: /*#__PURE__*/React.createElement("path", {
      d: "M12 4v13M6 11l6 6 6-6M5 21h14"
    }),
    chevronDown: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }),
    mountain: /*#__PURE__*/React.createElement("path", {
      d: "M3 20l6-12 4 7 2-3 6 8z"
    }),
    clock: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 8v4l3 2"
    })),
    flag: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M5 21V4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 4h11l-2 4 2 4H5"
    })),
    users: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 20a6 6 0 0 1 12 0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 6a3 3 0 0 1 0 6M22 20a6 6 0 0 0-5-5.9"
    })),
    pin: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "2.4"
    })),
    calendar: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 3v4M16 3v4M4 10h16"
    })),
    bolt: /*#__PURE__*/React.createElement("path", {
      d: "M13 2L4 14h6l-1 8 9-12h-6z"
    }),
    ticket: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 6v12",
      strokeDasharray: "2 2"
    })),
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"
    }),
    droplet: /*#__PURE__*/React.createElement("path", {
      d: "M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10z"
    }),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 4.6-7 9-7 9z"
    }),
    route: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "19",
      r: "2.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "2.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.4 19H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.6"
    })),
    trend: /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 8-8M21 7v5M16 7h5"
    }),
    award: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "5.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.5 13.5L7 22l5-3 5 3-1.5-8.5"
    })),
    info: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 11v5M12 8h.01"
    })),
    fileCheck: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 3v5h5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 15l2 2 4-4"
    })),
    gauge: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M12 14l4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 18a8 8 0 1 1 14 0"
    })),
    leaf: /*#__PURE__*/React.createElement("path", {
      d: "M4 20c0-9 7-15 16-15 0 9-6 16-15 16 0 0-1-4 2-8"
    }),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
    }),
    flute: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M9 3h6l-1.1 8.2a2 2 0 0 1-3.8 0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 13v7M9.2 20h5.6"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", p, g[n] || null);
}
function Logo({
  ink,
  h = 34,
  cls,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    className: cls,
    src: (typeof window !== "undefined" && window.LOGO_TRAIL ? (ink ? window.LOGO_TRAIL.ink : window.LOGO_TRAIL.white) : null) || (ink ? "assets/logo-trail-chaumuzy.png" : "assets/logo-trail-chaumuzy-white.png"),
    alt: "Trail de Chaumuzy",
    style: {
      height: h,
      width: "auto",
      flexShrink: 0,
      ...style
    }
  });
}

/* ---- countdown ---- */
const RACE = new Date("2027-04-04T09:30:00").getTime();
function useCountdown() {
  const calc = () => {
    const ms = Math.max(0, RACE - Date.now());
    return {
      d: Math.floor(ms / 86400000),
      h: Math.floor(ms % 86400000 / 3600000),
      m: Math.floor(ms % 3600000 / 60000),
      s: Math.floor(ms % 60000 / 1000)
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}
function Ring({
  value,
  max,
  label,
  lead
}) {
  const r = 44,
    c = 2 * Math.PI * r;
  const frac = Math.min(1, value / max);
  return /*#__PURE__*/React.createElement("div", {
    className: "cd-unit" + (lead ? " lead-unit" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-ring"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 96 96"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "48",
    r: r,
    stroke: "var(--hair-on-ink)",
    strokeWidth: "4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "48",
    r: r,
    stroke: "var(--gold)",
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - frac),
    style: {
      transition: "stroke-dashoffset .5s linear"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, String(value).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, label));
}
function Countdown() {
  const t = useCountdown();
  return /*#__PURE__*/React.createElement("div", {
    className: "countdown"
  }, /*#__PURE__*/React.createElement(Ring, {
    value: t.d,
    max: 400,
    label: "Jours",
    lead: true
  }), /*#__PURE__*/React.createElement(Ring, {
    value: t.h,
    max: 24,
    label: "Heures"
  }), /*#__PURE__*/React.createElement(Ring, {
    value: t.m,
    max: 60,
    label: "Min"
  }), /*#__PURE__*/React.createElement(Ring, {
    value: t.s,
    max: 60,
    label: "Sec"
  }));
}

/* ---- pulse line divider - a live ECG heartbeat monitor ----
   Echoes the Marne Outdoor XP heartbeat mark. On reveal the baseline draws itself,
   then a bright beam sweeps the trace continuously with a glowing dot riding the front. */
function PulseLine({
  draw = true
}) {
  const ref = useRef(null);
  const [len, setLen] = useState(1600);
  useEffect(() => {
    if (ref.current) setLen(ref.current.getTotalLength());
  }, []);
  // ECG baseline at y=24 with three QRS complexes across the 1200 width
  const beat = "l9 0 5 -7 5 15 6 -42 6 48 5 -14 9 0";
  const d = `M0 24 H150 ${beat} H400 ${beat} H650 ${beat} H900 ${beat} H1200`;
  // a short bright dash that travels the whole path length, following every spike
  const seg = 150;
  return /*#__PURE__*/React.createElement("svg", {
    className: "pulse" + (draw ? " draw" : ""),
    viewBox: "0 0 1200 48",
    preserveAspectRatio: "none",
    style: {
      "--len": len,
      "--seg": seg
    }
  }, /*#__PURE__*/React.createElement("path", {
    ref: ref,
    className: "pulse-base",
    d: d,
    "data-comment-anchor": "e6f8b72617-path-98-7"
  }), /*#__PURE__*/React.createElement("path", {
    className: "pulse-beam",
    d: d
  }), /*#__PURE__*/React.createElement("circle", {
    className: "pulse-blip",
    r: "4.5"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "3.2s",
    repeatCount: "indefinite",
    rotate: "0",
    keyPoints: "0;1",
    keyTimes: "0;1",
    calcMode: "linear",
    path: d
  })));
}

/* ---- elevation profile chart (with metric Y-axis on the left) ---- */
function ElevationProfile({
  points,
  dplus,
  altMin,
  altMax,
  dist,
  color = "var(--gold)"
}) {
  // points: array of {x:0..1, y:metres}
  const W = 480,
    H = 214;
  const padL = 44,
    padR = 12,
    padT = 20,
    padB = 26;
  const plotW = W - padL - padR,
    plotH = H - padT - padB;
  // nice rounded altitude bounds + ticks (step 40 m)
  const step = 40;
  const lo = Math.floor(altMin / 20) * 20;
  const hi = Math.ceil(altMax / 20) * 20;
  const yticks = [];
  for (let v = lo; v <= hi + 0.1; v += step) yticks.push(v);
  if (yticks[yticks.length - 1] !== hi) yticks.push(hi);
  const sx = x => padL + x * plotW;
  const sy = y => padT + plotH - (y - lo) / (hi - lo) * plotH;
  const line = points.map((p, i) => (i ? "L" : "M") + sx(p.x).toFixed(1) + " " + sy(p.y).toFixed(1)).join(" ");
  const area = line + ` L${sx(1).toFixed(1)} ${(padT + plotH).toFixed(1)} L${sx(0).toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;
  const gid = "elgrad-" + Math.round(altMax) + "-" + Math.round(dplus);
  // distance ticks (km) along the bottom
  const km = dist || 0;
  const xticks = [];
  const kmStep = km > 20 ? 6 : 4;
  for (let d = 0; d <= km + 0.1; d += kmStep) xticks.push(d);
  return /*#__PURE__*/React.createElement("div", {
    className: "elev"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": `Profil d'élévation : ${altMin} à ${altMax} mètres, dénivelé positif ${dplus} mètres`
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: color,
    stopOpacity: "0.34"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: color,
    stopOpacity: "0"
  }))), yticks.map((v, i) => /*#__PURE__*/React.createElement("g", {
    key: "y" + i
  }, /*#__PURE__*/React.createElement("line", {
    className: "elev-grid",
    x1: padL,
    y1: sy(v),
    x2: W - padR,
    y2: sy(v)
  }), /*#__PURE__*/React.createElement("text", {
    className: "elev-ytick",
    x: padL - 8,
    y: sy(v) + 3.5,
    textAnchor: "end"
  }, v))), /*#__PURE__*/React.createElement("text", {
    className: "elev-unit",
    x: 10,
    y: padT - 8
  }, "m"), /*#__PURE__*/React.createElement("path", {
    className: "area",
    d: area,
    fill: `url(#${gid})`
  }), /*#__PURE__*/React.createElement("path", {
    className: "line",
    d: line,
    style: {
      stroke: color
    }
  }), /*#__PURE__*/React.createElement("line", {
    className: "elev-base",
    x1: padL,
    y1: padT + plotH,
    x2: W - padR,
    y2: padT + plotH
  }), xticks.map((d, i) => /*#__PURE__*/React.createElement("text", {
    className: "elev-xtick",
    key: "x" + i,
    x: sx(km ? d / km : 0),
    y: H - 8,
    textAnchor: i === 0 ? "start" : i === xticks.length - 1 ? "end" : "middle"
  }, d, " km")), /*#__PURE__*/React.createElement("text", {
    className: "elev-dplus",
    x: W - padR,
    y: padT - 6,
    textAnchor: "end"
  }, "D+ ", dplus, " m")));
}

/* ---- scroll reveal (state-driven so it survives React re-renders) ---- */
function useInView(opts) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) * 0.95) {
      setSeen(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(ents => {
      if (ents[0].isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, {
      threshold: 0,
      rootMargin: "0px 0px -6% 0px",
      ...opts
    });
    io.observe(el);
    // Failsafe: si l'image/contenu se charge tardivement (boîte à hauteur nulle
    // au démarrage), on force l'affichage pour ne jamais laisser un bloc invisible.
    const failsafe = setTimeout(() => {
      const rr = el.getBoundingClientRect();
      if (rr.top < (window.innerHeight || 800)) {
        setSeen(true);
        io.disconnect();
      }
    }, 1500);
    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, []);
  return [ref, seen];
}
function Reveal({
  children,
  d,
  tag = "div",
  className = "",
  ...rest
}) {
  const [ref, seen] = useInView();
  const Tag = tag;
  const cls = ["reveal", d ? "d" + d : "", seen ? "revealed" : "", className].join(" ").replace(/\s+/g, " ").trim();
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls
  }, rest), children);
}
/* contour-line backdrop for the hero (topographic feel) */
function Contour() {
  const lines = [];
  for (let i = 0; i < 7; i++) {
    const o = i * 26;
    lines.push(/*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M-50 ${260 + o} C 280 ${170 + o}, 520 ${360 + o}, 820 ${250 + o} S 1300 ${150 + o}, 1500 ${300 + o}`,
      fill: "none",
      stroke: "var(--gold)",
      strokeWidth: "1",
      strokeOpacity: 0.10 + (i === 3 ? 0.14 : 0)
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    className: "contour",
    viewBox: "0 0 1440 760",
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": "true"
  }, lines);
}

/* ---- real GPS route map (top-down trace from the KMZ) ---- */
function RouteMap({
  trace,
  color
}) {
  if (!trace) return null;
  const vw = trace.aspect <= 1 ? trace.aspect * 1000 : 1000;
  const vh = trace.aspect <= 1 ? 1000 : 1000 / trace.aspect;
  const sx = trace.start.x * 1000,
    sy = trace.start.y * 1000;
  const ex = trace.end.x * 1000,
    ey = trace.end.y * 1000;
  const pad = 60;
  return /*#__PURE__*/React.createElement("div", {
    className: "routemap"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `${-pad} ${-pad} ${vw + pad * 2} ${vh + pad * 2}`,
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("path", {
    className: "rm-shadow",
    d: trace.path,
    "data-comment-anchor": "1f1195ebc6-path-184-9"
  }), /*#__PURE__*/React.createElement("path", {
    className: "rm-line",
    d: trace.path,
    style: {
      stroke: color
    }
  }), /*#__PURE__*/React.createElement("circle", {
    className: "rm-runner",
    r: "13",
    fill: color,
    stroke: "var(--ink)",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "9s",
    repeatCount: "indefinite",
    path: trace.path,
    rotate: "auto"
  })), /*#__PURE__*/React.createElement("g", {
    className: "rm-pin"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: sx,
    cy: sy,
    r: "15",
    fill: "var(--ink)",
    stroke: color,
    strokeWidth: "4",
    "data-comment-anchor": "1f1230589e-circle-191-11"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: sx,
    cy: sy,
    r: "5",
    fill: color
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: sx + 16,
    cy: sy + 14,
    r: "11",
    fill: "var(--gold)",
    stroke: "var(--ink)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("g", {
    transform: `translate(${sx + 16},${sy + 14}) scale(0.62) translate(-12,-12)`,
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 3h6l-1.1 8.2a2 2 0 0 1-3.8 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 13v7M9.2 20h5.6"
  }))), /*#__PURE__*/React.createElement("text", {
    x: sx,
    y: sy - 26,
    textAnchor: "middle"
  }, "Chaumuzy")), (trace.communes || []).map((c, i) => {
    const cx = c.x * 1000,
      cy = c.y * 1000;
    const isStart = Math.abs(cx - sx) < 30 && Math.abs(cy - sy) < 30;
    if (isStart) return null;
    const isRavito = /Neuville/.test(c.nm);
    return /*#__PURE__*/React.createElement("g", {
      className: "rm-commune" + (isRavito ? " rm-ravito" : ""),
      key: i
    }, isRavito ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: "19",
      fill: "var(--gold)",
      stroke: "var(--ink)",
      strokeWidth: "3"
    }), /*#__PURE__*/React.createElement("g", {
      transform: `translate(${cx},${cy}) scale(1.15) translate(-12,-12)`,
      fill: "none",
      stroke: "var(--ink)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 3h6l-1.1 8.2a2 2 0 0 1-3.8 0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 13v7M9.2 20h5.6"
    }))) : /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: "11"
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - (isRavito ? 42 : 30),
      textAnchor: "middle"
    }, c.nm));
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-leg-grp"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: color
    }
  }), " D\xE9part et arriv\xE9e"), /*#__PURE__*/React.createElement("span", {
    className: "rm-leg-rav"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "flute",
    s: 15
  }), " Ravitaillement")), /*#__PURE__*/React.createElement("span", {
    className: "rm-km"
  }, "Boucle \xB7 ", Math.round(trace.km), " km")));
}
Object.assign(window, {
  Icon,
  Logo,
  Countdown,
  PulseLine,
  ElevationProfile,
  RouteMap,
  Reveal,
  Contour,
  useInView,
  RACE
});