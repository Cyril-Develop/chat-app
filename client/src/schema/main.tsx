import { z } from "zod";

const lastnameSchema = z
  .string()
  .min(1, { message: "Le nom est requis" })
  .min(2, { message: "Minimum 2 caractères" })
  .max(15, { message: "Maximum 15 caractères" });

const firstnameSchema = z
  .string()
  .min(1, { message: "Le prénom est requis" })
  .min(2, { message: "Minimum 2 caractères" })
  .max(15, { message: "Maximum 15 caractères" });

const emailSchema = z
  .string()
  .min(1, { message: "L'email est requis" })
  .email({ message: "L'email n'est pas valide" });

const passwordSchema = z
  .string()
  .min(1, { message: "Le mot de passe est requis" })
  .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
    message: "Le mot de passe doit être alphanumérique",
  })
  .min(8, { message: "Minimum 8 caractères" });

export const RegisterFormSchema = z.object({
  lastname: lastnameSchema,
  firstname: firstnameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const LoginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
