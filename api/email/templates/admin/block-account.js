const blockAccountTemplate = (username, email, reason, duration) => {
  const reasonMapping = {
    insultes: "Comportement insultant",
    harcelement: "Harcèlement",
    spam: "Spam / Publicité",
    contenu_inapproprie: "Contenu inapproprié",
  };

  const selectedReason = reasonMapping[reason] || "Motif non spécifié";

  const durationMapping = {
    "1j": "1 jour",
    "7j": "1 semaine",
    "30j": "1 mois",
    "permanent": "permanent",
  };
  const selectedDuration = durationMapping[duration] || "Durée non spécifiée";

  return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
    <h1 style="color: #007bff; text-align: center;">
      Chat'App
    </h1>
    <p style="font-size: 16px; line-height: 1.5;">
      Bonjour <strong style="color: #333;">${username}</strong>,
    </p>
    <p style="font-size: 16px; line-height: 1.5;">
      Nous vous informons que votre compte <strong>Chat'App</strong> associé à l'adresse 
      <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a> a été bloqué par notre équipe de modération.
    </p>
    <p style="font-size: 16px; line-height: 1.5;">
      <strong>Motif :</strong><br>
      <span style="background-color: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #ddd; display: block; margin-top: 10px;">
        ${selectedReason}
      </span>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">
      <strong>Durée :</strong><br>
      <span style="background-color: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #ddd; display: block; margin-top: 10px;">
        ${selectedDuration}
      </span>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">
      Pendant cette période, vous pouvez toujours vous connecter à l'application, mais vos actions sont limitées. Vous pouvez consulter nos <a href="${process.env.CLIENT_URL}/terms" style="color: #007bff; text-decoration: none;">conditions générales d'utilisation</a> pour plus de détails. 
    </p>
    <p style="font-size: 16px; line-height: 1.5; margin-top: 20px;">
      Si vous pensez qu'il s'agit d'une erreur ou si vous souhaitez obtenir plus d'informations, vous pouvez <a href="${process.env.CLIENT_URL}/contact" style="color: #007bff; text-decoration: none;">nous contacter</a> via le support.
    </p>
    <hr style="border-top: 2px solid #ddd; margin: 20px 0;">
    <p style="font-size: 14px; color: #777; text-align: center;">
      Ce message vous a été envoyé par l'équipe <strong>Chat'App</strong>.
    </p>
  </div>
  `;
};

module.exports = blockAccountTemplate;
