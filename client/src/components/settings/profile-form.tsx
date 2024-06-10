import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ProfileFormSchema } from "@/schema/main";
import { useUserStore } from "@/store/user.store";
import { useState } from "react";

const ProfileForm = () => {
  const { username, bio } = useUserStore((state) => state.user);
  const [defaultValues] = useState({
    username: username,
    bio: bio,
    image: "",
  });

  const form = useForm({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues,
  });

  const onSubmit = async () => {
    console.log("submitting");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Il s'agit de votre nom d'affichage public. Il peut s'agir de
                votre vrai nom ou d'un pseudonyme.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <p className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Image
              </p>
              <FormLabel className="input-style">
                Sélectionner une image
              </FormLabel>
              <FormControl>
                <Input {...field} type="file" className="hidden" />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Votre image de profil apparaîtra sur votre carte de profil.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Parle nous un peu de toi..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Votre bio apparaîtra sur votre carte de profil.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" size={"lg"} variant="default" className="text-lg w-full sm:w-auto">
          Enregistrer les modifications
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
