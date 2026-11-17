#!/usr/bin/env python3
"""Pré-rendu de la page d'accueil (index.html) du Trail de Chaumuzy.

Le contenu de la page est construit par React (build/*.js). Les robots qui n'exécutent pas
JavaScript (assistants IA, aperçus de liens…) ne voyaient donc qu'une page vide. Ce script :
  1. sert le dépôt en local et ouvre la page dans Chrome (Playwright) ;
  2. copie le HTML rendu dans <div id="root">, entre les marqueurs prerender:start / prerender:end ;
  3. remet les animations d'apparition dans leur état initial (React les rejoue au chargement).
Au chargement, React remplace ce contenu par le sien : le visiteur voit la même page, plus tôt.

À relancer après CHAQUE modification de build/*.js, hifi.css, trace-data.js ou des textes :
    python3 outils/prerender.py
Prérequis : pip install playwright && python3 -m playwright install chromium
(ou un Chrome installé, à indiquer avec la variable CHROME=/chemin/vers/chrome).
"""
import functools, http.server, os, pathlib, re, sys, threading

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"
START, END = "<!-- prerender:start -->", "<!-- prerender:end -->"


def serve():
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass

    handler = functools.partial(Quiet, directory=str(ROOT))
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


def render(url):
    with sync_playwright() as pw:
        kw = {"executable_path": os.environ["CHROME"]} if os.environ.get("CHROME") else {}
        browser = pw.chromium.launch(args=["--no-sandbox"], **kw)
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        # Rien d'extérieur : polices Google, statistiques Vercel, etc.
        page.route("**/*", lambda r: r.continue_() if r.request.url.startswith(url) else r.abort())
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.goto(url, wait_until="load")
        page.wait_for_function("document.querySelector('#root > nav') !== null", timeout=15000)
        page.wait_for_timeout(500)
        html = page.evaluate("document.getElementById('root').innerHTML")
        browser.close()
    if errors:
        sys.exit("Erreur JavaScript pendant le rendu : " + "; ".join(errors))
    return html


def clean(html):
    html = html.replace(START, "").replace(END, "")
    html = re.sub(r'\s*data-comment-anchor="[^"]*"', "", html)
    # Animations d'apparition : état initial (React ajoute « revealed » au défilement).
    html = re.sub(r'(class="[^"]*?)\s+revealed(?=[\s"])', r"\1", html)
    return html


def main():
    src = INDEX.read_text(encoding="utf-8")
    if START not in src or END not in src:
        sys.exit("Marqueurs prerender absents de index.html")
    srv = serve()
    try:
        html = clean(render("http://127.0.0.1:%d/" % srv.server_address[1]))
    finally:
        srv.shutdown()
    if "<main" not in html or "faq" not in html:
        sys.exit("Rendu incomplet : index.html n'est pas modifié")
    out = re.sub(re.escape(START) + ".*?" + re.escape(END), lambda m: START + html + END, src, flags=re.S)
    INDEX.write_text(out, encoding="utf-8")
    print("index.html : %d caractères pré-rendus" % len(html))


if __name__ == "__main__":
    main()
