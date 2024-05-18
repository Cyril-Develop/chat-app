import CardWrapper from "@/components/auth/card-wrapper";
import { RegisterFormSchema } from "@/schema/main";
import { useForm } from "react-hook-form"

import {
  Form, 
  FormControl,
  FormLabel,
  FormDescription,
  FormItem,
  FormMessage,
  FormField
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";


const RegisterForm = () => {

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit = () => {
    console.log("submit");
  };


  return (
    <CardWrapper
      label="Créer un compte"
      title="Créer un compte"
      backButtonHref="/login"
      backButtonLabel="Se connecter"
      text="Déjà un compte ?"
    >
      <Form >
        
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
