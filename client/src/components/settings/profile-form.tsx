import ButtonForm from "@/components/button-form";
import { Icons } from "@/components/Icons";
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
import { useEditUserMutation } from "@/hooks/api/user/edit-profil";
import { ProfileFormSchema } from "@/schema/main";
import { ProfileFormProps, ProfileFormValues } from "@/types/setting";
import { handleKeydown, handleLabelClick } from "@/utils/input-key-handler";
import { zodResolver } from "@hookform/resolvers/zod";
import { Siren } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

const ProfileForm = ({ user }: ProfileFormProps) => {
  const defaultValues = {
    username: user.username,
    bio: user.bio || "",
    image: null,
  };

  const editUser = useEditUserMutation();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues,
  });

  const [imageUploaded, setImageUploaded] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const resetInputRef = () => {
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files?.[0] ?? null;
    setImageUploaded(file);
    form.setValue("image", file);
  };

  const onSubmit = async (data: ProfileFormValues) => {
    const { username, bio, image } = data;

    if (username === user.username && bio === user.bio && !image) {
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

      editUser.mutate(formData);
      setImageUploaded(null);
      resetInputRef();
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
              <FormLabel className={cn("text-label")}>
                Nom d'utilisateur
              </FormLabel>
              <FormControl>
                <Input {...field} type="text" className={cn("text-label")} />
              </FormControl>
              <FormMessage />
              <FormDescription className={cn("text-additional-info")}>
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
              <p className="text-label leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Image
              </p>
              <FormLabel
                className={cn(
                  "input-style hover:bg-primary hover:text-primary-foreground dark:bg-primary-foreground dark:border-popover dark:hover:bg-primary text-label"
                )}
                tabIndex={0}
                aria-label="Sélectionner une image"
                onKeyDown={handleKeydown}
                onClick={() => handleLabelClick("fileInput")}
              >
                {imageUploaded ? (
                  <div className="flex items-center gap-2 text-label">
                    Image chargée
                    <img
                      src={URL.createObjectURL(imageUploaded)}
                      alt="preview image"
                      className="w-11 h-11 rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-label">
                    Sélectionner une image
                    <Icons.image />
                  </div>
                )}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="file"
                  accept=".jpg,.jpeg,.png,.svg"
                  className="hidden"
                  value={undefined}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </FormControl>
              <FormMessage />
              <FormDescription className={cn("text-additional-info")}>
                L'image doit être au format JPG, JPEG, PNG ou SVG.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn("text-label")}>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Parle nous un peu de toi..."
                  className={cn(
                    "resize-none whitespace-normal overflow-y-scroll scrollbar-webkit scrollbar-firefox dark:border-popover text-label"
                  )}
                  maxLength={150}
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription className={cn("text-additional-info")}>
                Votre bio apparaîtra sur votre profil.
              </FormDescription>
            </FormItem>
          )}
        />
        <ButtonForm
          loading={editUser.isPending}
          disabled={editUser.isPending}
          defaultValue="Enregistrer les modifications"
          spinnerValue="Envoi en cours"
        />
      </form>
    </Form>
  );
};

export default ProfileForm;
