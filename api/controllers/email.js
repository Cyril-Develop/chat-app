const prisma = require("../lib/prisma");
const notificationTemplate = require("../email/templates/notification");
const contactTemplate = require("../email/templates/contact");
const transporter = require("../email/transporter");

//**********  SEND EMAIL NOTIFICATION **********/
exports.sendEmailNotification = async (req, res) => {
  const { receiverId, type } = req.body;
  const userId = req.userId;

  if (!userId || !receiverId) {
    return res.status(400).json({ error: "Les champs sont obligatoires." });
  }

  try {
    const receiver = await prisma.user.findUnique({
      where: { id: Number(receiverId) },
      select: {
        email: true,
      },
    });

    if (!receiver) {
      return res.status(404).json({ error: "Destinataire introuvable." });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        username: true,
      },
    });

    await transporter.sendMail({
      to: receiver.email,
      subject:
        type === "Private message"
          ? "Notification - Nouveau message privé"
          : "Notification - Nouvelle demande d'ami",
      html: notificationTemplate(user.username, type),
    });

    return res.status(200).json({ message: "Email envoyé avec succès." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Erreur lors de l'envoi de l'email." });
  }
};

//**********  SEND EMAIL CONTACT **********/
exports.sendEmailContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ error: "Veuillez remplir tous les champs." });
    }

    await transporter.sendMail({
      to: process.env.MY_EMAIL,
      subject: subject,
      html: contactTemplate(name, email, message),
    });

    res.status(200).json({ message: "Message envoyé, merci !" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};
