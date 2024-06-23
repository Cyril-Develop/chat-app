import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/components/settings/profile-form";
import PreviewCard from "@/components/settings/preview-card";
import useFetchUser from "@/hooks/fetch-user";

const ProfilePage = () => {
  const { data } = useFetchUser();
  return (
    <div className="space-y-6 pb-4 md:pb-10">
      {data && (
        <>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium">Profil</h3>
            <PreviewCard user={data} />
            <p className="text-muted-foreground">
              Voici comment vous apparaissez aux autres membres de la
              communauté.
            </p>
          </div>
          <Separator />
          <ProfileForm user={data} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
