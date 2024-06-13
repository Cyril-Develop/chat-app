import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
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
import { Siren } from "lucide-react";
import { handleKeydown, handleLabelClick } from "@/utils/handle-input-file";
import { UserInfos } from "@/types/types";
import { useState } from "react";
import { useEditUserMutation } from "@/hooks/edit-profil";

interface ProfileFormValues {
  username: string;
  bio: string;
  image: File | null;
}

interface ProfileFormProps {
  user: UserInfos;
}

const ProfileForm = ({ user }: ProfileFormProps) => {
  const defaultValues = {
    username: user.username,
    bio: user.bio || "",
    image: null,
  };

  const mutation = useEditUserMutation();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues,
  });

  const [imageUploaded, setImageUploaded] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files?.[0] ?? null;
    setImageUploaded(file);
    form.setValue("image", file);
  };

  const onSubmit = async (data: ProfileFormValues) => {
    const { username, bio, image } = data;

    if (
      (username === user.username && bio === user.bio && !image) ||
      (username === user.username && bio === "" && !image)
    ) {
      toast({
        title: "Erreur",
        description: "Aucune modification n'a été apportée.",
        variant: "destructive",
        logo: <Siren size={30} />,
      });
    } else {
      const formData = new FormData();

      formData.append("username", username);
      formData.append("bio", bio);
      if (image) {
        formData.append("image", image);
      }

      mutation.mutate(formData);
      setImageUploaded(null);
    }
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
              <FormLabel
                className="input-style"
                tabIndex={0}
                aria-label="Sélectionner une image"
                onKeyDown={handleKeydown}
                onClick={() => handleLabelClick("fileInput")}
              >
                Sélectionner une image
                {imageUploaded && (
                  <img
                    src={URL.createObjectURL(imageUploaded)}
                    alt="preview image"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                )}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="file"
                  accept=".jpg,.jpeg,.png,.svg"
                  className="hidden"
                  value={undefined}
                  onChange={handleFileChange}
                />
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
                  maxLength={150}
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
        <Button
          type="submit"
          size={"lg"}
          variant="default"
          className="text-lg w-full sm:w-auto"
        >
          Enregistrer les modifications
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
