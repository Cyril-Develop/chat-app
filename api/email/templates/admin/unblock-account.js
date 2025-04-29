const deleteAccountTemplate = (username, email) => {

  return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
    <h1 style="color: #007bff; text-align: center;">
      Chateo
    </h1>
    <p style="font-size: 16px; line-height: 1.5;">
      Bonjour <strong style="color: #333;">${username}</strong>,
    </p>
    <p style="font-size: 16px; line-height: 1.5;">
      Nous vous informons que votre compte <strong>Chateo</strong> associé à l'adresse 
      <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a> a été débloqué par notre équipe de modération.
    </p>
    <p style="font-size: 16px; line-height: 1.5; margin-top: 20px;">
      Pour obtenir plus d'informations sur ce qui est autorisé ou non sur notre plateforme, nous vous invitons à consulter nos <a href="${process.env.CLIENT_URL}/terms" style="color: #007bff; text-decoration: none;">conditions générales d'utilisation</a> via le support.
    </p>
    <hr style="border-top: 2px solid #ddd; margin: 20px 0;">
    <p style="font-size: 14px; color: #777; text-align: center;">
      Ce message vous a été envoyé par l'équipe <strong>Chateo</strong>.
    </p>
  </div>
  `;
};

module.exports = deleteAccountTemplate;
