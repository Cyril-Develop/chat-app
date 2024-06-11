import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/components/settings/profile-form";
import PreviewCard from "@/components/preview-card";
import useUser from "@/hooks/use-user";
import { Icons } from "@/components/Icons";

const ProfilePage = () => {
  const user = useUser();
  return (
    <div className="space-y-6">
      {user ? (
        <>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium">Profil</h3>
            <PreviewCard user={user} />
            <p className="text-muted-foreground">
              Voici comment vous apparaissez aux autres membres de la
              communauté.
            </p>
          </div>
          <Separator />
          <ProfileForm user={user} />
        </>
      ) : (
        <Icons.spinner className="animate-spin" />
      )}
    </div>
  );
};

export default ProfilePage;
