const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ error: "Veuillez remplir tous les champs" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      to: process.env.MY_EMAIL,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #4CAF50;">Nouveau message de ${name}</h2>
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
      `,
    });

    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};
