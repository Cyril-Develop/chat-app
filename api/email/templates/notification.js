const notificationTemplate = (name, type) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
    <h1 style="color: #4D80EF; text-align: center;">
      <img src="${process.env.IMAGE_URL}logo.png" alt="Logo" width="100">
Chateo
    </h1>
    <p style="font-size: 16px; line-height: 1.5; background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #ddd; text-align: center;">
      ${
        type === "Private message"
          ? `📩 <strong>${name}</strong> vous a envoyé un <strong>message privé</strong>.`
          : `🤝 <strong>${name}</strong> vous a envoyé une <strong>demande d'ami</strong>.`
      }
    </p>

    <div style="text-align: center; margin: 20px 0;">
      <a href="${process.env.CLIENT_URL}/chat
      " style="display: inline-block; padding: 12px 20px; font-size: 16px; color: white; background-color: #4D80EF; border-radius: 5px; text-decoration: none; font-weight: bold;">
        ${type === "Private message" ? "Lire le message" : "Voir la demande"}
      </a>
    </div>

    <hr style="border-top: 2px solid #ddd; margin: 20px 0;">
    <p style="font-size: 14px; color: #777; text-align: center;">
      Si vous ne souhaitez plus recevoir de notifications de la part de Chateo, vous pouvez modifier vos préférences dans les paramètres de votre compte.
    </p>
    <p style="font-size: 14px; color: #777; text-align: center;">
      Ce message a été envoyé automatiquement depuis <strong>Chateo</strong>.
    </p>
  </div>
`;

module.exports = notificationTemplate;
