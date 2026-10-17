/* ouverture.js - Trail de Chaumuzy 2027
   « Mode ouverture » : bascule TOUT le site le mercredi 28/10/2026 à 10h00.
   - Condition réelle : date atteinte ET lien billetterie renseigné dans dossards.json > "registrationUrl".
     Tant que le lien est vide, le site reste en mode « liste d'attente » (rien ne casse).
   - Chaque bouton reçoit un lien billetterie suivi (utm_content = emplacement) et data-reg pour tracking.js.
   - La liste d'attente Brevo (#preinscription) est masquée.
   - Aperçu à tout moment : ajouter ?ouverture à l'adresse (ex. traildechaumuzy.fr/?ouverture).
   Rien à modifier ici le jour J : seul dossards.json est à compléter. */
(function () {
  var OPEN = new Date('2026-10-28T10:00:00+01:00').getTime();
  var preview = /[?&]ouverture\b/.test(location.search);
  var url = '';
  var CTA_LONG = "Je m'inscris sur la billetterie";
  var CTA_SHORT = "Je m'inscris";

  function isOpen() { return preview || (!!url && Date.now() >= OPEN); }
  function swapText(el, txt) { if (el && el.textContent !== txt) el.textContent = txt; }
  function placeOf(el) { return window.TDC_place ? window.TDC_place(el) : 'site'; }
  function kmOf(el) { return window.TDC_distance ? window.TDC_distance(el) : ''; }
  function tracked(base, where) {
    if (!/^https?:/.test(base)) return base;
    return base + (base.indexOf('?') > -1 ? '&' : '?') +
      'utm_source=traildechaumuzy.fr&utm_medium=site&utm_campaign=inscriptions-2027&utm_content=' + encodeURIComponent(where);
  }

  function apply() {
    if (!isOpen()) return;
    var base = url || '#inscriptions';
    var ext = /^https?:/.test(base);
    document.documentElement.classList.add('reg-open');

    // 1. Tous les boutons « Être prévenu / Pré-inscription » -> billetterie (lien suivi par emplacement)
    document.querySelectorAll('a[href$="#preinscription"]').forEach(function (a) {
      var t = a.textContent.trim(), where = a.dataset.track || placeOf(a), km = kmOf(a);
      a.dataset.cta = where;
      if (km) a.dataset.km = km;
      a.dataset.reg = '1';
      a.setAttribute('href', tracked(base, where));
      if (ext) { a.target = '_blank'; a.rel = 'noopener'; }
      swapText(a, t.length > 32 && where !== 'nav' && where !== 'barre-mobile' ? CTA_LONG : CTA_SHORT);
    });

    // 2. Liste d'attente Brevo masquée : inutile une fois la billetterie ouverte
    var pre = document.getElementById('preinscription');
    if (pre && !pre.hidden) { pre.hidden = true; pre.style.display = 'none'; }

    // 3. Barre d'inscription mobile
    swapText(document.querySelector('.sticky-cta .txt span'), 'Dimanche 4 avril 2027 - Inscriptions ouvertes');

    // 4. Encart d'inscription des pages parcours / séjour
    var pc = document.querySelector('.page-cta');
    if (pc && !pc.dataset.open) {
      pc.dataset.open = '1';
      swapText(pc.querySelector('h2'), 'Les inscriptions sont ouvertes');
      swapText(pc.querySelector('p'), '500 dossards au total, 200 sur le 24 km et 300 sur le 18 km. Licenciés FFA : 5 € de réduction sur les 50 premiers dossards.');
    }

    // 5. FAQ « Comment puis-je m'inscrire ? »
    document.querySelectorAll('.faq-a p').forEach(function (p) {
      if (p.dataset.open || p.textContent.indexOf('Les inscriptions officielles ouvrent') !== 0) return;
      p.dataset.open = '1';
      p.textContent = "Les inscriptions sont ouvertes, exclusivement en ligne sur la billetterie de l'événement, dans la limite des quotas : 200 dossards sur le 24 km et 300 sur le 18 km. Aucune inscription n'est prise sur place. Les licenciés FFA bénéficient de 5 € de réduction sur les 50 premiers dossards, toutes courses confondues.";
    });

    // 6. Repère d'urgence sous les boutons du haut de page
    var hc = document.querySelector('.hero-cta');
    if (hc && !document.querySelector('.hero-urgency')) {
      var u = document.createElement('p');
      u.className = 'hero-urgency';
      u.textContent = 'Licenciés FFA : 5 € de réduction sur les 50 premiers dossards';
      hc.insertAdjacentElement('afterend', u);
    }

    // 7. SEO : titre, description et disponibilité de la billetterie (Google exécute le JS)
    if (!document.documentElement.dataset.seoOpen) {
      document.documentElement.dataset.seoOpen = '1';
      if (document.getElementById('top')) {
        document.title = 'Inscriptions ouvertes | Trail de Chaumuzy 2027 - 18 et 24 km';
        var md = document.querySelector('meta[name="description"]');
        if (md) md.setAttribute('content', "Inscriptions ouvertes au Trail de Chaumuzy, dimanche 4 avril 2027 : 18 et 24 km dans les vignes et forêts de la Montagne de Reims. 500 dossards, réservez le vôtre.");
      }
    }
    document.querySelectorAll('script[type="application/ld+json"]').forEach(function (s) {
      if (s.dataset.open || s.textContent.indexOf('PreOrder') < 0) return;
      s.dataset.open = '1';
      s.textContent = s.textContent.split('https://schema.org/PreOrder').join('https://schema.org/InStock');
    });
  }

  function watch() { apply(); new MutationObserver(apply).observe(document.body, { childList: true, subtree: true }); }

  function start() {
    var go = function () {
      if (isOpen()) watch();
      else if (url && OPEN - Date.now() < 2147483647) setTimeout(watch, OPEN - Date.now() + 500);
    };
    fetch('dossards.json', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (d) { url = (d && d.registrationUrl) || ''; go(); })
      .catch(go);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
