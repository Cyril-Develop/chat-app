const webpush = require("web-push");
const prisma = require("../lib/prisma");
const crypto = require("crypto");

// Configurer les clés VAPID (à récupérer de vos variables d'environnement)
const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
};

// Configuration de Web Push
webpush.setVapidDetails(
  "mailto:" + process.env.EMAIL,
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

//**********  SAVE SUBSCRIPTION **********/
exports.saveSubscription = async (req, res) => {
  const userId = req.userId;
  const subscription = req.body.subscription;

  try {
    // Vérifier si l'utilisateur existe
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    // Extraire les détails de l'abonnement
    const { endpoint, keys } = subscription;
    const { p256dh, auth } = keys;

    // Créer un hachage de l'endpoint
    const endpointHash = crypto
      .createHash("sha256")
      .update(endpoint)
      .digest("hex");

    // Créer ou mettre à jour l'abonnement
    await prisma.pushSubscription.upsert({
      where: {
        userId_endpointHash: {
          userId,
          endpointHash,
        },
      },
      update: {
        endpoint, // S'assurer que l'endpoint est également mis à jour si nécessaire
        p256dh,
        auth,
        updatedAt: new Date(),
      },
      create: {
        userId,
        endpoint,
        endpointHash,
        p256dh,
        auth,
      },
    });

    res.status(201).json({ message: "Abonnement enregistré avec succès" });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'abonnement:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de l'enregistrement de l'abonnement" });
  }
};

//**********  REMOVE SUBSCRIPTION **********/
exports.removeSubscription = async (req, res) => {
  const userId = req.userId;
  const { subscription } = req.body;
  const { endpoint } = subscription;

  try {
    // Calculer le hachage de l'endpoint pour la recherche
    const endpointHash = crypto
      .createHash("sha256")
      .update(endpoint)
      .digest("hex");

    await prisma.pushSubscription.deleteMany({
      where: {
        userId,
        endpointHash,
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'abonnement:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'abonnement" });
  }
};

//********** SEND NOTIFICATION **********/
exports.sendNotification = async (req, res) => {
  const { title, body, image, receiverId } = req.body;

  if (!title || !body || !image) {
    return res
      .status(400)
      .json({ message: "Des informations sont manquantes" });
  }

  try {
    const subscriptions = await prisma.pushSubscription.findMany({
      where: { userId: receiverId },
    });

    if (subscriptions.length === 0) {
      return res.status(404).json({ message: "Aucun abonnement trouvé" });
    }

    const payload = JSON.stringify({
      title: title,
      body: body,
      icon: `${process.env.IMAGE_URL}/profile/${image}`,
      url: "/chateo/",
      actions: [
        {
          action: "open_url",
          title: "Ouvrir",
          url: "/chateo/",
        },
      ],
    });

    // Envoyer à chaque abonnement
    await Promise.all(
      subscriptions.map(async (sub) => {
        const subscription = {
          endpoint: sub.endpoint,
          keys: {
            p256dh: sub.p256dh,
            auth: sub.auth,
          },
        };

        try {
          await webpush.sendNotification(subscription, payload);
        } catch (err) {
          if (err.statusCode === 410 || err.statusCode === 404) {
            console.warn("Abonnement invalide supprimé:", sub.endpoint);
            await prisma.pushSubscription.deleteMany({
              where: {
                userId: sub.userId,
                endpoint: sub.endpoint,
              },
            });
          } else {
            console.error("Erreur d'envoi de notification:", err);
          }
        }
      })
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de la notification:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
