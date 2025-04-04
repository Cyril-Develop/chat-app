import { z } from "zod";

// MOTS INTERDITS
const forbiddenWords = [
  "con",
  "idiot",
  "abruti",
  "cretin",
  "imbecile",
  "stupide",
  "gros con",
  "salaud",
  "ordure",
  "merde",
  "encule",
  "connard",
  "fils de",
  "batard",
  "pute",
  "salop",
  "salope",
  "bouffon",
  "boufon",
  "puta",
  "putain",
  "connasse",
  "attarde",
];

function strNoAccent(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// REGISTER / LOGIN
const usernameSchema = z
  .string()
  .min(1, { message: "Le nom d'utilisateur est requis" })
  .min(3, { message: "Minimum 3 caractères" })
  .max(15, { message: "Maximum 15 caractères" })
  .refine((value) => !forbiddenWords.includes(strNoAccent(value)), {
    message: "Le nom d'utilisateur contient un mot interdit",
  });

const emailSchema = z
  .string()
  .min(1, { message: "L'email est requis" })
  .email({ message: "L'email n'est pas valide" })
  .refine((value) => !forbiddenWords.includes(strNoAccent(value)), {
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
  .refine((value) => !forbiddenWords.includes(strNoAccent(value)), {
    message: "L'email contient un mot interdit",
  });

const bioSchema = z.string().max(150, { message: "Maximum 150 caractères" });

export const notificationsFormSchema = z.object({
  type: z.enum(["accept", "refuse"], {
    required_error: "Vous devez sélectionner un type de notification.",
  }),
});

// CONTACT
const nameSchema = z
  .string()
  .min(1, { message: "Le nom est requis" })
  .min(3, { message: "Minimum 3 caractères" })
  .max(15, { message: "Maximum 15 caractères" })
  .refine((value) => !forbiddenWords.includes(strNoAccent(value)), {
    message: "Le nom d'utilisateur contient un mot interdit",
  });

const messageSchema = z
  .string()
  .min(1, { message: "Le message est requis" })
  .max(150, { message: "Maximum 150 caractères" });

const subjectSchema = z
  .string()
  .min(1, { message: "L'objet est requis" })
  .min(3, { message: "Minimum 3 caractères" })
  .max(20, { message: "Maximum 20 caractères" });

// ROOM
const nameRoomSchema = z
  .string()
  .min(1, { message: "Le nom du salon est requis" })
  .min(3, { message: "Minimum 3 caractères" })
  .max(15, { message: "Maximum 15 caractères" })
  .refine((value) => !forbiddenWords.includes(strNoAccent(value)), {
    message: "Le nom du salon contient un mot interdit",
  });

// SCHEMAS
export const RegisterFormSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const ValidateAccountFormSchema = z.object({
  otp: z
    .string()
    .length(6, { message: "Le code attendu contient 6 caractères" })
    .regex(/^\d+$/, { message: "Le code ne doit contenir que des chiffres" }),
});

export const LoginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const AccountFormSchema = z.object({
  email: emailSchema,
  newEmail: newEmailSchema,
});

export const PasswordFormSchema = z.object({
  password: passwordSchema,
  confirmPassword: passwordSchema,
});

export const ContactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  subject: subjectSchema,
  message: messageSchema,
});

export const ProfileFormSchema = z.object({
  username: usernameSchema,
  bio: bioSchema,
  image: z.instanceof(File).nullable(),
});

export const RoomFormSchema = z.object({
  name: nameRoomSchema,
  password: z.string().optional(),
  description: z.string().optional(),
});

export const UpdateRoomFormSchema = z.object({
  description: z.string().optional(),
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
});
