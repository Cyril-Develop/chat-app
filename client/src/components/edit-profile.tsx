import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/schema/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "@/components/Icons";
import { useUserStore } from "@/store/user.store";
import { useState } from "react";

const EditProfile = () => {
  const { lastname, firstname } = useUserStore((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const form = useForm({
    defaultValues: {
      lastname: lastname,
      firstname: firstname,
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async () => {
    console.log("submit");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="btnMenu" title="Éditer profil">
          <Icons.user className="w-6 h-6" />
          <span className="hidden-text">Profil</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Éditer le profil</DialogTitle>
          <DialogDescription>
            <p>Apportez des modifications à votre profil ici.</p>
            <p>Cliquez sur Confirmer lorsque vous avez terminé.</p>
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4  sm:space-y-8"
            noValidate
          >
            <div className="space-y-4  sm:space-y-8">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-4">
              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full text-lg"
                  disabled={loading}
                  size={"lg"}
                >
                  {loading ? (
                    <p className="flex items-center gap-1">
                      Confirmer <Icons.spinner className="animate-spin" />{" "}
                    </p>
                  ) : (
                    "Confirmer"
                  )}
                </Button>
              </DialogFooter>
            </div>
            {apiError && <p>{apiError}</p>}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditProfile;