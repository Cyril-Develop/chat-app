const contactTemplate = (name, email, message) => `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
    <h2 style="color: #4D80EF;">📨 Nouveau message de ${name}</h2>
    <p style="font-size: 16px; line-height: 1.5;">
      <strong style="color: #333;">Email :</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
    </p>
    <p style="font-size: 16px; line-height: 1.5;">
      <strong style="color: #333;">Message :</strong><br>
      <span style="background-color: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #ddd; display: block; margin-top: 10px;">
        ${message}
      </span>
    </p>
    <hr style="border-top: 2px solid #ddd; margin: 20px 0;">
    <p style="font-size: 14px; color: #777;">Ce message a été envoyé depuis Chateo.</p>
  </div>
`;

module.exports = contactTemplate;
