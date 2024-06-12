import { z } from "zod";

// const lastnameSchema = z
//   .string()
//   .min(1, { message: "Le nom est requis" })
//   .min(2, { message: "Minimum 2 caractères" })
//   .max(15, { message: "Maximum 15 caractères" });

// const firstnameSchema = z
//   .string()
//   .min(1, { message: "Le prénom est requis" })
//   .min(2, { message: "Minimum 2 caractères" })
//   .max(15, { message: "Maximum 15 caractères" });

const emailSchema = z
  .string()
  .min(1, { message: "L'email est requis" })
  .email({ message: "L'email n'est pas valide" });

const newEmailSchema = z
  .string()
  .min(1, { message: "Le nouvel email est requis" })
  .email({ message: "Le nouvel email n'est pas valide" });

const passwordSchema = z
  .string()
  .min(1, { message: "Le mot de passe est requis" })
  .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
    message: "Le mot de passe doit être alphanumérique",
  })
  .min(8, { message: "Minimum 8 caractères" });

const usernameSchema = z
  .string()
  .min(1, { message: "Le nom d'utilisateur est requis" })
  .min(3, { message: "Minimum 3 caractères" })
  .max(15, { message: "Maximum 15 caractères" });


const bioSchema = z.string()
.max(150, { message: "Maximum 150 caractères" });

export const notificationsFormSchema = z.object({
  type: z.enum(["all", "none"], {
    required_error: "Vous devez sélectionner un type de notification.",
  }),
});

export const RegisterFormSchema = z.object({
  username: usernameSchema,
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
  image: z.instanceof(File).nullable()
});

export const LoginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
