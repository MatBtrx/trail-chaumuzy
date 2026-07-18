/* hifi-sections.jsx - page sections for Trail de Chaumuzy 2027 */

/* ---------- data ---------- */
/* Jauge de dossards + early bird masqués tant que la billetterie n'est pas ouverte.
   Repasser à true à l'ouverture des inscriptions (octobre 2026). */
const SHOW_GAUGE = false;
/* CTA de téléchargement des tracés GPX masqué pour le moment. Repasser à true pour réafficher. */
const SHOW_GPX = false;
/* Pack entreprise (B2B) masqué pour le moment. Repasser à true pour réafficher. */
const SHOW_B2B = false;
const COMMUNES = [
{ nm: "Chaumuzy", meta: "" },
{ nm: "Belval-sous-Châtillon", meta: "" },
{ nm: "La Neuville-aux-Larris", meta: "", logo: "assets/logo-la-neuville.png" },
{ nm: "Champlat-et-Boujacourt", meta: "" }];


const PARCOURS = {
  24: {
    km: 24, role: "Trail Expérience", tone: "accent",
    desc: "Un tracé plus exigeant pour les traileurs confirmés souhaitant profiter pleinement des reliefs, des panoramas et des chemins emblématiques de la Montagne de Reims. Plus de distance, plus de dénivelé, plus d'immersion.",
    dplus: 450, altMin: 123, altMax: 263, dist: 23.9, coureurs: 200, depart: "09h30", barriere: "3h45",
    elev: [138, 159, 185, 210, 205, 205, 168, 142, 132, 137, 127, 132, 138, 156, 174, 196, 222, 233, 250, 256, 259, 258, 260, 261, 259, 249, 212, 227, 247, 253, 249, 243, 234, 221, 200, 179, 170, 204, 227, 240, 235, 240, 240, 245, 242, 244, 247, 232, 225, 221, 202, 183, 161, 176, 206, 213, 221, 224, 224, 222, 209, 203, 186, 160, 138].map((y, i, a) => ({ x: i / (a.length - 1), y }))
  },
  18: {
    km: 18, role: "Trail Découverte", tone: "gold",
    desc: "Un parcours accessible et dynamique permettant de découvrir l'univers du trail dans un environnement exceptionnel. Idéal pour les coureurs sur route souhaitant franchir le pas vers le trail ou pour les pratiquants à la recherche d'une expérience nature conviviale.",
    dplus: 340, altMin: 123, altMax: 261, dist: 18.3, coureurs: 300, depart: "10h00", barriere: "2h40",
    elev: [138, 154, 175, 194, 210, 206, 205, 192, 165, 144, 133, 134, 136, 127, 130, 135, 143, 157, 170, 188, 206, 223, 232, 248, 251, 258, 260, 259, 254, 236, 228, 238, 239, 239, 238, 239, 244, 242, 242, 244, 248, 240, 226, 226, 223, 213, 193, 180, 162, 167, 190, 212, 214, 213, 223, 224, 224, 224, 219, 201, 202, 194, 175, 153, 138].map((y, i, a) => ({ x: i / (a.length - 1), y }))
  }
};

const PROG = [
{ d: "Samedi 3 avril", t: "17h-19h", w: "Retrait des dossards", tag: "Foyer Rural - 33 rue du Capitaine Chesnais, 51170 Chaumuzy", gps: "https://maps.app.goo.gl/iQEZokPHo54NmzSU9", key: false },
{ d: "Dimanche 4 avril", t: "07h-09h", w: "Retrait des dossards", tag: "Foyer Rural - 33 rue du Capitaine Chesnais, 51170 Chaumuzy", gps: "https://maps.app.goo.gl/iQEZokPHo54NmzSU9", key: false },
{ d: "Dimanche 4 avril", t: "09h30", w: "Départ Trail 24 km", tag: "Foyer Rural - 33 rue du Capitaine Chesnais, 51170 Chaumuzy", gps: "https://maps.app.goo.gl/iQEZokPHo54NmzSU9", key: true },
{ d: "Dimanche 4 avril", t: "10h00", w: "Départ Trail 18 km", tag: "Foyer Rural - 33 rue du Capitaine Chesnais, 51170 Chaumuzy", gps: "https://maps.app.goo.gl/iQEZokPHo54NmzSU9", key: true },
{ d: "Dimanche 4 avril", t: "11h15-13h15", w: "Arrivées et remise des prix", tag: "Foyer Rural - 33 rue du Capitaine Chesnais, 51170 Chaumuzy", gps: "https://maps.app.goo.gl/iQEZokPHo54NmzSU9", key: false }];


const NAV = [
{ id: "territoire", l: "Territoire" },
{ id: "parcours", l: "Parcours" },
{ id: "programme", l: "Programme" },
{ id: "inscriptions", l: "Inscriptions" },
{ id: "faq", l: "FAQ" }];


/* ---------- nav ---------- */
function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(scrollTopOf() > 60);
    on();
    window.addEventListener("scroll", on, { passive: true, capture: true });
    document.addEventListener("scroll", on, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", on, { capture: true });
      document.removeEventListener("scroll", on, { capture: true });
    };
  }, []);
  const close = () => setOpen(false);
  return (
    <React.Fragment>
      <nav className={"nav" + (solid ? " solid" : "")}>
        <a href="#top" aria-label="Accueil"><Logo h={solid ? 30 : 36} cls="logo" /></a>
        <div className="nav-links">
          {NAV.map((n) => <a key={n.id} href={"#" + n.id}>{n.l}</a>)}
        </div>
        <div className="nav-cta">
          <a className="btn btn-gold nav-partner" href="#partenaires">Partenaire</a>
          <a className="btn btn-primary" href="#preinscription">Pré-inscription</a>
          <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Menu"><Icon n="menu" /></button>
        </div>
      </nav>
      <div className={"menu-scrim" + (open ? " open" : "")} onClick={close} />
      <div className={"mobile-menu" + (open ? " open" : "")}>
        <button className="nav-burger" style={{ position: "absolute", top: 24, right: 24 }} onClick={close} aria-label="Fermer"><Icon n="x" /></button>
        {NAV.map((n) => <a key={n.id} href={"#" + n.id} onClick={close}>{n.l}</a>)}
        <a href="#partenaires" onClick={close}>Partenaires</a>
      </div>
    </React.Fragment>);

}

/* ---------- hero ---------- */
function Hero() {
  return (
    <header className="hero dark" id="top">
      <Contour />
      <div className="hero-veil" />
      <div className="hero-inner">
        <Reveal><Logo h={86} cls="hero-logo" /></Reveal>
        <Reveal className="hero-date" d={1}>DIMANCHE 4 AVRIL 2027 - MARNE</Reveal>
        <Reveal tag="h1" className="display hero-title" d={1}>Trail de<br /><span className="l2">Chaumuzy</span></Reveal>
        <Reveal tag="p" className="hero-sub" d={2}>Le dimanche 4 avril 2027, vivez une expérience trail unique au cœur du vignoble champenois. Entre forêts, coteaux viticoles et villages de caractère, le Trail de Chaumuzy vous invite à découvrir la Montagne de Reims autrement.</Reveal>
        <Reveal tag="p" className="hero-tag" d={2}>Deux parcours. Quatre villages. Une seule expérience.</Reveal>
        <Reveal d={2}><Countdown /></Reveal>
        <Reveal className="hero-cta" d={3}>
          <a className="btn btn-primary" href="#preinscription">Être prévenu de l'ouverture</a>
          <a className="btn btn-gold" href="#parcours">Découvrir les parcours</a>
        </Reveal>
        <Reveal className="stat-strip" d={4}>
          <div className="st"><b>500</b><span>Participant(e)s</span></div>
          <div className="st"><b>2</b><span>Parcours</span></div>
          <div className="st"><b>4</b><span>Communes</span></div>
          <div className="st"><b>908</b><span>D+ cumulé (m)</span></div>
        </Reveal>
      </div>
      <a className="hero-scroll" href="#territoire">Explorer<Icon n="chevronDown" s={20} /></a>
    </header>);

}

/* ---------- territoire ---------- */
function Territoire() {
  return (
    <section className="section" id="territoire">
      <div className="wrap">
        <div className="terr-grid">
          <Reveal className="terr-text">
            <div className="eyebrow">Nouvelle épreuve — 1<sup>re</sup> édition</div>
            <h2 className="display" style={{ fontSize: "clamp(38px,5.5vw,62px)", color: "var(--ink)", marginTop: 14 }}>Une nouvelle course<br />en Champagne</h2>
            <p className="lead" style={{ marginTop: 18 }}>Le 4 avril 2027, la Montagne de Reims accueille sa nouvelle épreuve nature. Pour cette première édition, le Trail de Chaumuzy traverse quatre communes du vignoble : Chaumuzy, village-départ au pied des coteaux, Belval-sous-Châtillon et ses vignes en balcon, La Neuville-aux-Larris en lisière de forêt, et Champlat-et-Boujacourt, entre champs et vignes.</p>
            <p className="lead" style={{ marginTop: 14 }}>Une course au cœur du Parc naturel régional de la Montagne de Reims, à moins de 30 minutes de Reims et d'Épernay.</p>
            <div className="commune-list">
              {COMMUNES.map((c, i) =>
              <div className="commune" key={c.nm}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nm">{c.nm}</span>
                  <span className="meta">{c.meta}</span>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal className="terr-photo" d={1}>
            <img src="assets/photo-vignes.png" alt="Vignes de Champagne au-dessus de Chaumuzy" />
            <div className="tag"><Icon n="pin" s={15} /> Chaumuzy, Montagne de Reims</div>
          </Reveal>
        </div>
      </div>
    </section>);

}

/* ---------- œnotourisme ---------- */
const OENO = [
  { ic: "flute", t: "Terroir de pinot", b: "Pinot noir et meunier règnent sur la Montagne de Reims. Autour du parcours, une dizaine de grands crus et des villages vignerons de caractère composent l'un des plus beaux paysages viticoles de Champagne." },
  { ic: "leaf", t: "Vignes et forêt", b: "Le tracé alterne rangs de vigne, plateau agricole et lisières boisées. Le massif forestier de la Montagne de Reims, plus de 20 000 hectares, couronne les coteaux et offre aux coureurs l'ombre et un dénivelé franc." },
  { ic: "route", t: "Un territoire à explorer", b: "La Montagne de Reims se parcourt aussi à pied et à vélo : sentiers balisés, tour du massif par le GR 141 et curiosités comme les Faux de Verzy, au cœur du Parc naturel régional, à moins de 30 minutes de Reims comme d'Épernay." },
];
function Oeno() {
  return (
    <section className="section cream-2" id="oenotourisme">
      <div className="wrap">
        <Reveal className="oeno-head">
          <div className="eyebrow">Œnotourisme et nature</div>
          <h2 className="display" style={{ fontSize: "clamp(38px,5.5vw,62px)", color: "var(--ink)", marginTop: 14 }}>Courez le matin,<br />savourez l'après-midi</h2>
          <p className="lead" style={{ marginTop: 18 }}>Au-delà de la course, la Montagne de Reims est un terrain de jeu grandeur nature. Prolongez l'expérience sur un vignoble de Champagne inscrit au patrimoine mondial de l'UNESCO, à moins de 30 minutes de Reims comme d'Épernay.</p>
        </Reveal>
        <div className="oeno-grid">
          {OENO.map((o, i) =>
          <Reveal className="oeno-card" d={i + 1} key={o.t}>
              <div className="oeno-ic"><Icon n={o.ic} s={24} /></div>
              <h3 className="display">{o.t}</h3>
              <p className="muted">{o.b}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- parcours comparator ---------- */
function Parcours() {
  const [km, setKm] = useState(24);
  const p = PARCOURS[km];
  const color = p.tone === "accent" ? "var(--accent-safe)" : "var(--gold-ink)";
  return (
    <section className="section cream-2" id="parcours">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow center" style={{ justifyContent: "center" }}>Les parcours</div>
          <h2 className="display">Deux parcours,<br />une même aventure</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
          <div className="par-tabs">
            <button className={"par-tab" + (km === 24 ? " on" : "")} onClick={() => setKm(24)}>Trail Expérience - 24 km</button>
            <button className={"par-tab" + (km === 18 ? " on" : "")} onClick={() => setKm(18)}>Trail Découverte - 18 km</button>
          </div>
        </div>
        <div className="card par-card" key={km}>
          <div className="par-left">
            <h3 className={"chip par-role"} style={{ borderColor: color, color: color }}>{p.role}<span className="sr-only"> - {p.km} km</span></h3>
            <div className="par-km">{p.km}<span className="u">KM</span></div>
            <p className="lead" style={{ marginTop: 14, maxWidth: 420 }}>{p.desc}</p>
            <div className="par-stats">
              <div className="par-stat"><div className="k"><Icon n="trend" s={15} /> Dénivelé +</div><div className="v">{p.dplus} <small>m</small></div></div>
              <div className="par-stat"><div className="k"><Icon n="mountain" s={15} /> Altitude</div><div className="v">{p.altMin}-{p.altMax} <small>m</small></div></div>
              <div className="par-stat"><div className="k"><Icon n="users" s={15} /> Dossards max</div><div className="v">{p.coureurs}</div></div>
              <div className="par-stat"><div className="k"><Icon n="clock" s={15} /> Barrière horaire</div><div className="v">{p.barriere}</div></div>
            </div>
            <div className="par-meta">
              <span className="chip"><Icon n="clock" s={15} /> Départ {p.depart}</span>
              <span className="chip"><Icon n="pin" s={15} /> {window.TRACES && window.TRACES[p.km] && window.TRACES[p.km].nbCommunes || (p.km === 24 ? 4 : 3)} communes traversées</span>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
              <span className="btn btn-gold is-disabled" aria-disabled="true" style={{ justifyContent: "center", flex: "1 1 0", minWidth: 150 }}>
                <Icon n="fileCheck" s={16} /> Règlement sportif à venir
              </span>
              <span className="btn btn-gold is-disabled" aria-disabled="true" style={{ justifyContent: "center", flex: "1 1 0", minWidth: 150 }}>
                <Icon n="arrowDown" s={16} /> Tracé GPX à venir
              </span>
              {SHOW_GPX &&
              <a className="btn btn-gold" href={"assets/trail_chaumuzy_" + p.km + "km.gpx"} download>
                <Icon n="arrowDown" s={16} /> Télécharger le tracé (.gpx)
              </a>}
            </div>
          </div>
          <div className="par-right">
            <div className="elev-h"><span>Tracé du parcours</span><span>{p.km} km</span></div>
            <RouteMap trace={window.TRACES && window.TRACES[p.km]} color={p.tone === "accent" ? "var(--accent)" : "var(--gold)"} />
            <div className="elev-h" style={{ marginTop: 18 }}><span>Profil d'élévation</span><span>D+ {p.dplus} m</span></div>
            <ElevationProfile points={p.elev} dplus={p.dplus} altMin={p.altMin} altMax={p.altMax} dist={p.dist}
            color={p.tone === "accent" ? "var(--accent)" : "var(--gold)"} />
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- programme ---------- */
function Programme() {
  return (
    <section className="section" id="programme">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow center" style={{ justifyContent: "center" }}>Le week-end</div>
          <h2 className="display">Programme 2027</h2>
        </div>
        <Reveal className="js-reveal-root">
          <div className="agenda">
            {PROG.map((p, i) =>
            <div className={"agenda-row" + (p.key ? " key" : "")} key={i}>
                <div className="when"><div className="d">{p.d}</div><div className="t">{p.t}</div></div>
                <div className="what">
                  {p.key && <span className="bolt"><Icon n="bolt" s={20} /></span>}
                  {p.w}
                </div>
                <div className="tag-sm">
                  {p.gps ?
                <a className="tag-gps" href={p.gps} target="_blank" rel="noopener" title="Ouvrir dans Google Maps" aria-label={"Itinéraire vers " + p.tag}><span className="gps-pin"><Icon n="pin" s={17} /></span> {p.tag}</a> :
                p.tag}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---------- inscriptions ---------- */
const MEET_B2B = "https://meet.brevo.com/mathieu-boutroux-2/rendez-vous-de-30-minutes";

/* B2B enterprise offer - premium pack + interactive quote simulator + brochure lead */
const B2B_UNIT = 50; // € / dossard
function B2BOffer() {
  const incl = [
  "Dossards groupés (à partir de 5 coureurs)",
  "Inscription centralisée + facture unique",
  "Logo entreprise sur la page partenaires",
  "Visibilité sur la zone d'arrivée",
  "Ravitaillement et espace d'accueil dédié",
  "Photos de l'équipe offertes"];

  const [n, setN] = useState(10);
  const total = n * B2B_UNIT;
  return (
    <Reveal className="card b2b b2b-premium" id="entreprise">
      <div className="b2b-prem-left">
        <div className="eyebrow">Pack entreprise premium</div>
        <h3>Vivez le trail<br />en équipe</h3>
        <p className="muted">Fédérez vos collaborateurs autour d'un défi sportif et convivial, au cœur du vignoble champenois. Cohésion, marque employeur et démarche RSE en une journée.</p>

        <div className="b2b-sim">
          <div className="b2b-sim-row">
            <span className="b2b-sim-lab">Votre équipe</span>
            <div className="b2b-stepper">
              <button type="button" onClick={() => setN(Math.max(5, n - 1))} aria-label="Moins">−</button>
              <span className="b2b-stepper-n">{n}<small>coureurs</small></span>
              <button type="button" onClick={() => setN(Math.min(100, n + 1))} aria-label="Plus">+</button>
            </div>
          </div>
          <input className="b2b-range" type="range" min="5" max="100" value={n} onChange={(e) => setN(+e.target.value)} aria-label="Nombre de coureurs" />
          <div className="b2b-sim-total">
            <span>Budget estimé</span>
            <b>{total.toLocaleString("fr-FR")} €</b>
            <small>soit {B2B_UNIT} € / dossard</small>
          </div>
        </div>

        <div className="b2b-cta-row">
          <a className="btn btn-primary" href={MEET_B2B} target="_blank" rel="noopener"><Icon n="calendar" s={16} /> Échanger avec l'organisateur</a>
        </div>
      </div>
      <div className="b2b-prem-right">
        <div className="b2b-incl-title">Inclus dans le pack</div>
        <ul className="b2b-incl">
          {incl.map((x, i) => <li key={i}><Icon n="award" s={17} /> {x}</li>)}
        </ul>
        <div className="b2b-rse"><Icon n="leaf" s={16} /> Course éco-responsable, un cadre idéal pour votre communication RSE.</div>
      </div>
    </Reveal>);

}

function TarifCard({ km, tone, tiers }) {
  const color = tone === "accent" ? "var(--accent-safe)" : "var(--gold-ink)";
  return (
    <Reveal className="card tarif" d={tone === "accent" ? 0 : 1} style={{ borderTopColor: color, borderTopWidth: 4, borderTopStyle: "solid" }}>
      <div className="top">
        <div className="km">{km}<span className="u">KM</span></div>
        <span className="chip" style={{ borderColor: color, color }}>{km === 18 ? 300 : 200} dossards max</span>
      </div>
      <div className="tarif-rows">
        {tiers.map((t, i) =>
        <div className="tarif-row" key={i}>
            <div className="lab">{t.l}{t.s && <small>{t.s}</small>}</div>
            <div className="qte">{t.q > 0 ? <><b>{t.q}</b> dossards</> : "sur demande"}</div>
            <div className={"pr" + (t.acc ? " acc" : "")}>{t.p}</div>
          </div>
        )}
      </div>
      <a className="btn btn-primary" href="#preinscription" style={{ width: "100%", justifyContent: "center" }}>Être prévenu de l'ouverture</a>
    </Reveal>);

}
function Inscriptions() {
  const t18 = [
  { l: "Club", s: "tarif préférentiel", p: "15 €", q: 50, acc: true },
  { l: "Grand public", s: "early bird", p: "20 €", q: 50 },
  { l: "Grand public", s: "standard", p: "25 €", q: 150 }];

  const t24 = [
  { l: "Club", s: "tarif préférentiel", p: "20 €", q: 50, acc: true },
  { l: "Grand public", s: "early bird", p: "25 €", q: 50 },
  { l: "Grand public", s: "standard", p: "30 €", q: 100 }];

  return (
    <section className="section cream-2" id="inscriptions">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <div className="section-head center" style={{ marginBottom: 32 }}>
          <div className="eyebrow center" style={{ justifyContent: "center" }}>Inscriptions</div>
          <h2 className="display">Tarifs et inscription</h2>
        </div>
        <Reveal className="alert">
          <Icon n="calendar" s={24} />
          <div><b>Ouverture officielle des inscriptions : octobre 2026.</b> Laissez-nous votre e-mail pour être prévenu en priorité dès l'ouverture de la billetterie.</div>
        </Reveal>
        {SHOW_GAUGE && <DossardGauge />}
        {SHOW_GAUGE && <EarlyBird />}
        <div className="tarif-grid">
          <TarifCard km={18} tone="gold" tiers={t18} />
          <TarifCard km={24} tone="accent" tiers={t24} />
        </div>
        <div className="req"><Icon n="fileCheck" s={16} /> Licence FFA ou PPS + pièce d'identité requis lors du retrait des dossards.</div>

        {SHOW_B2B && <B2BOffer />}

        <PreinscriptionForm />
      </div>
    </section>);

}

/* ---------- B2C urgency: dossard gauge + early-bird (par quota) ----------
   Chiffres pilotés par dossards.json. La barre se remplit à l'apparition;
   l'early bird s'appuie sur le nombre de dossards (earlyBirdThreshold), pas sur une date. */
const DOSSARDS = {
  total: 500,
  categories: [
  { label: "Club", sold: 0, quota: 100 },
  { label: "Grand Public", sold: 0, quota: 375 }]

}; // valeurs de repli si dossards.json est indisponible (ex. fichier unique hors-ligne)

function DossardGauge() {
  const [ref, seen] = useInView();
  const [data, setData] = useState(DOSSARDS);
  // Pilotée par dossards.json (reflète le nombre d'inscrits Miles Republic).
  // Mettez à jour ce fichier depuis votre espace organisateur Miles Republic - ou via un script de synchro.
  useEffect(() => {
    let on = true;
    const load = () => fetch("dossards.json", { cache: "no-store" }).
    then((r) => r.ok ? r.json() : null).
    then((d) => {if (on && d && Array.isArray(d.categories)) setData(d);}).
    catch(() => {});
    load();
    const id = setInterval(load, 120000); // rafraîchit toutes les 2 min
    return () => {on = false;clearInterval(id);};
  }, []);

  const cats = data.categories || [];
  const total = data.total || cats.reduce((s, c) => s + (c.quota || 0), 0) || 500;
  const sold = Math.min(cats.reduce((s, c) => s + (c.sold || 0), 0), total);
  const pct = Math.min(100, Math.round(sold / total * 100));
  const left = total - sold;
  const updated = data.updated ?
  new Date(data.updated).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) :
  null;
  const almostFull = pct >= 80;
  const regUrl = data.registrationUrl || "";
  return (
    <div className="gauge" ref={ref}>
      <div className="gauge-top">
        <div className="gauge-head">
          <span className="gauge-num">{sold}</span>
          <span className="gauge-tot">/ {total} dossards réservés</span>
        </div>
        {left > 0 ?
        <span className={"gauge-left" + (almostFull ? " hot" : "")}><Icon n="bolt" s={15} /> Plus que {left} places</span> :
        <span className="gauge-left hot"><Icon n="bolt" s={15} /> Complet</span>}
      </div>
      <div className="gauge-track">
        <div className="gauge-fill" style={{ width: seen ? pct + "%" : "0%" }} />
      </div>

      <div className="gauge-quotas">
        {cats.map((c, i) => {
          const q = c.quota || 0;
          const cs = Math.min(c.sold || 0, q);
          const cpct = q ? Math.min(100, Math.round(cs / q * 100)) : 0;
          const cleft = Math.max(0, q - cs);
          const cfull = cleft === 0;
          return (
            <div className="quota" key={i}>
              <div className="quota-row">
                <span className="quota-label">{c.label}</span>
                <span className={"quota-left" + (cfull ? " full" : "")}>
                  {cfull ? "Complet" : <><b>{cs}</b> / {q} places</>}
                </span>
              </div>
              <div className="quota-track">
                <div className={"quota-fill cat" + i} style={{ width: seen ? cpct + "%" : "0%" }} />
              </div>
            </div>);

        })}
      </div>

      <div className="gauge-foot muted">
        {updated ? "Quotas mis à jour au " + updated : "Quotas sur la billetterie Miles Republic"}
      </div>
      {regUrl &&
      <a className="btn btn-primary gauge-cta" href={regUrl} target="_blank" rel="noopener">S'inscrire sur Miles Republic <Icon n="arrow" s={16} /></a>}
    </div>);

}

const EARLYBIRD_THRESHOLD = 100; // repli : nombre de dossards au tarif early bird (logique quota, piloté par dossards.json)

function EarlyBird() {
  const [data, setData] = useState({ threshold: EARLYBIRD_THRESHOLD, sold: 0 });
  useEffect(() => {
    let on = true;
    fetch("dossards.json", { cache: "no-store" }).
    then((r) => r.ok ? r.json() : null).
    then((d) => {
      if (!on || !d) return;
      const sold = Array.isArray(d.categories) ? d.categories.reduce((s, c) => s + (c.sold || 0), 0) : 0;
      setData({ threshold: d.earlyBirdThreshold || EARLYBIRD_THRESHOLD, sold });
    }).
    catch(() => {});
    return () => {on = false;};
  }, []);

  const threshold = data.threshold;
  const left = Math.max(0, threshold - data.sold);
  const done = left === 0;
  return (
    <Reveal className="earlybird">
      <div className="eb-left">
        <span className="eb-badge"><Icon n="bolt" s={16} /> Early bird</span>
        <div className="eb-text">
          <b>{done ?
            "Tarif early bird épuisé - tarif standard en vigueur" :
            "Tarif préférentiel sur les " + threshold + " premiers dossards"}</b>
          <span>{done ?
            "Les premiers dossards au tarif réduit ont tous trouvé preneur." :
            "Jusqu'à 5 € d'économie par dossard. Réservé aux premiers inscrits."}</span>
        </div>
      </div>
      <div className="eb-count">
        <span className="eb-days">{left}</span>
        <span className="eb-unit">{done ? "place early bird" : "places early bird"}</span>
      </div>
    </Reveal>);

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
const LIST_IDS = { "24": 8, "18": 9, "?": 10 };
function PreinscriptionForm() {
  const [state, setState] = useState("idle"); // idle | sending | ok | error
  const [dist, setDist] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    // 1. un parcours doit être sélectionné
    if (!dist) {
      setState("error");
      setErrMsg("Merci de choisir le parcours qui vous intéresse.");
      return;
    }
    // 2. la case RGPD doit être cochée
    const rgpd = form.querySelector("#rgpd-checkbox");
    if (rgpd && !rgpd.checked) {
      setState("error");
      setErrMsg("Merci d'accepter la politique de confidentialité pour continuer.");
      return;
    }
    // 3. champs texte valides (email, prénom, nom)
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const payload = {
      firstname: (form.querySelector("#firstname") || {}).value || "",
      lastname: (form.querySelector("#lastname") || {}).value || "",
      email: (form.querySelector("#email") || {}).value || "",
      listId: LIST_IDS[dist]
    };

    try {
      setState("sending");
      setErrMsg("");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setState("ok");
    } catch (err) {
      setState("error");
      setErrMsg("Un souci est survenu. Réessayez ou écrivez-nous à marne.outdoor.experiences@gmail.com.");
    }
  };

  if (state === "ok") {
    return (
      <Reveal className="card preinsc preinsc-done">
        <div className="preinsc-check"><Icon n="award" s={30} /></div>
        <h3>Vérifiez votre boîte mail&nbsp;!</h3>
        <p>Un e-mail de confirmation vient de vous être envoyé. Cliquez sur le lien qu'il contient pour valider votre inscription à la liste d'attente. Pensez à vérifier vos spams.</p>
        <AddToCalendar />
      </Reveal>);

  }

  return (
    <Reveal className="card preinsc" id="preinscription">
      <div className="preinsc-head">
        <div className="eyebrow">Liste d'attente</div>
        <h3>Soyez prévenu(e) en priorité</h3>
        <p className="muted">Inscriptions ouvertes en octobre 2026 ! Laissez vos coordonnées : vous recevrez le coup d'envoi avant tout le monde.</p>
      </div>
      <form ref={formRef} id="waiting-list-form" className="preinsc-form" onSubmit={onSubmit} noValidate>
        <div className="field-row">
          <label className="field">
            <span>Prénom</span>
            <input id="firstname" name={BREVO.firstField} type="text" autoComplete="given-name" placeholder="Kilian" required />
          </label>
          <label className="field">
            <span>Nom</span>
            <input id="lastname" name={BREVO.lastField} type="text" autoComplete="family-name" placeholder="Jornet" required />
          </label>
        </div>
        <label className="field">
          <span>E-mail</span>
          <input id="email" name={BREVO.emailField} type="email" autoComplete="email" placeholder="kilian.jornet@jekiffchaumuzy.com" required />
        </label>
        <div className="field">
          <span>Parcours qui vous intéresse</span>
          <div className="seg" role="radiogroup" aria-label="Parcours">
            {[["24", "Trail Expérience - 24 km", "8"], ["18", "Trail Découverte - 18 km", "9"], ["?", "Je ne sais pas encore", "10"]].map(([v, l, listId]) =>
            <label key={v} className={"seg-opt" + (dist === v ? " on" : "")} data-list-id={listId}>
                <input type="radio" name={BREVO.distField} value={v} data-list-id={listId} checked={dist === v} onChange={() => setDist(v)} required />
                {l}
              </label>
            )}
          </div>
        </div>
        {/* mirror the chosen distance into Brevo's 2nd (required) distance attribute */}
        <input type="hidden" name={BREVO.distField2} value={dist} />
        {/* Brevo anti-bot honeypot + hidden form params */}
        <input type="text" name="email_address_check" defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
        <input type="hidden" name="locale" value="fr" />
        <input type="hidden" name="html_type" value="simple" />
        <label className="consent">
          <input id="rgpd-checkbox" type="checkbox" required />
          <span>J'accepte de recevoir des informations sur le Trail de Chaumuzy et que mes données soient traitées conformément à la <a href="confidentialite.html" target="_blank" rel="noopener">politique de confidentialité</a>.</span>
        </label>
        <button type="submit" className="btn btn-primary" disabled={state === "sending"} style={{ width: "100%", justifyContent: "center" }}>
          {state === "sending" ? "Envoi…" : "Je m'inscris à la liste d'attente"}
        </button>
        {state === "error" && <p className="form-err">{errMsg || "Un souci est survenu. Réessayez ou écrivez-nous à marne.outdoor.experiences@gmail.com."}</p>}
        <p className="form-fine">Aucun spam. Désinscription en un clic. Vos données ne sont jamais revendues.</p>
      </form>
    </Reveal>);

}

/* ---------- add to calendar ---------- */
function AddToCalendar() {
  // Google Calendar pre-filled link (UTC times: 24km start 09:30 local = 07:30Z)
  const g = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" + encodeURIComponent("Trail de Chaumuzy 2027") +
  "&dates=20270404T073000Z/20270404T120000Z" +
  "&details=" + encodeURIComponent("1re édition. Deux parcours nature au cœur du vignoble champenois. Infos : https://trail-chaumuzy.fr") +
  "&location=" + encodeURIComponent("Foyer Rural de Chaumuzy, 33 rue du Capitaine Chesnais, 51170 Chaumuzy");
  return (
    <div className="cal-block">
      <div className="cal-label">Ajouter au calendrier</div>
      <div className="cal-row">
        <a className="btn btn-gold" href="assets/trail-chaumuzy-2027.ics" download>
          <Icon n="calendar" s={16} /> Apple - Outlook (.ics)
        </a>
        <a className="btn btn-ghost-dark cal-google" href={g} target="_blank" rel="noopener">
          <Icon n="calendar" s={16} /> Google Agenda
        </a>
      </div>
    </div>);

}

/* ---------- partenaires ---------- */
/* Mur de logos partenaires masqué tant qu'il n'y a pas de partenaires réels à afficher.
   Repasser à true pour réafficher Partenaire titre / Officiels / Communes / Mécènes. */
const SHOW_PARTNER_WALL = false;
/* PLACEHOLDER perks - à valider par l'organisateur. */
const PARTNER_TIERS = [
{ name: "Partenaire titre", price: "5 000 €", tone: "accent", featured: true, slots: "1 exclusivité",
  perks: ["Naming « présenté par »", "Logo dominant sur tous supports", "Arche d'arrivée + dossards", "10 dossards offerts", "Prise de parole podium"] },
{ name: "Partenaire officiel", price: "1 500 €", tone: "gold", slots: "4 places", total: 4, taken: 0,
  perks: ["Logo sur banderoles et site", "Stand sur le village course", "5 dossards offerts", "Mention réseaux sociaux"] }];


function Partenaires() {
  return (
    <section className="section" id="partenaires">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow center" style={{ justifyContent: "center" }}>Devenez partenaire</div>
          <h2 className="display">Associez votre marque<br />à l'événement</h2>
          <p className="lead" style={{ maxWidth: 720, margin: "0 auto" }}>Une 1<sup>re</sup> édition, 500 coureurs et 4 communes du vignoble champenois&nbsp;: une visibilité locale forte pour votre entreprise. Idéal pour associer votre marque à un événement sportif éco-responsable en Champagne, fédérer vos équipes ou soutenir le sport de territoire. Trois niveaux d'engagement, à votre image.</p>
        </div>

        <div className="tier-grid tier-grid-2">
          {PARTNER_TIERS.map((tr) => {
            const color = tr.tone === "accent" ? "var(--accent-safe)" : tr.tone === "gold" ? "var(--gold-ink)" : "var(--ink)";
            const left = tr.total != null ? tr.total - tr.taken : null;
            return (
              <Reveal className={"tier" + (tr.featured ? " tier-feat" : "") + (tr.sold ? " tier-sold" : "")} key={tr.name}>
                {tr.sold ?
                <div className="tier-ribbon tier-ribbon-sold">Réservé 2027</div> :
                tr.featured && <div className="tier-ribbon">Le plus visible</div>}
                <div className="tier-name" style={{ color }}>{tr.name}</div>
                <div className="tier-slots">
                  {tr.sold ?
                  <span className="tier-soldtag">Exclusivité attribuée</span> :
                  left != null ?
                  <span className="tier-left"><b>{left}</b> / {tr.total} places restantes</span> :
                  tr.slots}
                </div>
                <div className="tier-price">{tr.sold ? "Exclusivité" : <span style={{ visibility: "hidden" }}>{tr.price}</span>}</div>
                {tr.sold ?
                <div className="tier-soldmsg">
                  <div className="tier-partner">
                    <div className="tier-partner-logo"><img src="assets/logo-chaumuzy.png" alt="Blason de la Commune de Chaumuzy" /></div>
                    <div className="tier-partner-name">Commune de<br /><strong>Chaumuzy</strong></div>
                  </div>
                  <p className="tier-soldmsg-sub">Partenaire titre de cette 1<sup>re</sup> édition - visibilité maximale et exclusivité. Rendez-vous en 2028 pour ce palier.</p>
                </div> :
                <ul className="tier-perks">
                  {tr.perks.map((p, i) =>
                  <li key={i}><span className="tier-check" style={{ color }}><Icon n="award" s={15} /></span> {p}</li>
                  )}
                </ul>}
                {tr.sold ?
                <span className="btn btn-sold" aria-disabled="true"><Icon n="award" s={16} /> Exclusivité attribuée</span> :
                <a className={"btn " + (tr.featured ? "btn-primary" : "btn-gold")} href={MEET_B2B} target="_blank" rel="noopener" style={{ width: "100%", justifyContent: "center" }}>En savoir plus</a>}
              </Reveal>);

          })}
        </div>

        {SHOW_PARTNER_WALL &&
        <div className="part-wall">
          <Reveal className="js-reveal-root" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="part-tier" style={{ width: "100%" }}>
              <h4>Partenaire titre</h4>
              <div className="logo-row"><div className="logo-slot lg logo-filled"><img src="assets/logo-chaumuzy.png" alt="Blason de la Commune de Chaumuzy" /><span>Commune de Chaumuzy</span></div></div>
            </div>
            <div className="part-tier" style={{ width: "100%" }}>
              <h4>Partenaires officiels</h4>
              <div className="logo-row">
                <div className="logo-slot">Partenaire 01</div>
                <div className="logo-slot">Partenaire 02</div>
              </div>
            </div>
            <div className="part-tier" style={{ width: "100%" }}>
              <h4>Communes partenaires</h4>
              <div className="logo-row">
                {COMMUNES.filter((c) => c.nm !== "Chaumuzy").map((c) =>
                <div className={"logo-slot commune-slot sm" + (c.logo ? " logo-filled" : "")} key={c.nm}>
                    {c.logo ?
                  <><img src={c.logo} alt={"Blason de " + c.nm} /><span>{c.nm}</span></> :
                  <><span className="blason" aria-hidden="true"><Icon n="shield" s={20} /></span>{c.nm}</>}
                  </div>
                )}
              </div>
            </div>
            <div className="part-tier" style={{ width: "100%" }}>
              <h4>Mécènes</h4>
              <div className="logo-row">
                {[1, 2, 3, 4].map((n) => <div className="logo-slot sm" key={n}>Mécène 0{n}</div>)}
              </div>
            </div>
          </Reveal>
        </div>}
      </div>
    </section>);

}

/* ---------- FAQ ----------
   Réponses pré-remplies RÉALISTES mais À VALIDER par l'organisateur.
   Les passages marqués (à confirmer) doivent être vérifiés avant publication. */
const FAQ = [
{ q: "Comment puis-je m'inscrire ?", a: "Les inscriptions officielles ouvrent en octobre 2026, en ligne. En attendant, laissez votre e-mail via le formulaire de pré-inscription : vous serez prévenu(e) en priorité dès l'ouverture de la billetterie." },
{ q: "Quels documents dois-je fournir ?", a: "Une licence FFA en cours de validité (Athlé Compétition, Athlé Running ou Pass'Running) OU un Parcours de Prévention Santé (PPS), accompagnée d'une pièce d'identité, à présenter lors du retrait du dossard." },
{ q: "Où et quand retirer mon dossard ?", a: "Au Foyer Rural de Chaumuzy (33 rue du Capitaine Chesnais) : le samedi 3 avril 2027 de 17h à 19h, et le dimanche 4 avril 2027 de 7h à 9h. Aucun dossard ne sera envoyé par courrier." },
{ q: "Où se garer le jour de la course ?", a: "Un parking gratuit est fléché à proximité de la zone départ et arrivée, à Chaumuzy. Nous vous recommandons le covoiturage : l'accès au village est limité le matin de l'épreuve." },
{ q: "Combien y a-t-il de ravitaillements ?", a: "Un ravitaillement principal est situé à La Neuville-aux-Larris. Un ravitaillement d'arrivée avec des produits du terroir vous attend à Chaumuzy." },
{ q: "Le matériel est-il imposé ?", a: "Le gobelet personnel est obligatoire (course éco-responsable, sans gobelet jetable). Selon la météo, une réserve d'eau et une veste coupe-vent pourront être recommandées ou rendues obligatoires (précisé au règlement)." },
{ q: "Y a-t-il un âge minimum ?", a: "L'épreuve est soumise aux conditions d'âge fixées par la réglementation FFA pour les distances concernées (à confirmer selon les catégories retenues). Les mineurs doivent fournir une autorisation parentale." },
{ q: "Quelle est la politique d'annulation ?", a: "Les conditions d'annulation et de remboursement (par le coureur ou par l'organisation, notamment en cas de force majeure ou de météo dangereuse) seront précisées dans le règlement officiel." },
{ q: "Comment venir à Chaumuzy ?", a: "Chaumuzy se situe dans la Marne, au cœur de la Montagne de Reims, à environ 30 minutes de Reims et d'Épernay et 1h30 de Paris. Accès par l'A4 puis routes départementales ; gare la plus proche à Reims. Un parking gratuit est fléché près de la zone départ et arrivée." },
{ q: "Le trail est-il adapté aux débutants ?", a: "Oui. Le Trail Découverte de 18 km est pensé pour les coureurs sur route souhaitant s'initier au trail, tandis que le Trail Expérience de 24 km s'adresse aux traileurs confirmés. Les deux parcours restent accessibles à toute personne en bonne condition physique." },
{ q: "Peut-on courir en groupe ou entre collègues ?", a: "Absolument. Le Trail de Chaumuzy est une belle occasion de cohésion : venez entre amis, en club ou entre collègues. Une offre entreprise avec inscription centralisée est également disponible." },
{ q: "Que faire autour de la course, en couple ou en famille ?", a: "Profitez de votre venue pour découvrir la Champagne autrement : visite de caves et dégustation chez les vignerons du secteur (label Vignobles & Découvertes), randonnée dans le Parc naturel régional de la Montagne de Reims, escapade aux Faux de Verzy ou visite de Reims et d'Épernay, à moins de 30 minutes. Le Trail de Chaumuzy est l'occasion idéale d'un week-end sportif et œnotouristique." },
{ q: "Où séjourner près de Chaumuzy ?", a: "Le vignoble de la Montagne de Reims regorge de gîtes, chambres d'hôtes et hébergements insolites au cœur des villages viticoles. Reims, Épernay et Châlons-en-Champagne, les trois villes-portes du Parc, offrent une large gamme d'hôtels à moins de 30 minutes du départ." },
{ q: "Proposez-vous une offre pour les entreprises ?", a: "Oui. Le Pack entreprise (50 € / dossard) permet d'engager une équipe avec inscription centralisée, facture unique et visibilité de votre marque.", link: { href: MEET_B2B, label: "Réserver un rendez-vous de 30 min" } }];


function FaqItem({ item, open, onToggle }) {
  const bodyRef = useRef(null);
  return (
    <div className={"faq-item" + (open ? " open" : "")}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="faq-icon"><Icon n="chevronDown" s={22} /></span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? bodyRef.current ? bodyRef.current.scrollHeight + 24 : 400 : 0 }}>
        <p ref={bodyRef}>{item.a}{item.link && <> <a href={item.link.href} target="_blank" rel="noopener" style={{ color: "var(--accent-safe)", fontWeight: 600 }}>{item.link.label} →</a></>}</p>
      </div>
    </div>);

}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <div className="section-head center">
          <div className="eyebrow center" style={{ justifyContent: "center" }}>Questions fréquentes</div>
          <h2 className="display">Tout savoir avant le départ</h2>
        </div>
        <Reveal className="faq-list">
          {FAQ.map((item, i) =>
          <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          )}
        </Reveal>
        <p className="faq-foot">Une autre question ? Écrivez-nous à <a href="mailto:marne.outdoor.experiences@gmail.com">marne.outdoor.experiences@gmail.com</a></p>
      </div>
    </section>);

}

/* ---------- footer ---------- */
function ShareRow() {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href.split("#")[0] : "https://www.traildechaumuzy.fr/";
  const text = "Trail de Chaumuzy 2027 - un trail nature au cœur du vignoble champenois, le dimanche 4 avril 2027.";
  const share = (kind) => {
    let link = "";
    if (kind === "whatsapp") link = "https://wa.me/?text=" + encodeURIComponent(text + " " + url);
    else if (kind === "facebook") link = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    if (link) window.open(link, "_blank", "noopener,width=640,height=560");
  };
  const nativeShare = () => {
    if (navigator.share) { navigator.share({ title: "Trail de Chaumuzy 2027", text, url }).catch(() => {}); }
  };
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };
    if (navigator.clipboard) { navigator.clipboard.writeText(url).then(done).catch(done); }
    else { const t = document.createElement("textarea"); t.value = url; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); } catch (e) {} document.body.removeChild(t); done(); }
  };
  return (
    <div className="share-row">
      <button className="share-label" onClick={nativeShare} aria-label="Partager le site"><Icon n="share" s={17} /> Partager</button>
      <div className="share-btns">
        <button className="share-btn" onClick={() => share("whatsapp")}><Icon n="whatsapp" s={17} /> WhatsApp</button>
        <button className="share-btn" onClick={() => share("facebook")}><Icon n="facebook" s={17} /> Facebook</button>
        <button className={"share-btn" + (copied ? " is-copied" : "")} onClick={copy}><Icon n={copied ? "check" : "link"} s={16} /> {copied ? "Lien copié" : "Copier le lien"}</button>
      </div>
    </div>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <p className="muted" style={{ maxWidth: 320, fontSize: 15, margin: 0 }}>Trail de Chaumuzy - 1<sup>re</sup> édition.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
              <span className="muted" style={{ fontSize: 15 }}>Organisé par</span>
              <img src="assets/logo-marne-white.png" alt="Marne Outdoor Expériences" style={{ height: 46, width: "auto" }} />
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              {COMMUNES.map((c) => <span className="chip" key={c.nm} style={{ fontSize: 12, padding: "5px 11px" }}>{c.nm}</span>).slice(0, 0)}
            </div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Course</h5>
              {NAV.map((n) => <a key={n.id} href={"#" + n.id}>{n.l}</a>)}
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <a href="mailto:marne.outdoor.experiences@gmail.com">marne.outdoor.experiences@gmail.com</a>
              <a href="#preinscription">Être prévenu de l'ouverture</a>
              <a href={MEET_B2B} target="_blank" rel="noopener">Devenir partenaire</a>
            </div>
            <div className="footer-col">
              <h5>Infos</h5>
              <p>Dimanche 4 avril 2027</p>
              <p>Départ 09h30 - Chaumuzy (51)</p>
              <a href="mentions-legales.html">Mentions légales</a>
              <a href="confidentialite.html">Confidentialité (RGPD)</a>
            </div>
          </div>
        </div>
        <ShareRow />
        <div className="footer-bottom">
          <span>© 2026 Marne Outdoor Expériences - Tous droits réservés</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>Organisé avec <Icon n="heart" s={15} style={{ color: "var(--accent)" }} /> en Champagne</span>
        </div>
      </div>
    </footer>);

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
    window.addEventListener("scroll", on, { passive: true, capture: true });
    document.addEventListener("scroll", on, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", on, { capture: true });
      document.removeEventListener("scroll", on, { capture: true });
    };
  }, []);
  return (
    <div className={"sticky-cta" + (show ? " show" : "")}>
      <div className="inner">
        <Logo h={38} style={{ flexShrink: 0 }} />
        <div className="txt"><b>Trail de Chaumuzy</b><span>Dimanche 4 avril 2027 - Ouverture des inscriptions au cours du mois d'octobre 2026</span></div>
        <a className="btn btn-gold sp" href="#programme">Programme</a>
        <a className="btn btn-primary" href="#preinscription">Pré-inscription</a>
      </div>
    </div>);

}

Object.assign(window, { Nav, Hero, Territoire, Oeno, Parcours, Programme, Inscriptions, Partenaires, Faq, Footer, StickyCTA });