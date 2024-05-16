import { ModeToggle } from "@/components/mode-toggle";

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
  const initialValues = {
    lastName: "",
    firstName: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Créer un compte</CardTitle>
        <CardDescription>
          Entrez vos informations pour créer un compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="lastName">Nom*</Label>
              <Input
                id="lastName"
                placeholder="Robinson"
                required
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="firstName">Prénom*</Label>
              <Input id="firstName" placeholder="Max" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe*</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Créer un compte
          </Button>
          <Button variant="outline" className="w-full">
            S'inscrire avec Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Déjà un compte ?{" "}
          <Link to="/login" className="underline">
            Se connecter
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
