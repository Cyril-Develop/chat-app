const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const prisma = new PrismaClient();

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    if (err.meta.target === "User_email_key") {
      return res.status(400).json({ error: "Email déjà utilisé" });
    }

    if (err.meta.target === "User_username_key") {
      return res.status(400).json({ error: "Nom d'utilisateur déjà utilisé" });
    }
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

const createToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "L'utilisateur n'existe pas" });
    }

    if (!(await argon2.verify(user.password, password))) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    const token = createToken(user);
    res.status(200).json({ token, role: user.role });
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

// SEND OTP EMAIL
const sendOTPEmail = async (email, otp) => {
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
    from: "Chateo",
    to: email,
    subject: "Votre code de vérification",
    html: `
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
        <h1 style="color: #333;">
          Chateo
        </h1>
        <h2 style="color: #333;">Voici votre code OTP :</h2>
        <div style="font-size: 24px; font-weight: bold; color: #007bff; background: #fff; padding: 10px; display: inline-block; border-radius: 5px;">
            ${otp}
        </div>
        <p style="font-size: 14px; color: #777; margin-top: 20px;">
            Ce code est valable pendant <strong>5 minutes</strong>.
        </p>
    </div>
`,
  });
};

// GENERATE OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// VERIFY ACCOUNT BEFORE SEND OTP
exports.verifyUser = async (req, res) => {
  const { username, email } = req.body;

  // Vérification si l'email existe déjà dans la base de données
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (emailExists) {
    return res.status(400).json({ error: "Email déjà utilisé" });
  }

  // Vérification si le nom d'utilisateur existe déjà dans la base de données
  const usernameExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (usernameExists) {
    return res.status(400).json({ error: `Nom d'utilisateur déjà utilisé` });
  }

  // Si aucun des deux n'existe, l'utilisateur est libre de s'enregistrer
  res
    .status(200)
    .json({ message: "Utilisateur non trouvé, vous pouvez continuer." });
};

exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email requis" });

  await prisma.otp.deleteMany({
    where: {
      email,
    },
  });

  const otpCode = generateOTP();

  await prisma.otp.create({
    data: {
      email,
      otp: otpCode,
      expiresAt: new Date(Date.now() + 1000 * 60 * 5), // 5 minutes de validité
    },
  });

  try {
    await sendOTPEmail(email, otpCode);
    res.status(200).json({ message: "Code OTP envoyé avec succès" });
  } catch (err) {
    console.error("Error sending OTP:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp)
    return res.status(400).json({ error: "Tous les champs sont requis" });

  const otpRecord = await prisma.otp.findFirst({
    where: {
      email,
      otp,
      expiresAt: {
        gte: new Date(),
      },
    },
  });

  if (!otpRecord) {
    return res
      .status(400)
      .json({ error: "Le code de vérification est incorrect ou a expiré" });
  }

  await prisma.otp.delete({
    where: {
      id: otpRecord.id,
    },
  });

  res
    .status(200)
    .json({ message: "Le code de vérification a été vérifié avec succés" });
};
