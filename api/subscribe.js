// Vercel Serverless Function — inscription liste d'attente Brevo (DOUBLE OPT-IN)
// Reçoit { firstname, lastname, email, listId } en POST JSON et déclenche
// l'e-mail de confirmation double opt-in Brevo avec le template personnalisé.
// Le contact n'est ajouté à la liste QU'APRÈS clic sur le lien de confirmation.
//
// Variables d'environnement requises (Vercel → Settings → Environment Variables) :
//   BREVO_API_KEY            → clé API v3 Brevo
//   BREVO_DOI_TEMPLATE_ID    → ID NUMÉRIQUE du template
//                              « Trail de Chaumuzy_confirmation double opt-in »
//                              (Brevo → Campagnes → Modèles : l'ID entier, ex. 7)

const REDIRECT_URL = "https://www.traildechaumuzy.fr/merci.html";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  const apiKey = process.env.BREVO_API_KEY;
  // ID du template DOI « Trail de Chaumuzy_confirmation double opt-in » = 1
  // (surchargeable via la variable d'environnement BREVO_DOI_TEMPLATE_ID)
  const templateId = parseInt(process.env.BREVO_DOI_TEMPLATE_ID, 10) || 1;
  if (!apiKey) {
    return res.status(500).json({ error: "Configuration serveur manquante (BREVO_API_KEY)." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const { email, firstname, lastname, listId } = body || {};

  const emailOk = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ error: "Adresse e-mail invalide." });
  }
  const includeListIds = [];
  const parsedList = parseInt(listId, 10);
  if (!Number.isNaN(parsedList)) includeListIds.push(parsedList);
  if (!includeListIds.length) {
    return res.status(400).json({ error: "Parcours (liste) manquant." });
  }

  try {
    // Double opt-in : déclenche l'e-mail de confirmation avec le template perso.
    // Le contact est créé/ajouté à la liste uniquement après confirmation du clic.
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
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
        includeListIds,
        templateId,
        redirectionUrl: REDIRECT_URL
      })
    });

    // 204 = e-mail de confirmation envoyé avec succès
    if (brevoRes.ok || brevoRes.status === 204) {
      return res.status(200).json({ success: true });
    }

    let detail = {};
    try { detail = await brevoRes.json(); } catch { /* ignore */ }
    // contact déjà confirmé / existant → on considère l'inscription comme prise en compte
    if (detail && detail.code === "duplicate_parameter") {
      return res.status(200).json({ success: true, already: true });
    }
    return res.status(brevoRes.status).json({
      error: (detail && detail.message) || "Erreur lors de l'inscription."
    });
  } catch (err) {
    return res.status(502).json({ error: "Service d'inscription indisponible. Réessayez plus tard." });
  }
}
