/* hifi-sections.jsx — page sections for Trail de Chaumuzy 2027 */

/* ---------- data ---------- */
const COMMUNES = [{
  nm: "Chaumuzy",
  meta: ""
}, {
  nm: "Belval-sous-Châtillon",
  meta: ""
}, {
  nm: "La Neuville-aux-Larris",
  meta: "",
  logo: "assets/logo-la-neuville.png"
}, {
  nm: "Champlat-et-Boujacourt",
  meta: ""
}];
const PARCOURS = {
  24: {
    km: 24,
    role: "Trail Expérience",
    tone: "accent",
    desc: "Un tracé plus exigeant pour les traileurs confirmés souhaitant profiter pleinement des reliefs, des panoramas et des chemins emblématiques de la Montagne de Reims. Plus de distance, plus de dénivelé, plus d'immersion.",
    dplus: 450,
    altMin: 123,
    altMax: 263,
    dist: 23.9,
    coureurs: 200,
    depart: "09h30",
    barriere: "3h45",
    elev: [138, 159, 185, 210, 205, 205, 168, 142, 132, 137, 127, 132, 138, 156, 174, 196, 222, 233, 250, 256, 259, 258, 260, 261, 259, 249, 212, 227, 247, 253, 249, 243, 234, 221, 200, 179, 170, 204, 227, 240, 235, 240, 240, 245, 242, 244, 247, 232, 225, 221, 202, 183, 161, 176, 206, 213, 221, 224, 224, 222, 209, 203, 186, 160, 138].map((y, i, a) => ({
      x: i / (a.length - 1),
      y
    }))
  },
  18: {
    km: 18,
    role: "Trail Découverte",
    tone: "gold",
    desc: "Un parcours accessible et dynamique permettant de découvrir l'univers du trail dans un environnement exceptionnel. Idéal pour les coureurs sur route souhaitant franchir le pas vers le trail ou pour les pratiquants à la recherche d'une expérience nature conviviale.",
    dplus: 340,
    altMin: 123,
    altMax: 261,
    dist: 18.3,
    coureurs: 300,
    depart: "10h00",
    barriere: "2h40",
    elev: [138, 154, 175, 194, 210, 206, 205, 192, 165, 144, 133, 134, 136, 127, 130, 135, 143, 157, 170, 188, 206, 223, 232, 248, 251, 258, 260, 259, 254, 236, 228, 238, 239, 239, 238, 239, 244, 242, 242, 244, 248, 240, 226, 226, 223, 213, 193, 180, 162, 167, 190, 212, 214, 213, 223, 224, 224, 224, 219, 201, 202, 194, 175, 153, 138].map((y, i, a) => ({
      x: i / (a.length - 1),
      y
    }))
  }
};
const PROG = [{
  d: "Samedi 3 avril",
  t: "17h–19h",
  w: "Retrait des dossards",
  tag: "Foyer Rural · 33 rue du Capitaine Chesnais, 51170 Chaumuzy",
  gps: "https://www.google.com/maps/search/?api=1&query=Foyer%20Rural%20de%20Chaumuzy%2C%2033%20rue%20du%20Capitaine%20Chesnais%2C%2051170%20Chaumuzy",
  key: false
}, {
  d: "Dimanche 4 avril",
  t: "07h–09h",
  w: "Retrait des dossards",
  tag: "Foyer Rural · 33 rue du Capitaine Chesnais, 51170 Chaumuzy",
  gps: "https://www.google.com/maps/search/?api=1&query=Foyer%20Rural%20de%20Chaumuzy%2C%2033%20rue%20du%20Capitaine%20Chesnais%2C%2051170%20Chaumuzy",
  key: false
}, {
  d: "Dimanche 4 avril",
  t: "09h30",
  w: "Départ Trail 24 km",
  tag: "Foyer Rural · 33 rue du Capitaine Chesnais, 51170 Chaumuzy",
  gps: "https://www.google.com/maps/search/?api=1&query=Foyer%20Rural%20de%20Chaumuzy%2C%2033%20rue%20du%20Capitaine%20Chesnais%2C%2051170%20Chaumuzy",
  key: true
}, {
  d: "Dimanche 4 avril",
  t: "10h00",
  w: "Départ Trail 18 km",
  tag: "Foyer Rural · 33 rue du Capitaine Chesnais, 51170 Chaumuzy",
  gps: "https://www.google.com/maps/search/?api=1&query=Foyer%20Rural%20de%20Chaumuzy%2C%2033%20rue%20du%20Capitaine%20Chesnais%2C%2051170%20Chaumuzy",
  key: true
}, {
  d: "Dimanche 4 avril",
  t: "11h15–13h15",
  w: "Arrivées et remise des prix",
  tag: "Foyer Rural · 33 rue du Capitaine Chesnais, 51170 Chaumuzy",
  gps: "https://www.google.com/maps/search/?api=1&query=Foyer%20Rural%20de%20Chaumuzy%2C%2033%20rue%20du%20Capitaine%20Chesnais%2C%2051170%20Chaumuzy",
  key: false
}];
const NAV = [{
  id: "territoire",
  l: "Territoire"
}, {
  id: "parcours",
  l: "Parcours"
}, {
  id: "programme",
  l: "Programme"
}, {
  id: "inscriptions",
  l: "Inscriptions"
}, {
  id: "faq",
  l: "FAQ"
}];

/* ---------- nav ---------- */
function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(scrollTopOf() > 60);
    on();
    window.addEventListener("scroll", on, {
      passive: true,
      capture: true
    });
    document.addEventListener("scroll", on, {
      passive: true,
      capture: true
    });
    return () => {
      window.removeEventListener("scroll", on, {
        capture: true
      });
      document.removeEventListener("scroll", on, {
        capture: true
      });
    };
  }, []);
  const close = () => setOpen(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (solid ? " solid" : "")
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Accueil"
  }, /*#__PURE__*/React.createElement(Logo, {
    h: solid ? 30 : 36,
    cls: "logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#" + n.id
  }, n.l))), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold nav-partner",
    href: "#partenaires"
  }, "Partenaire"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#preinscription"
  }, "Pr\xE9-inscription"), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    onClick: () => setOpen(true),
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "menu"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "menu-scrim" + (open ? " open" : ""),
    onClick: close
  }), /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    style: {
      position: "absolute",
      top: 24,
      right: 24
    },
    onClick: close,
    "aria-label": "Fermer"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "x"
  })), NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#" + n.id,
    onClick: close
  }, n.l)), /*#__PURE__*/React.createElement("a", {
    href: "#partenaires",
    onClick: close
  }, "Partenaires"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#preinscription",
    onClick: close,
    style: {
      marginTop: 20,
      justifyContent: "center"
    }
  }, "Pr\xE9-inscription")));
}

/* ---------- hero ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero dark",
    id: "top"
  }, /*#__PURE__*/React.createElement(Contour, null), /*#__PURE__*/React.createElement("div", {
    className: "hero-veil"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Logo, {
    h: 86,
    cls: "hero-logo"
  })), /*#__PURE__*/React.createElement(Reveal, {
    className: "hero-date",
    d: 1
  }, "DIMANCHE 4 AVRIL 2027 \xB7 MARNE"), /*#__PURE__*/React.createElement(Reveal, {
    tag: "h1",
    className: "display hero-title",
    d: 1
  }, "Trail de", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "l2"
  }, "Chaumuzy")), /*#__PURE__*/React.createElement(Reveal, {
    tag: "p",
    className: "hero-sub",
    d: 2
  }, "Le dimanche 4 avril 2027, vivez une exp\xE9rience trail unique au c\u0153ur du vignoble champenois. Entre for\xEAts, coteaux viticoles et villages de caract\xE8re, le Trail de Chaumuzy vous invite \xE0 d\xE9couvrir la Montagne de Reims autrement."), /*#__PURE__*/React.createElement(Reveal, {
    tag: "p",
    className: "hero-tag",
    d: 2
  }, "Deux parcours. Quatre villages. Une seule exp\xE9rience."), /*#__PURE__*/React.createElement(Reveal, {
    d: 2
  }, /*#__PURE__*/React.createElement(Countdown, null)), /*#__PURE__*/React.createElement(Reveal, {
    className: "hero-cta",
    d: 3
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#preinscription"
  }, "Pr\xE9-inscription"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold",
    href: "#parcours"
  }, "D\xE9couvrir les parcours")), /*#__PURE__*/React.createElement(Reveal, {
    className: "stat-strip",
    d: 4
  }, /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("b", null, "500"), /*#__PURE__*/React.createElement("span", null, "Participant(e)s")), /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("b", null, "2"), /*#__PURE__*/React.createElement("span", null, "Parcours")), /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("b", null, "4"), /*#__PURE__*/React.createElement("span", null, "Communes")), /*#__PURE__*/React.createElement("div", {
    className: "st"
  }, /*#__PURE__*/React.createElement("b", null, "908"), /*#__PURE__*/React.createElement("span", null, "D+ cumul\xE9 (m)")))), /*#__PURE__*/React.createElement("a", {
    className: "hero-scroll",
    href: "#territoire"
  }, "Explorer", /*#__PURE__*/React.createElement(Icon, {
    n: "chevronDown",
    s: 20
  })));
}

/* ---------- territoire ---------- */
function Territoire() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "territoire"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "terr-grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "terr-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Le territoire"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(38px,5.5vw,62px)",
      color: "var(--ink)",
      marginTop: 14
    }
  }, "D\xE9couvrez la Champagne", /*#__PURE__*/React.createElement("br", null), "autrement"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 18
    }
  }, "Le Trail de Chaumuzy traverse quatre communes de la Montagne de Reims: Chaumuzy, Belval-sous-Ch\xE2tillon, La Neuville-aux-Larris et Champlat-et-Boujacourt. Entre vignobles, for\xEAts et villages typiques, les parcours offrent une immersion unique dans l'un des territoires les plus remarquables du Grand Est."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 14,
      fontSize: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "commune-list"
  }, COMMUNES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "commune",
    key: c.nm
  }, /*#__PURE__*/React.createElement("span", {
    className: "idx"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, c.nm), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, c.meta))))), /*#__PURE__*/React.createElement(Reveal, {
    className: "terr-photo",
    d: 1
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/photo-vignes.png",
    alt: "Vignes de Champagne au-dessus de Chaumuzy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "pin",
    s: 15
  }), " Chaumuzy, Montagne de Reims")))));
}

/* ---------- parcours comparator ---------- */
function Parcours() {
  const [km, setKm] = useState(24);
  const p = PARCOURS[km];
  const color = p.tone === "accent" ? "var(--accent-safe)" : "var(--gold-ink)";
  return /*#__PURE__*/React.createElement("section", {
    className: "section cream-2",
    id: "parcours"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow center",
    style: {
      justifyContent: "center"
    }
  }, "Les parcours"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Deux parcours,", /*#__PURE__*/React.createElement("br", null), "une m\xEAme aventure")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "par-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: "par-tab" + (km === 24 ? " on" : ""),
    onClick: () => setKm(24)
  }, "Trail Exp\xE9rience \xB7 24 km"), /*#__PURE__*/React.createElement("button", {
    className: "par-tab" + (km === 18 ? " on" : ""),
    onClick: () => setKm(18)
  }, "Trail D\xE9couverte \xB7 18 km"))), /*#__PURE__*/React.createElement("div", {
    className: "card par-card",
    key: km
  }, /*#__PURE__*/React.createElement("div", {
    className: "par-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip par-role",
    style: {
      borderColor: color,
      color: color
    }
  }, p.role), /*#__PURE__*/React.createElement("div", {
    className: "par-km"
  }, p.km, /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, "KM")), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 14,
      maxWidth: 420
    },
    "data-comment-anchor": "caf89cb235-p-160-13"
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "par-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "par-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "trend",
    s: 15
  }), " D\xE9nivel\xE9 +"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.dplus, " ", /*#__PURE__*/React.createElement("small", null, "m"))), /*#__PURE__*/React.createElement("div", {
    className: "par-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "mountain",
    s: 15
  }), " Altitude"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.altMin, "\u2013", p.altMax, " ", /*#__PURE__*/React.createElement("small", null, "m"))), /*#__PURE__*/React.createElement("div", {
    className: "par-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "users",
    s: 15
  }), " Dossards max"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.coureurs)), /*#__PURE__*/React.createElement("div", {
    className: "par-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "clock",
    s: 15
  }), " Barri\xE8re horaire"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.barriere))), /*#__PURE__*/React.createElement("div", {
    className: "par-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "clock",
    s: 15
  }), " D\xE9part ", p.depart), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "pin",
    s: 15
  }), " ", window.TRACES && window.TRACES[p.km] && window.TRACES[p.km].nbCommunes || (p.km === 24 ? 4 : 3), " communes travers\xE9es")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold",
    href: "assets/trail_chaumuzy_" + p.km + "km.gpx",
    download: true,
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "arrowDown",
    s: 16
  }), " T\xE9l\xE9charger le trac\xE9 (.gpx)")), /*#__PURE__*/React.createElement("div", {
    className: "par-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "elev-h"
  }, /*#__PURE__*/React.createElement("span", null, "Trac\xE9 du parcours"), /*#__PURE__*/React.createElement("span", null, p.km, " km")), /*#__PURE__*/React.createElement(RouteMap, {
    trace: window.TRACES && window.TRACES[p.km],
    color: p.tone === "accent" ? "var(--accent)" : "var(--gold)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "elev-h",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", null, "Profil d'\xE9l\xE9vation"), /*#__PURE__*/React.createElement("span", null, "D+ ", p.dplus, " m")), /*#__PURE__*/React.createElement(ElevationProfile, {
    points: p.elev,
    dplus: p.dplus,
    altMin: p.altMin,
    altMax: p.altMax,
    dist: p.dist,
    color: p.tone === "accent" ? "var(--accent)" : "var(--gold)"
  })))));
}

/* ---------- programme ---------- */
function Programme() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "programme"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow center",
    style: {
      justifyContent: "center"
    }
  }, "Le week-end"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Programme")), /*#__PURE__*/React.createElement(Reveal, {
    className: "js-reveal-root"
  }, /*#__PURE__*/React.createElement("div", {
    className: "agenda"
  }, PROG.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "agenda-row" + (p.key ? " key" : ""),
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, p.d), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, p.t)), /*#__PURE__*/React.createElement("div", {
    className: "what"
  }, p.key && /*#__PURE__*/React.createElement("span", {
    className: "bolt"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "bolt",
    s: 20
  })), p.w), /*#__PURE__*/React.createElement("div", {
    className: "tag-sm"
  }, p.gps ? /*#__PURE__*/React.createElement("a", {
    className: "tag-gps",
    href: p.gps,
    target: "_blank",
    rel: "noopener",
    title: "Ouvrir dans Google Maps",
    "aria-label": "Itinéraire vers " + p.tag
  }, /*#__PURE__*/React.createElement("span", {
    className: "gps-pin"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "pin",
    s: 17
  })), " ", p.tag) : p.tag)))))));
}

/* ---------- inscriptions ---------- */
const MEET_B2B = "https://meet.brevo.com/mathieu-boutroux-2/rendez-vous-de-30-minutes";

/* B2B enterprise offer — premium pack + interactive quote simulator + brochure lead */
const B2B_UNIT = 50; // € / dossard
function B2BOffer() {
  const incl = ["Dossards groupés (à partir de 5 coureurs)", "Inscription centralisée + facture unique", "Logo entreprise sur la page partenaires", "Visibilité sur la zone d'arrivée", "Ravitaillement et espace d'accueil dédié", "Photos de l'équipe offertes"];
  const [n, setN] = useState(10);
  const total = n * B2B_UNIT;
  return /*#__PURE__*/React.createElement(Reveal, {
    className: "card b2b b2b-premium",
    id: "entreprise"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b2b-prem-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Pack entreprise premium"), /*#__PURE__*/React.createElement("h3", null, "Vivez le trail", /*#__PURE__*/React.createElement("br", null), "en \xE9quipe"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "F\xE9d\xE9rez vos collaborateurs autour d'un d\xE9fi sportif et convivial, au c\u0153ur du vignoble champenois. Coh\xE9sion, marque employeur et d\xE9marche RSE en une journ\xE9e."), /*#__PURE__*/React.createElement("div", {
    className: "b2b-sim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b2b-sim-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b2b-sim-lab"
  }, "Votre \xE9quipe"), /*#__PURE__*/React.createElement("div", {
    className: "b2b-stepper"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setN(Math.max(5, n - 1)),
    "aria-label": "Moins"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "b2b-stepper-n"
  }, n, /*#__PURE__*/React.createElement("small", null, "coureurs")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setN(Math.min(100, n + 1)),
    "aria-label": "Plus"
  }, "+"))), /*#__PURE__*/React.createElement("input", {
    className: "b2b-range",
    type: "range",
    min: "5",
    max: "100",
    value: n,
    onChange: e => setN(+e.target.value),
    "aria-label": "Nombre de coureurs"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b2b-sim-total"
  }, /*#__PURE__*/React.createElement("span", null, "Budget estim\xE9"), /*#__PURE__*/React.createElement("b", null, total.toLocaleString("fr-FR"), " \u20AC"), /*#__PURE__*/React.createElement("small", null, "soit ", B2B_UNIT, " \u20AC / dossard"))), /*#__PURE__*/React.createElement("div", {
    className: "b2b-cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: MEET_B2B,
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "calendar",
    s: 16
  }), " \xC9changer avec l'organisateur"))), /*#__PURE__*/React.createElement("div", {
    className: "b2b-prem-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b2b-incl-title"
  }, "Inclus dans le pack"), /*#__PURE__*/React.createElement("ul", {
    className: "b2b-incl"
  }, incl.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "award",
    s: 17
  }), " ", x))), /*#__PURE__*/React.createElement("div", {
    className: "b2b-rse"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "leaf",
    s: 16
  }), " Course \xE9co-responsable, un cadre id\xE9al pour votre communication RSE.")));
}
function TarifCard({
  km,
  tone,
  tiers
}) {
  const color = tone === "accent" ? "var(--accent-safe)" : "var(--gold-ink)";
  return /*#__PURE__*/React.createElement(Reveal, {
    className: "card tarif",
    d: tone === "accent" ? 0 : 1,
    style: {
      borderTopColor: color,
      borderTopWidth: 4,
      borderTopStyle: "solid"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "km"
  }, km, /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, "KM")), /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      borderColor: color,
      color
    }
  }, km === 18 ? 300 : 200, " dossards")), /*#__PURE__*/React.createElement("div", {
    className: "tarif-rows"
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "tarif-row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, t.l, t.s && /*#__PURE__*/React.createElement("small", null, t.s)), /*#__PURE__*/React.createElement("div", {
    className: "qte"
  }, t.q > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, t.q), " dossards") : "sur demande"), /*#__PURE__*/React.createElement("div", {
    className: "pr" + (t.acc ? " acc" : "")
  }, t.p)))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#preinscription",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "\xCAtre pr\xE9venu de l'ouverture"));
}
function Inscriptions() {
  const t18 = [{
    l: "Club",
    s: "tarif préférentiel",
    p: "15 €",
    q: 50,
    acc: true
  }, {
    l: "Grand public",
    s: "early bird",
    p: "20 €",
    q: 100
  }, {
    l: "Grand public",
    s: "standard",
    p: "25 €",
    q: 125
  }];
  const t24 = [{
    l: "Club",
    s: "tarif préférentiel",
    p: "20 €",
    q: 50,
    acc: true
  }, {
    l: "Grand public",
    s: "early bird",
    p: "25 €",
    q: 100
  }, {
    l: "Grand public",
    s: "standard",
    p: "30 €",
    q: 50
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section cream-2",
    id: "inscriptions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow center",
    style: {
      justifyContent: "center"
    }
  }, "Inscriptions"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Tarifs et inscription")), /*#__PURE__*/React.createElement(Reveal, {
    className: "alert"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "calendar",
    s: 24
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Ouverture officielle des inscriptions : octobre 2026."), " Laissez-nous votre e-mail pour \xEAtre pr\xE9venu en priorit\xE9 d\xE8s l'ouverture de la billetterie.")), /*#__PURE__*/React.createElement(DossardGauge, null), /*#__PURE__*/React.createElement(EarlyBird, null), /*#__PURE__*/React.createElement("div", {
    className: "tarif-grid"
  }, /*#__PURE__*/React.createElement(TarifCard, {
    km: 18,
    tone: "gold",
    tiers: t18
  }), /*#__PURE__*/React.createElement(TarifCard, {
    km: 24,
    tone: "accent",
    tiers: t24
  })), /*#__PURE__*/React.createElement("div", {
    className: "req"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "fileCheck",
    s: 16
  }), " Licence FFA ou PPS + pi\xE8ce d'identit\xE9 requis lors du retrait des dossards. ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@synapse-sport.com",
    style: {
      color: "var(--accent-safe)"
    }
  }), "."), /*#__PURE__*/React.createElement(B2BOffer, null), /*#__PURE__*/React.createElement(PreinscriptionForm, null)));
}

/* ---------- B2C urgency: dossard gauge + early-bird (par quota) ----------
   Chiffres pilotés par dossards.json. La barre se remplit à l'apparition;
   l'early bird s'appuie sur le nombre de dossards (earlyBirdThreshold), pas sur une date. */
const DOSSARDS = {
  total: 500,
  categories: [{
    label: "Club",
    sold: 0,
    quota: 100
  }, {
    label: "Grand Public",
    sold: 0,
    quota: 375
  }]
}; // valeurs de repli si dossards.json est indisponible (ex. fichier unique hors-ligne)

function DossardGauge() {
  const [ref, seen] = useInView();
  const [data, setData] = useState(DOSSARDS);
  // Pilotée par dossards.json (reflète le nombre d'inscrits Miles Republic).
  // Mettez à jour ce fichier depuis votre espace organisateur Miles Republic — ou via un script de synchro.
  useEffect(() => {
    let on = true;
    const load = () => fetch("dossards.json", {
      cache: "no-store"
    }).then(r => r.ok ? r.json() : null).then(d => {
      if (on && d && Array.isArray(d.categories)) setData(d);
    }).catch(() => {});
    load();
    const id = setInterval(load, 120000); // rafraîchit toutes les 2 min
    return () => {
      on = false;
      clearInterval(id);
    };
  }, []);
  const cats = data.categories || [];
  const total = data.total || cats.reduce((s, c) => s + (c.quota || 0), 0) || 500;
  const sold = Math.min(cats.reduce((s, c) => s + (c.sold || 0), 0), total);
  const pct = Math.min(100, Math.round(sold / total * 100));
  const left = total - sold;
  const updated = data.updated ? new Date(data.updated).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }) : null;
  const almostFull = pct >= 80;
  const regUrl = data.registrationUrl || "";
  return /*#__PURE__*/React.createElement("div", {
    className: "gauge",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "gauge-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gauge-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gauge-num"
  }, sold), /*#__PURE__*/React.createElement("span", {
    className: "gauge-tot"
  }, "/ ", total, " dossards r\xE9serv\xE9s")), left > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "gauge-left" + (almostFull ? " hot" : "")
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "bolt",
    s: 15
  }), " Plus que ", left, " places") : /*#__PURE__*/React.createElement("span", {
    className: "gauge-left hot"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "bolt",
    s: 15
  }), " Complet")), /*#__PURE__*/React.createElement("div", {
    className: "gauge-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gauge-fill",
    style: {
      width: seen ? pct + "%" : "0%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "gauge-quotas"
  }, cats.map((c, i) => {
    const q = c.quota || 0;
    const cs = Math.min(c.sold || 0, q);
    const cpct = q ? Math.min(100, Math.round(cs / q * 100)) : 0;
    const cleft = Math.max(0, q - cs);
    const cfull = cleft === 0;
    return /*#__PURE__*/React.createElement("div", {
      className: "quota",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "quota-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "quota-label"
    }, c.label), /*#__PURE__*/React.createElement("span", {
      className: "quota-left" + (cfull ? " full" : "")
    }, cfull ? "Complet" : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, cs), " / ", q, " places"))), /*#__PURE__*/React.createElement("div", {
      className: "quota-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "quota-fill cat" + i,
      style: {
        width: seen ? cpct + "%" : "0%"
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "gauge-foot muted"
  }, updated ? "Quotas mis à jour au " + updated : "Quotas sur la billetterie Miles Republic"), regUrl && /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary gauge-cta",
    href: regUrl,
    target: "_blank",
    rel: "noopener"
  }, "S'inscrire sur Miles Republic ", /*#__PURE__*/React.createElement(Icon, {
    n: "arrow",
    s: 16
  })));
}
const EARLYBIRD_THRESHOLD = 100; // repli : nombre de dossards au tarif early bird (logique quota, piloté par dossards.json)

function EarlyBird() {
  const [data, setData] = useState({
    threshold: EARLYBIRD_THRESHOLD,
    sold: 0
  });
  useEffect(() => {
    let on = true;
    fetch("dossards.json", {
      cache: "no-store"
    }).then(r => r.ok ? r.json() : null).then(d => {
      if (!on || !d) return;
      const sold = Array.isArray(d.categories) ? d.categories.reduce((s, c) => s + (c.sold || 0), 0) : 0;
      setData({
        threshold: d.earlyBirdThreshold || EARLYBIRD_THRESHOLD,
        sold
      });
    }).catch(() => {});
    return () => {
      on = false;
    };
  }, []);
  const threshold = data.threshold;
  const left = Math.max(0, threshold - data.sold);
  const done = left === 0;
  return /*#__PURE__*/React.createElement(Reveal, {
    className: "earlybird"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "bolt",
    s: 16
  }), " Early bird"), /*#__PURE__*/React.createElement("div", {
    className: "eb-text"
  }, /*#__PURE__*/React.createElement("b", null, done ? "Tarif early bird épuisé — tarif standard en vigueur" : "Tarif préférentiel sur les " + threshold + " premiers dossards"), /*#__PURE__*/React.createElement("span", null, done ? "Les premiers dossards au tarif réduit ont tous trouvé preneur." : "Jusqu'à 5 € d'économie par dossard. Réservé aux premiers inscrits."))), /*#__PURE__*/React.createElement("div", {
    className: "eb-count"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-days"
  }, left), /*#__PURE__*/React.createElement("span", {
    className: "eb-unit"
  }, done ? "place early bird" : "places early bird")));
}

/* ---------- Brevo pre-inscription form ----------
   Wired to the Marne Outdoor XP Brevo form. To change list/fields, regenerate the
   Brevo form embed and update `action` + the field names below. */
const BREVO = {
  action: "https://9b0284a6.sibforms.com/serve/MUIFAOK0pfhxGAPoqY-pFqcs6MtpyYLXKO-Wdx9wtbSWOat38S4RePyklschBxoFW_K05YI6W51ctw79vo1Y-D-TdxXwlNSKaS0OrbXLaFX9PbR1rjN3LKbOgIdYGRxsa4gR91qVgB2al0G-0Kk-bkqeVULnHd-AV9IQYjLkwc90_qx9a9Utl-KeR4riYthWcYqkIoMcPpZ_Fg2x_Q==",
  emailField: "EMAIL",
  firstField: "PRENOM",
  lastField: "NOM",
  distField: "CHAUMUZY_DISTANCE",
  distField2: "CHAUMUZY_24KM" // second (required) distance attribute on the Brevo form
};
function PreinscriptionForm() {
  const [state, setState] = useState("idle"); // idle | sending | ok | error
  const [dist, setDist] = useState("");
  const formRef = useRef(null);
  const onSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // If Brevo isn't configured yet, fall back to a mailto so nothing is lost.
    if (BREVO.action.includes("REPLACE_WITH_YOUR_FORM_ID")) {
      const data = new FormData(form);
      const body = encodeURIComponent(`Prénom: ${data.get(BREVO.firstField) || ""}\nNom: ${data.get(BREVO.lastField) || ""}\nEmail: ${data.get(BREVO.emailField) || ""}\nDistance: ${data.get(BREVO.distField) || dist || "—"}`);
      window.location.href = `mailto:contact@synapse-sport.com?subject=Pré-inscription%20Trail%20de%20Chaumuzy%202027&body=${body}`;
      setState("ok");
      return;
    }
    // honeypot tripped → silently treat as success (it's a bot)
    if (form.elements.email_address_check && form.elements.email_address_check.value) {
      setState("ok");
      return;
    }
    try {
      setState("sending");
      await fetch(BREVO.action, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
      });
      setState("ok"); // no-cors → opaque response, assume success
    } catch (err) {
      setState("error");
    }
  };
  if (state === "ok") {
    return /*#__PURE__*/React.createElement(Reveal, {
      className: "card preinsc preinsc-done"
    }, /*#__PURE__*/React.createElement("div", {
      className: "preinsc-check"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "award",
      s: 30
    })), /*#__PURE__*/React.createElement("h3", null, "Merci, c'est not\xE9\xA0!"), /*#__PURE__*/React.createElement("p", null, "Vous serez pr\xE9venu(e) en priorit\xE9 d\xE8s l'ouverture des inscriptions. \xC0 tr\xE8s vite sur les sentiers de Chaumuzy."), /*#__PURE__*/React.createElement(AddToCalendar, null));
  }
  return /*#__PURE__*/React.createElement(Reveal, {
    className: "card preinsc",
    id: "preinscription"
  }, /*#__PURE__*/React.createElement("div", {
    className: "preinsc-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Liste d'attente"), /*#__PURE__*/React.createElement("h3", null, "Soyez pr\xE9venu(e) en priorit\xE9"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Inscriptions ouvertes en octobre 2026. Laissez vos coordonn\xE9es : vous recevrez le coup d'envoi avant tout le monde.")), /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    className: "preinsc-form",
    onSubmit: onSubmit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Pr\xE9nom"), /*#__PURE__*/React.createElement("input", {
    name: BREVO.firstField,
    type: "text",
    autoComplete: "given-name",
    placeholder: "Camille",
    required: true
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Nom"), /*#__PURE__*/React.createElement("input", {
    name: BREVO.lastField,
    type: "text",
    autoComplete: "family-name",
    placeholder: "Durand",
    required: true
  }))), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "E-mail"), /*#__PURE__*/React.createElement("input", {
    name: BREVO.emailField,
    type: "email",
    autoComplete: "email",
    placeholder: "camille.durand@email.fr",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", null, "Parcours qui vous int\xE9resse"), /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "radiogroup",
    "aria-label": "Parcours"
  }, [["24", "Trail Expérience · 24 km"], ["18", "Trail Découverte · 18 km"], ["?", "Je ne sais pas encore"]].map(([v, l]) => /*#__PURE__*/React.createElement("label", {
    key: v,
    className: "seg-opt" + (dist === v ? " on" : "")
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: BREVO.distField,
    value: v,
    checked: dist === v,
    onChange: () => setDist(v),
    required: true
  }), l)))), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: BREVO.distField2,
    value: dist
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email_address_check",
    defaultValue: "",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-9999px",
      width: 1,
      height: 1,
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "locale",
    value: "fr"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "html_type",
    value: "simple"
  }), /*#__PURE__*/React.createElement("label", {
    className: "consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    required: true
  }), /*#__PURE__*/React.createElement("span", null, "J'accepte de recevoir des informations sur le Trail de Chaumuzy et que mes donn\xE9es soient trait\xE9es conform\xE9ment \xE0 la ", /*#__PURE__*/React.createElement("a", {
    href: "mentions-legales.html#donnees",
    target: "_blank",
    rel: "noopener"
  }, "politique de confidentialit\xE9"), ".")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: state === "sending",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, state === "sending" ? "Envoi…" : "Je m'inscris à la liste d'attente"), state === "error" && /*#__PURE__*/React.createElement("p", {
    className: "form-err"
  }, "Un souci est survenu. R\xE9essayez ou \xE9crivez-nous \xE0 contact@synapse-sport.com."), /*#__PURE__*/React.createElement("p", {
    className: "form-fine"
  }, "Aucun spam. D\xE9sinscription en un clic. Vos donn\xE9es ne sont jamais revendues.")));
}

/* ---------- add to calendar ---------- */
function AddToCalendar() {
  // Google Calendar pre-filled link (UTC times: 24km start 09:30 local = 07:30Z)
  const g = "https://calendar.google.com/calendar/render?action=TEMPLATE" + "&text=" + encodeURIComponent("Trail de Chaumuzy 2027") + "&dates=20270404T073000Z/20270404T120000Z" + "&details=" + encodeURIComponent("1re édition. Deux parcours nature au cœur du vignoble champenois. Infos : https://trail-chaumuzy.fr") + "&location=" + encodeURIComponent("Foyer Rural de Chaumuzy, 33 rue du Capitaine Chesnais, 51170 Chaumuzy");
  return /*#__PURE__*/React.createElement("div", {
    className: "cal-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-label"
  }, "Ajouter au calendrier"), /*#__PURE__*/React.createElement("div", {
    className: "cal-row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold",
    href: "assets/trail-chaumuzy-2027.ics",
    download: true
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "calendar",
    s: 16
  }), " Apple \xB7 Outlook (.ics)"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost-dark cal-google",
    href: g,
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "calendar",
    s: 16
  }), " Google Agenda")));
}

/* ---------- partenaires ---------- */
/* Mur de logos partenaires masqué tant qu'il n'y a pas de partenaires réels à afficher.
   Repasser à true pour réafficher Partenaire titre / Officiels / Communes / Mécènes. */
const SHOW_PARTNER_WALL = false;
/* PLACEHOLDER perks — à valider par l'organisateur. */
const PARTNER_TIERS = [{
  name: "Partenaire titre",
  price: "5 000 €",
  tone: "accent",
  featured: true,
  slots: "1 exclusivité",
  perks: ["Naming « présenté par »", "Logo dominant sur tous supports", "Arche d'arrivée + dossards", "10 dossards offerts", "Prise de parole podium"]
}, {
  name: "Partenaire officiel",
  price: "1 500 €",
  tone: "gold",
  slots: "4 places",
  total: 4,
  taken: 0,
  perks: ["Logo sur banderoles et site", "Stand sur le village course", "5 dossards offerts", "Mention réseaux sociaux"]
}, {
  name: "Mécène",
  price: "À partir de 500 €",
  tone: "ink",
  slots: "Places ouvertes",
  perks: ["Logo sur la page partenaires", "Reçu fiscal (mécénat)", "Invitations village et ravitaillement"]
}];
function Partenaires() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "partenaires"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow center",
    style: {
      justifyContent: "center"
    }
  }, "Devenez partenaire"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Associez votre marque", /*#__PURE__*/React.createElement("br", null), "\xE0 l'\xE9v\xE9nement"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, "Une 1", /*#__PURE__*/React.createElement("sup", null, "re"), " \xE9dition, 500 coureurs et 4 communes du vignoble champenois\xA0: une visibilit\xE9 locale forte pour votre entreprise. Trois niveaux d'engagement, \xE0 votre image.")), /*#__PURE__*/React.createElement("div", {
    className: "tier-grid tier-grid-3"
  }, PARTNER_TIERS.map(tr => {
    const color = tr.tone === "accent" ? "var(--accent-safe)" : tr.tone === "gold" ? "var(--gold-ink)" : "var(--ink)";
    const left = tr.total != null ? tr.total - tr.taken : null;
    return /*#__PURE__*/React.createElement(Reveal, {
      className: "tier" + (tr.featured ? " tier-feat" : "") + (tr.sold ? " tier-sold" : ""),
      key: tr.name
    }, tr.sold ? /*#__PURE__*/React.createElement("div", {
      className: "tier-ribbon tier-ribbon-sold"
    }, "R\xE9serv\xE9 2027") : tr.featured && /*#__PURE__*/React.createElement("div", {
      className: "tier-ribbon"
    }, "Le plus visible"), /*#__PURE__*/React.createElement("div", {
      className: "tier-name",
      style: {
        color
      }
    }, tr.name), /*#__PURE__*/React.createElement("div", {
      className: "tier-slots"
    }, tr.sold ? /*#__PURE__*/React.createElement("span", {
      className: "tier-soldtag"
    }, "Exclusivit\xE9 attribu\xE9e") : left != null ? /*#__PURE__*/React.createElement("span", {
      className: "tier-left"
    }, /*#__PURE__*/React.createElement("b", null, left), " / ", tr.total, " places restantes") : tr.slots), /*#__PURE__*/React.createElement("div", {
      className: "tier-price"
    }, tr.sold ? "Exclusivité" : tr.price), tr.sold ? /*#__PURE__*/React.createElement("div", {
      className: "tier-soldmsg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tier-partner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tier-partner-logo"
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo-chaumuzy.jpeg",
      alt: "Blason de la Commune de Chaumuzy"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tier-partner-name"
    }, "Commune de", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Chaumuzy"))), /*#__PURE__*/React.createElement("p", {
      className: "tier-soldmsg-sub"
    }, "Partenaire titre de cette 1", /*#__PURE__*/React.createElement("sup", null, "re"), " \xE9dition \u2014 visibilit\xE9 maximale et exclusivit\xE9. Rendez-vous en 2028 pour ce palier.")) : /*#__PURE__*/React.createElement("ul", {
      className: "tier-perks"
    }, tr.perks.map((p, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "tier-check",
      style: {
        color
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "award",
      s: 15
    })), " ", p))), tr.sold ? /*#__PURE__*/React.createElement("span", {
      className: "btn btn-sold",
      "aria-disabled": "true"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "award",
      s: 16
    }), " Exclusivit\xE9 attribu\xE9e") : /*#__PURE__*/React.createElement("a", {
      className: "btn " + (tr.featured ? "btn-primary" : "btn-gold"),
      href: MEET_B2B,
      target: "_blank",
      rel: "noopener",
      style: {
        width: "100%",
        justifyContent: "center"
      }
    }, "Choisir ce palier"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "part-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: MEET_B2B,
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "calendar",
    s: 16
  }), " \xC9changer avec l'organisateur")), SHOW_PARTNER_WALL && /*#__PURE__*/React.createElement("div", {
    className: "part-wall"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "js-reveal-root",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "part-tier",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Partenaire titre"), /*#__PURE__*/React.createElement("div", {
    className: "logo-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-slot lg logo-filled"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-chaumuzy.jpeg",
    alt: "Blason de la Commune de Chaumuzy"
  }), /*#__PURE__*/React.createElement("span", null, "Commune de Chaumuzy")))), /*#__PURE__*/React.createElement("div", {
    className: "part-tier",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Partenaires officiels"), /*#__PURE__*/React.createElement("div", {
    className: "logo-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-slot"
  }, "Partenaire 01"), /*#__PURE__*/React.createElement("div", {
    className: "logo-slot"
  }, "Partenaire 02"))), /*#__PURE__*/React.createElement("div", {
    className: "part-tier",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Communes partenaires"), /*#__PURE__*/React.createElement("div", {
    className: "logo-row"
  }, COMMUNES.filter(c => c.nm !== "Chaumuzy").map(c => /*#__PURE__*/React.createElement("div", {
    className: "logo-slot commune-slot sm" + (c.logo ? " logo-filled" : ""),
    key: c.nm
  }, c.logo ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: c.logo,
    alt: "Blason de " + c.nm
  }), /*#__PURE__*/React.createElement("span", null, c.nm)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "blason",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "shield",
    s: 20
  })), c.nm))))), /*#__PURE__*/React.createElement("div", {
    className: "part-tier",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("h4", null, "M\xE9c\xE8nes"), /*#__PURE__*/React.createElement("div", {
    className: "logo-row"
  }, [1, 2, 3, 4].map(n => /*#__PURE__*/React.createElement("div", {
    className: "logo-slot sm",
    key: n
  }, "M\xE9c\xE8ne 0", n))))))));
}

/* ---------- FAQ ----------
   Réponses pré-remplies RÉALISTES mais À VALIDER par l'organisateur.
   Les passages marqués (à confirmer) doivent être vérifiés avant publication. */
const FAQ = [{
  q: "Comment puis-je m'inscrire ?",
  a: "Les inscriptions officielles ouvrent en octobre 2026, en ligne. En attendant, laissez votre e-mail via le formulaire de pré-inscription : vous serez prévenu(e) en priorité dès l'ouverture de la billetterie."
}, {
  q: "Quels documents dois-je fournir ?",
  a: "Une licence FFA en cours de validité (Athlé Compétition, Athlé Running ou Pass'Running) OU un Parcours de Prévention Santé (PPS), accompagnée d'une pièce d'identité, à présenter lors du retrait du dossard."
}, {
  q: "Où et quand retirer mon dossard ?",
  a: "Au Foyer Rural de Chaumuzy (33 rue du Capitaine Chesnais) : le samedi 3 avril de 17h à 19h, et le dimanche 4 avril de 7h à 9h. Aucun dossard ne sera envoyé par courrier."
}, {
  q: "Où se garer le jour de la course ?",
  a: "Un parking gratuit est fléché à proximité du village course, à Chaumuzy. Nous vous recommandons le covoiturage : l'accès au village est limité le matin de l'épreuve."
}, {
  q: "Combien y a-t-il de ravitaillements ?",
  a: "Un ravitaillement principal est situé à La Neuville-aux-Larris. Un ravitaillement d'arrivée avec produits du terroir vous attend à Chaumuzy."
}, {
  q: "Le matériel est-il imposé ?",
  a: "Le gobelet personnel est obligatoire (course éco-responsable, sans gobelet jetable). Selon la météo, une réserve d'eau et une veste coupe-vent pourront être recommandées ou rendues obligatoires (précisé au règlement)."
}, {
  q: "Y a-t-il un âge minimum ?",
  a: "L'épreuve est soumise aux conditions d'âge fixées par la réglementation FFA pour les distances concernées (à confirmer selon les catégories retenues). Les mineurs doivent fournir une autorisation parentale."
}, {
  q: "Quelle est la politique d'annulation ?",
  a: "Les conditions d'annulation et de remboursement (par le coureur ou par l'organisation, notamment en cas de force majeure ou de météo dangereuse) seront précisées dans le règlement officiel."
}, {
  q: "Proposez-vous une offre pour les entreprises ?",
  a: "Oui. Le Pack entreprise (50 € / dossard) permet d'engager une équipe avec inscription centralisée, facture unique et visibilité de votre marque. Réservez un rendez-vous de 30 minutes via la section « Inscriptions »."
}];
function FaqItem({
  item,
  open,
  onToggle
}) {
  const bodyRef = useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "faq-item" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    onClick: onToggle,
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
    className: "faq-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "chevronDown",
    s: 22
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq-a",
    style: {
      maxHeight: open ? bodyRef.current ? bodyRef.current.scrollHeight + 24 : 400 : 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    ref: bodyRef
  }, item.a)));
}
function Faq() {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow center",
    style: {
      justifyContent: "center"
    }
  }, "Questions fr\xE9quentes"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Tout savoir avant le d\xE9part")), /*#__PURE__*/React.createElement(Reveal, {
    className: "faq-list"
  }, FAQ.map((item, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    item: item,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  }))), /*#__PURE__*/React.createElement("p", {
    className: "faq-foot"
  }, "Une autre question ? \xC9crivez-nous \xE0 ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@synapse-sport.com"
  }, "contact@synapse-sport.com"))));
}

/* ---------- footer ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    h: 46,
    cls: "flogo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      maxWidth: 280,
      fontSize: 15
    }
  }, "Trail de Chaumuzy \u2014 1", /*#__PURE__*/React.createElement("sup", null, "re"), " \xE9dition. Organis\xE9 par Marne Outdoor Exp\xE9riences."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, COMMUNES.map(c => /*#__PURE__*/React.createElement("span", {
    className: "chip",
    key: c.nm,
    style: {
      fontSize: 12,
      padding: "5px 11px"
    }
  }, c.nm)).slice(0, 0))), /*#__PURE__*/React.createElement("div", {
    className: "footer-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Course"), NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#" + n.id
  }, n.l))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@synapse-sport.com"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "phone",
    s: 15
  }), " contact@synapse-sport.com")), /*#__PURE__*/React.createElement("a", {
    href: "#preinscription"
  }, "Pr\xE9-inscription"), /*#__PURE__*/React.createElement("a", {
    href: MEET_B2B,
    target: "_blank",
    rel: "noopener"
  }, "Devenir partenaire")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Infos"), /*#__PURE__*/React.createElement("p", null, "Dimanche 4 avril 2027"), /*#__PURE__*/React.createElement("p", null, "D\xE9part 09h30 \xB7 Chaumuzy (51)"), /*#__PURE__*/React.createElement("a", {
    href: "mentions-legales.html"
  }, "Mentions l\xE9gales"), /*#__PURE__*/React.createElement("a", {
    href: "mentions-legales.html#donnees"
  }, "Confidentialit\xE9 (RGPD)")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Marne Outdoor Exp\xE9riences \xB7 Tous droits r\xE9serv\xE9s"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, "Organis\xE9 avec ", /*#__PURE__*/React.createElement(Icon, {
    n: "heart",
    s: 15,
    style: {
      color: "var(--accent)"
    }
  }), " en Champagne"))));
}

/* shared: robust scroll position (works whether window, <html> or <body> scrolls) */
function scrollTopOf() {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

/* ---------- sticky CTA ---------- */
function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(scrollTopOf() > window.innerHeight * 1.1);
    on();
    window.addEventListener("scroll", on, {
      passive: true,
      capture: true
    });
    document.addEventListener("scroll", on, {
      passive: true,
      capture: true
    });
    return () => {
      window.removeEventListener("scroll", on, {
        capture: true
      });
      document.removeEventListener("scroll", on, {
        capture: true
      });
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "sticky-cta" + (show ? " show" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("b", null, "Trail de Chaumuzy"), /*#__PURE__*/React.createElement("span", null, "Dimanche 4 avril 2027 \xB7 Inscriptions : ouverture octobre 2026")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold sp",
    href: "#programme"
  }, "Programme"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#preinscription"
  }, "Pr\xE9-inscription")));
}
Object.assign(window, {
  Nav,
  Hero,
  Territoire,
  Parcours,
  Programme,
  Inscriptions,
  Partenaires,
  Faq,
  Footer,
  StickyCTA
});