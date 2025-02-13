import { z } from "zod";

// MOTS INTERDITS
const forbiddenWords = [
  "con",
  "idiot",
  "abruti",
  "crétin",
  "imbécile",
  "stupide",
  "gros con",
  "salaud",
  "ordure",
  "merde",
  "enculé",
  "connard",
  "fils de",
  "batard",
  "pute",
  "salop",
  "salope",
  "bouffon",
  "boufon",
];
// Fonction pour enlever les accents
const removeAccents = (str: string) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const forbiddenRegex = new RegExp(`(${forbiddenWords.join("|")})`, "i");

// REGISTER / LOGIN
const usernameSchema = z
  .string()
  .min(1, { message: "Le nom d'utilisateur est requis" })
  .min(3, { message: "Minimum 3 caractères" })
  .max(15, { message: "Maximum 15 caractères" })
  .refine((value) => !forbiddenRegex.test(removeAccents(value)), {
    message: "Le nom d'utilisateur contient un mot interdit",
  });

const emailSchema = z
  .string()
  .min(1, { message: "L'email est requis" })
  .email({ message: "L'email n'est pas valide" })
  .refine((value) => !forbiddenRegex.test(removeAccents(value)), {
    message: "L'email contient un mot interdit",
  });

const passwordSchema = z
  .string()
  .min(1, { message: "Le mot de passe est requis" })
  .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
    message: "Le mot de passe doit être alphanumérique",
  })
  .min(8, { message: "Minimum 8 caractères" });

// ACCOUNT
const newEmailSchema = z
  .string()
  .min(1, { message: "Le nouvel email est requis" })
  .email({ message: "Le nouvel email n'est pas valide" })
  .refine((value) => !forbiddenRegex.test(removeAccents(value)), {
    message: "L'email contient un mot interdit",
  });

const bioSchema = z.string().max(150, { message: "Maximum 150 caractères" });

export const notificationsFormSchema = z.object({
  type: z.enum(["accept", "refuse"], {
    required_error: "Vous devez sélectionner un type de notification.",
  }),
});

// ROOM
const nameRoomSchema = z
  .string()
  .min(1, { message: "Le nom du salon est requis" })
  .min(3, { message: "Minimum 3 caractères" })
  .max(15, { message: "Maximum 15 caractères" })
  .refine((value) => !forbiddenRegex.test(removeAccents(value)), {
    message: "Le nom du salon contient un mot interdit",
  });

// SCHEMAS
export const RegisterFormSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const LoginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const AccountFormSchema = z.object({
  email: emailSchema,
  newEmail: newEmailSchema,
});

export const ProfileFormSchema = z.object({
  username: usernameSchema,
  bio: bioSchema,
  image: z.instanceof(File).nullable(),
});

export const RoomFormSchema = z.object({
  name: nameRoomSchema,
  password: z.string().optional(),
});

export const ForgotPasswordFormSchema = z.object({
  email: emailSchema,
});

export const RoomPasswordSchema = z.object({
  password: z.string().min(1, { message: "Le mot de passe est requis" }),
});

export const MessageFormSchema = z.object({
  message: z.string(),
  file: z.instanceof(File).nullable(),
});

export const PrivateMessageFormSchema = z.object({
  message: z.string(),
  file: z.instanceof(File).nullable(),
  receiverId: z.number(),
});
