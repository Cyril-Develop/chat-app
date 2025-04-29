import PreviewCard from "@/components/settings/preview-card";
import ProfileForm from "@/components/settings/profile-form";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/api/user/get-current-user";
import { SkeletonProfile } from "@/components/skeleton/skeleton";
import { generateBlockDescription } from "@/utils/generate-alert-description";

const ProfilePage = () => {
  const { data: currentUser, isLoading } = useGetUser();
  return (
    <div className="space-y-6">
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
          {currentUser.isCurrentlyBlocked && (
            <article className="flex flex-col space-y-2 rounded-md border bg-red-600 dark:bg-red-500 p-4 shadow-md text-primary-foreground outline-none max-w-[700px] ">
              <h4 className="font-semibold">
                Votre compte est actuellement bloqué.
              </h4>
              <div>{generateBlockDescription(currentUser)}</div>
            </article>
          )}
          <PreviewCard user={currentUser} />

          <Separator />
          <ProfileForm user={currentUser} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
