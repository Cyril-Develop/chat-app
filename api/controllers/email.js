const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const notificationTemplate = require("../email/templates/notification");
const contactTemplate = require("../email/templates/contact");
const transporter = require("../email/transporter");

exports.sendEmailNotification = async (req, res) => {
  const { receiverId, type } = req.body;
  const userId = req.auth.userId;

  if (!userId || !receiverId) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const receiver = await prisma.user.findUnique({
      where: { id: Number(receiverId) },
    });

    if (!receiver) {
      return res.status(404).json({ error: "Receiver not found." });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    await transporter.sendMail({
      to: process.env.MY_EMAIL,
      subject:
        type === "Private message"
          ? "Notification - Nouveau message privé"
          : "Notification - Nouvelle demande d'ami",
      html: notificationTemplate(user.username, type),
    });

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Erreur lors de l'envoi de l'email." });
  }
};

exports.sendEmailContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ error: "Veuillez remplir tous les champs" });
    }

    await transporter.sendMail({
      to: process.env.MY_EMAIL,
      subject: subject,
      text: "Ce message a été envoyé depuis le formulaire de contact de Chateo.",
      html: contactTemplate(name, email, message),
    });

    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};
