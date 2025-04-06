const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const crypto = require("crypto");
const transporter = require("../email/transporter");
const validRegister = require("../email/templates/valid-register");
const resetPassword = require("../email/templates/reset-password");
const prisma = new PrismaClient();

//**********  REGISTER **********/
exports.register = async (req, res) => {
  try {
    const { username, email, password, gender } = req.body;

    const usernameCapitalized =
      username.charAt(0).toUpperCase() + username.slice(1);

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        username: usernameCapitalized,
        email,
        password: hashedPassword,
        gender: gender.toUpperCase(),
      },
    });
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    if (err.meta.target === "User_email_key") {
      return res.status(400).json({ error: "Email déjà utilisé." });
    }

    if (err.meta.target === "User_username_key") {
      return res.status(400).json({ error: "Nom d'utilisateur déjà utilisé." });
    }
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

const createToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

//**********  LOGIN **********/
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "L'utilisateur n'existe pas." });
    }

    if (!(await argon2.verify(user.password, password))) {
      return res.status(401).json({ error: "Mot de passe incorrect." });
    }

    const token = createToken(user);

    // Stocker le token dans un cookie HTTP-only
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: process.env.COOKIE_MAX_AGE,
    });

    res.json({
      isAuthenticated: true,
      user: {
        id: user.id,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

//**********  LOGOUT **********/
exports.logout = (req, res) => {
  res.clearCookie("auth_token");
  res.json({ success: true });
};

//**********  VERIFY ACCOUNT **********/
const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: "Chateo",
    to: email,
    subject: "Votre code de vérification.",
    html: validRegister(otp),
  });
};

const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

//**********  VERIFY IF USER EXISTS BEFORE REGISTER **********/
exports.verifyUser = async (req, res) => {
  const { username, email } = req.body;

  // Vérification si l'email existe déjà dans la base de données
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (emailExists) {
    return res.status(400).json({ error: "Email déjà utilisé." });
  }

  // Vérification si le nom d'utilisateur existe déjà dans la base de données
  const usernameExists = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (usernameExists) {
    return res.status(400).json({ error: `Nom d'utilisateur déjà utilisé.` });
  }

  // Si aucun des deux n'existe, l'utilisateur est libre de s'enregistrer
  res
    .status(200)
    .json({ message: "Utilisateur non trouvé, vous pouvez continuer." });
};

//**********  CREATE OTP & SEND EMAIL **********/
exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email requis." });

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
    res.status(200).json({ message: "Code OTP envoyé avec succès." });
  } catch (err) {
    console.error("Error sending OTP:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

//**********  VERIFY OTP **********/
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp)
    return res.status(400).json({ error: "Tous les champs sont requis." });

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
      .json({ error: "Le code de vérification est incorrect ou a expiré." });
  }

  await prisma.otp.delete({
    where: {
      id: otpRecord.id,
    },
  });

  res
    .status(200)
    .json({ message: "Le code de vérification a été vérifié avec succés." });
};

//**********  RESET PASSWORD **********/
const sendResetPasswordEmail = async (email, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });

  await transporter.sendMail({
    from: "Chateo",
    to: email,
    subject: "Récupération de mot de passe.",
    html: resetPassword(token),
  });
};

//********** FORGOT PASSWORD **********/
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "L'utilisateur n'existe pas." });
  }

  await sendResetPasswordEmail(email, user.id);

  res.status(200).json({
    message: "Un message a été envoyé à l'email indiqué.",
  });
};

//********** RESET PASSWORD **********/
exports.resetPassword = async (req, res) => {
  const { token, password } = req.body;

  try {
    // Vérifier et décoder le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Hasher le nouveau mot de passe
    const hashedPassword = await argon2.hash(password);

    // Mettre à jour le mot de passe
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    res.status(200).json({
      message:
        "Mot de passe réinitialisé avec succès, vous pouvez maintenant vous connecter.",
    });
  } catch (error) {
    res.status(400).json({ error: "Token invalide ou expiré" });
  }
};
