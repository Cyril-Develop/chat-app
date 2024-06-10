import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/components/settings/profile-form";
import PreviewCard from "@/components/preview-card";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">Profil</h3>
        <PreviewCard />
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
