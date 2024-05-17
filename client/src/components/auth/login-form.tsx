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

import CardWrapper from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      label="Se connecter"
      title="Se connecter"
      backButtonHref="/register"
      backButtonLabel="S'enregistrer"
      text="Pas encore de compte ?"
    >
      <div></div>
    </CardWrapper>
  );
};

export default LoginForm;
