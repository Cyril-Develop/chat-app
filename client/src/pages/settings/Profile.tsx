import PreviewCard from "@/components/settings/preview-card";
import ProfileForm from "@/components/settings/profile-form";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/api/user/get-current-user";
import { SkeletonProfile } from "@/components/skeleton/skeleton";

const ProfilePage = () => {
  const { data: currentUser, isLoading } = useGetUser();
  return (
    <div className="space-y-6 md:pb-10">
      {isLoading ? (
        <SkeletonProfile />
      ) : (
        <>
          <div>
            <h3 className="text-lg font-medium">Profil</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Modifiez la façon dont vous apparaissez aux autres utilisateurs.
            </p>
          </div>
          <PreviewCard user={currentUser} />
          <Separator />
          <ProfileForm user={currentUser} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
