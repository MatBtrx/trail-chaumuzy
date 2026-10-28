/* tracking.js - Trail de Chaumuzy 2027
   Suivi des clics dans Vercel Web Analytics (événements personnalisés, offre Pro).
   Événement clé de vente : « cta_inscription » { emplacement, distance } = clic vers la billetterie.
   Tout lien vers milesrepublic.com est compté comme cta_inscription.
   Autres événements : scroll_profondeur, section_vue, faq_question, parcours_onglet, calendrier, itineraire, gpx, reglement_pdf, partage, contact_*. */
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
(function () {
  /* Source d'arrivée du visiteur (utm_source / referrer), gardée le temps de la visite et jointe aux clics d'inscription :
     permet de savoir quelle campagne (Facebook, Instagram, newsletter, club...) vend des dossards. */
  var src = '';
  try {
    var q = new URLSearchParams(location.search);
    src = q.get('utm_source') || sessionStorage.getItem('tdc_src') || (document.referrer && document.referrer.indexOf(location.host) < 0 ? new URL(document.referrer).hostname : '') || 'direct';
    sessionStorage.setItem('tdc_src', src);
  } catch (e) { src = 'inconnue'; }
  function t(name, data) { try { window.va('event', { name: name, data: data || {} }); } catch (e) {} }

  /* Emplacement lisible d'un bouton  */
  function place(el) {
    var p = location.pathname, km = /23km/.test(p) ? '23' : /15km/.test(p) ? '15' : '';
    if (el.closest('.sticky-cta')) return 'barre-mobile';
    if (el.closest('.mobile-menu,#mobile-menu')) return 'menu-mobile';
    if (el.closest('.nav')) return 'nav';
    if (el.closest('.hero')) return 'hero';
    if (el.closest('.tarif-cta') || el.classList.contains('tarif-cta')) return 'tarif-' + (distance(el) || 'km');
    if (el.closest('.faq-cta')) return 'faq';
    if (el.closest('.page-cta')) return 'page-' + (km ? km + 'km' : 'sejour');
    if (el.closest('footer')) return 'footer';
    var s = el.closest('section'); return (s && s.id) || 'page';
  }
  function distance(el) {
    var p = location.pathname;
    if (/23km/.test(p)) return '23';
    if (/15km/.test(p)) return '15';
    var c = el.closest('.card'); if (!c) return '';
    var h = (c.querySelector('h3,.display') || c).textContent;
    return /23\s?km/i.test(h) ? '23' : /15\s?km/i.test(h) ? '15' : '';
  }
  window.TDC_place = place;
  window.TDC_distance = distance;

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a,button'); if (!el) return;
    var h = el.getAttribute('href') || '', txt = (el.textContent || '').trim().slice(0, 40);
    if (/reglement-sportif/.test(h)) t('reglement_pdf', { emplacement: el.dataset.cta || place(el) });
    else if (el.dataset.reg || h.indexOf('milesrepublic.com') > -1) t('cta_inscription', { emplacement: el.dataset.cta || place(el), distance: el.dataset.km || distance(el) || 'non précisée', source: src });
    else if (h.indexOf('meet.brevo.com') > -1) t('rdv_b2b', { emplacement: place(el) });
    else if (/\.gpx$/.test(h)) t('gpx', { fichier: h.split('/').pop() });
    else if (/\.ics$/.test(h) || /calendar\.google/.test(h)) t('calendrier', { type: /\.ics$/.test(h) ? 'ics' : 'google' });
    else if (el.dataset.faq && el.getAttribute('aria-expanded') !== 'true') t('faq_question', { question: el.dataset.faq.slice(0, 60) });
    else if (el.dataset.tab) t('parcours_onglet', { distance: el.dataset.tab });
    else if (/maps\.app\.goo\.gl|google\.com\/maps/.test(h)) t('itineraire', { emplacement: place(el) });
    else if (h.indexOf('mailto:') === 0) t(h.indexOf('partenaires') > -1 ? 'contact_partenaire' : 'contact_email', { emplacement: place(el) });
    else if (el.classList.contains('share-btn') || el.classList.contains('share-label')) t('partage', { canal: txt });
  }, true);

  /* Profondeur de lecture (50 % / 90 %) : repère les pages où les visiteurs décrochent avant les tarifs. */
  var depth = {};
  window.addEventListener('scroll', function () {
    var h = document.documentElement, pct = (h.scrollTop + innerHeight) / h.scrollHeight * 100;
    [50, 90].forEach(function (d) { if (pct >= d && !depth[d]) { depth[d] = 1; t('scroll_profondeur', { palier: d + '%', page: location.pathname }); } });
  }, { passive: true });

  /* Sections vues (une fois par visite) : mesure l'entonnoir accueil > parcours > tarifs > FAQ. */
  if ('IntersectionObserver' in window) {
    var seen = {};
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        var id = en.target.id;
        if (en.isIntersecting && !seen[id]) { seen[id] = 1; t('section_vue', { section: id }); io.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    var watch = function () { ['parcours', 'programme', 'inscriptions', 'partenaires', 'faq'].forEach(function (id) { var el = document.getElementById(id); if (el && !seen[id]) io.observe(el); }); };
    if (document.readyState === 'complete') setTimeout(watch, 800); else window.addEventListener('load', function () { setTimeout(watch, 800); });
  }
})();
