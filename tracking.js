/* tracking.js - Trail de Chaumuzy 2027
   Suivi des clics dans Vercel Web Analytics (événements personnalisés, offre Pro).
   Événement clé de vente : « cta_inscription » { emplacement, distance } = clic vers la billetterie.
   Tout lien vers milesrepublic.com est compté comme cta_inscription. */
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
(function () {
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
    else if (el.dataset.reg || h.indexOf('milesrepublic.com') > -1) t('cta_inscription', { emplacement: el.dataset.cta || place(el), distance: el.dataset.km || distance(el) || 'non précisée' });
    else if (h.indexOf('meet.brevo.com') > -1) t('rdv_b2b', { emplacement: place(el) });
    else if (/\.gpx$/.test(h)) t('gpx', { fichier: h.split('/').pop() });
    else if (h.indexOf('mailto:') === 0) t(h.indexOf('partenaires') > -1 ? 'contact_partenaire' : 'contact_email', { emplacement: place(el) });
    else if (el.classList.contains('share-btn') || el.classList.contains('share-label')) t('partage', { canal: txt });
  }, true);

})();
