// Vercel Serverless Function — inscription à la liste d'attente Brevo
// Reçoit { firstname, lastname, email, listId } en POST JSON,
// crée/actualise le contact dans Brevo et l'ajoute à la liste correspondante.
// Nécessite la variable d'environnement BREVO_API_KEY (Vercel → Settings → Environment Variables).

export default async function handler(req, res) {
  // 1. méthode
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  // 2. clé API configurée ?
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Configuration serveur manquante (BREVO_API_KEY)." });
  }

  // 3. corps de requête (tolère string ou objet déjà parsé)
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const { email, firstname, lastname, listId } = body || {};

  // 4. validation minimale
  const emailOk = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ error: "Adresse e-mail invalide." });
  }
  const listIds = [];
  const parsedList = parseInt(listId, 10);
  if (!Number.isNaN(parsedList)) listIds.push(parsedList);

  // 5. appel à l'API Brevo
  try {
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        email,
        attributes: {
          PRENOM: firstname || "",
          NOM: lastname || ""
        },
        listIds: listIds.length ? listIds : undefined,
        updateEnabled: true // met à jour le contact s'il existe déjà
      })
    });

    // Brevo renvoie 201 (créé) ou 204 (mis à jour). 400 « Contact already exist »
    // est neutralisé par updateEnabled, mais on gère le cas par sécurité.
    if (brevoRes.ok || brevoRes.status === 204) {
      return res.status(200).json({ success: true });
    }

    let detail = {};
    try { detail = await brevoRes.json(); } catch { /* ignore */ }
    if (detail && detail.code === "duplicate_parameter") {
      // contact déjà présent → on considère l'inscription réussie
      return res.status(200).json({ success: true });
    }
    return res.status(brevoRes.status).json({
      error: (detail && detail.message) || "Erreur lors de l'inscription."
    });
  } catch (err) {
    return res.status(502).json({ error: "Service d'inscription indisponible. Réessayez plus tard." });
  }
}
