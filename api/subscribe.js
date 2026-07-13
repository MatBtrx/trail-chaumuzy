export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { email, firstname, lastname, listId } = req.body;

  if (!email || !listId) {
    return res.status(400).json({ error: 'Champs obligatoires manquants' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          PRENOM: firstname || '',
          NOM: lastname || ''
        },
        listIds: [parseInt(listId)],
        updateEnabled: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur Brevo');
    }

    return res.status(200).json({ success: true, message: 'Inscription réussie !' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
