import CardWrapper from "@/components/auth/card-wrapper";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const RegisterForm = () => {
  return (
    <CardWrapper
      label="Créer un compte"
      title="Créer un compte"
      backButtonHref="/login"
      backButtonLabel="Se connecter"
      text="Déjà un compte ?"
    >
      <div></div>
    </CardWrapper>
  );
};

export default RegisterForm;
