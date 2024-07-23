import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/components/settings/profile-form";
import PreviewCard from "@/components/settings/preview-card";
import useGetUser from "@/hooks/get-user";
import { getUserId } from "@/utils/get-userId";

const ProfilePage = () => {
  const userId = getUserId();
  const { data } = useGetUser(userId);
  return (
    <div className="space-y-6 md:pb-10">
      {data && (
        <>
          <div>
            <h3 className="text-lg font-medium">Profil</h3>
            <p className="text-description">
              Modifiez la façon dont vous apparaissez aux autres utilisateurs.
            </p>
          </div>
          <PreviewCard user={data} />
          <Separator />
          <ProfileForm user={data} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
