const resetPassword = (token) => `
  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
    <h1 style="color: #007bff; text-align: center;">
      Chateo
    </h1>
    <h2 style="color: #333;">Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe :</h2>
    <a href="${process.env.CLIENT_URL}/reset-password/${token}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 10px;">
      Réinitialiser le mot de passe
    </a>
    <p style="font-size: 14px; color: #777; margin-top: 20px;">
      Ce lien est valable pendant <strong>30 minutes</strong>.
    </p>
    <p style="font-size: 14px; color: #777;">
      Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet email.
    </p>
  </div>
`;

module.exports = resetPassword;
