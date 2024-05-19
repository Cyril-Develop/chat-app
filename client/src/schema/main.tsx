import { z } from "zod";

export const RegisterFormSchema = z.object({
  lastname: z.string().min(2, {
    message: "Minimum 2 caractères",
  }),
  firstname: z.string().min(2, {
    message: "Minimum 2 caractères",
  }),
  email: z.string().email({
    message: "Adresse email invalide",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit contenir au moins 6 caractères",
  }),
});

export const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Adresse email invalide",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit contenir au moins 6 caractères",
  }),
});
