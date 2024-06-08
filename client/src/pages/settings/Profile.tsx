import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/components/settings/profile-form";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profil</h3>
        <p className="text-muted-foreground">
          Voici comment vous apparaissez aux autres membres de la communauté.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
