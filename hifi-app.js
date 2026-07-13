/* hifi-app.jsx - Trail de Chaumuzy 2027 hi-fi landing page */

const TYPOS = {
  impact: {
    label: "Sport · impact condensé",
    display: "'Bebas Neue','Barlow Condensed',sans-serif",
    text: "'Barlow',sans-serif",
    tr: "uppercase",
    wt: 400,
    tk: ".005em",
    accent: "#E8631C"
  },
  modern: {
    label: "Moderne et épuré",
    display: "'Space Grotesk',sans-serif",
    text: "'Public Sans',sans-serif",
    tr: "none",
    wt: 600,
    tk: "-.01em",
    accent: "#E8631C"
  },
  synapse: {
    label: "Synapse Sport (teal/violet)",
    display: "'Quicksand',sans-serif",
    text: "'Mulish',sans-serif",
    tr: "none",
    wt: 700,
    tk: "-.01em",
    accent: "#00838b"
  },
  editorial: {
    label: "Éditorial Champagne",
    display: "'DM Serif Display',serif",
    text: "'DM Sans',sans-serif",
    tr: "none",
    wt: 400,
    tk: "0",
    accent: "#6E3FA3"
  }
};
const ACCENTS = ["#E8631C", "#D6A23E", "#6E3FA3", "#E6FF1A", "#00838b", "#9600a6"];

/* Each accent drives a COORDINATED theme: the accent itself + a secondary ("gold")
   that replaces every gold/secondary accent across the site, so picking a colour
   re-themes the WHOLE page (rings, eyebrows, traces, secondary CTAs…), not just one
   token. goldInk (legible-on-light variant) is computed in JS. For the Synapse
   teal/violet themes the secondary is the brand's complementary colour (the gradient). */
const THEMES = {
  "#E8631C": {
    gold: "#D6A23E"
  },
  // Orange + or (déclinaison deck)
  "#D6A23E": {
    gold: "#E6B34A"
  },
  // Or chaud
  "#6E3FA3": {
    gold: "#CBA23A",
    champ: "#6E3FA3"
  },
  // Champagne (violet + or)
  "#E6FF1A": {
    gold: "#CBD24A"
  },
  // Fluo + lime-or
  "#00838b": {
    gold: "#C77DD6",
    champ: "#9600a6"
  },
  // Synapse teal + violet
  "#9600a6": {
    gold: "#36B5B0",
    champ: "#00838b"
  } // Synapse violet + teal
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "typo": "editorial",
  "accent": "#D6A23E"
} /*EDITMODE-END*/;

/* centered, self-drawing pulse divider (echoes the Marne Outdoor XP heartbeat mark).
   Uses the state-driven Reveal so it both fades in AND triggers the line-draw on view. */
function PulseDivider() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: "10px 28px 2px"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PulseLine, null)));
}
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const prevTypo = useRef(null);
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--accent", t.accent);
    r.setProperty("--accent-soft", hexToRgba(t.accent, 0.12));
    r.setProperty("--accent-fg", readableOn(t.accent));
    r.setProperty("--accent-safe", safeOnLight(t.accent));
    // coordinated secondary so the whole site re-themes per colour
    const theme = THEMES[t.accent] || {
      gold: "#D6A23E"
    };
    r.setProperty("--gold", theme.gold);
    r.setProperty("--gold-deep", darken(theme.gold, 0.78));
    r.setProperty("--gold-ink", safeOnLight(theme.gold));
    r.setProperty("--gold-soft", hexToRgba(theme.gold, 0.14));
    r.setProperty("--champagne", theme.champ || theme.gold);
  }, [t.accent]);
  useEffect(() => {
    const th = TYPOS[t.typo] || TYPOS.impact;
    const r = document.documentElement.style;
    r.setProperty("--display", th.display);
    r.setProperty("--text", th.text);
    r.setProperty("--disp-tr", th.tr);
    r.setProperty("--disp-wt", th.wt);
    r.setProperty("--disp-tk", th.tk);
    document.body.dataset.typo = t.typo;
    if (prevTypo.current && prevTypo.current !== t.typo) setTweak("accent", th.accent);
    prevTypo.current = t.typo;
  }, [t.typo]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Territoire, null), /*#__PURE__*/React.createElement(PulseDivider, null), /*#__PURE__*/React.createElement(Parcours, null), /*#__PURE__*/React.createElement(Programme, null), /*#__PURE__*/React.createElement(Inscriptions, null), /*#__PURE__*/React.createElement(Partenaires, null), /*#__PURE__*/React.createElement(Faq, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyCTA, null), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Typographie"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Mod\xE8le typo",
    value: t.typo,
    options: Object.keys(TYPOS).map(k => ({
      value: k,
      label: TYPOS[k].label
    })),
    onChange: v => setTweak("typo", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Identit\xE9"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Couleur d'accent",
    value: t.accent,
    options: ACCENTS,
    onChange: v => setTweak("accent", v)
  })));
}

/* ---- color helpers ---- */
function darken(hex, f) {
  const h = hex.replace("#", "");
  const r = Math.round(parseInt(h.slice(0, 2), 16) * f);
  const g = Math.round(parseInt(h.slice(2, 4), 16) * f);
  const b = Math.round(parseInt(h.slice(4, 6), 16) * f);
  return "#" + [r, g, b].map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0")).join("");
}
function hexToRgba(hex, a) {
  const h = hex.replace("#", "");
  return `rgba(${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)},${a})`;
}
function readableOn(hex) {
  const h = hex.replace("#", "");
  const lin = v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const L = 0.2126 * lin(parseInt(h.slice(0, 2), 16)) + 0.7152 * lin(parseInt(h.slice(2, 4), 16)) + 0.0722 * lin(parseInt(h.slice(4, 6), 16));
  return L > 0.42 ? "#161310" : "#FFFFFF";
}
function lum(r, g, b) {
  const lin = v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
function safeOnLight(hex) {
  const h = hex.replace("#", "");
  let r = parseInt(h.slice(0, 2), 16),
    g = parseInt(h.slice(2, 4), 16),
    b = parseInt(h.slice(4, 6), 16);
  const contrast = L => (0.86 + 0.05) / (L + 0.05);
  let guard = 0;
  while (contrast(lum(r, g, b)) < 2.85 && guard++ < 40) {
    r = Math.round(r * 0.88);
    g = Math.round(g * 0.88);
    b = Math.round(b * 0.88);
  }
  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("");
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));