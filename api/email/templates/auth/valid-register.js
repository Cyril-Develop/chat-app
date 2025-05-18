const validRegister = (otp) => `
  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
    <h1 style="color: #007bff; text-align: center;">
      Chat'App
    </h1>
    <h2 style="color: #333;">Voici votre code de vérification :</h2>
      <div style="font-size: 24px; font-weight: bold; color: #007bff; background: #fff; padding: 10px; display: inline-block; border-radius: 5px;">
            ${otp}
      </div>
    <p style="font-size: 14px; color: #777; margin-top: 20px;">
      Ce code est valable pendant <strong>5 minutes</strong>.
    </p>
  </div>
`;

module.exports = validRegister;
