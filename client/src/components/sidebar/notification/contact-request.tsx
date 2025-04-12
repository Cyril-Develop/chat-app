import { Button } from "@/components/ui/button";
import { useAcceptFriendRequestMutation } from "@/hooks/api/user/accept-friend-request";
import { useRejectFriendRequestMutation } from "@/hooks/api/user/reject-friend-request";
import { Separator } from "@/components/ui/separator";
import UserThumbnail from "@/components/user-thumbnail";
import { useNotificationStore } from "@/store/notification.store";
import { NotificationProps } from "@/types/message";

const ContactRequest = () => {
  const { requests } = useNotificationStore();
  const { mutate: acceptFriendRequest } = useAcceptFriendRequestMutation();
  const { mutate: rejectFriendRequest } = useRejectFriendRequestMutation();

  return (
    <>
      <h2 className="text-additional-info">
        {requests.length > 1 ? "Demandes" : "Demande"} d'ami
        {requests.length > 1 ? "s" : ""} {""}({requests.length})
      </h2>
      <div className="flex flex-col gap-4">
        {requests.map((request: NotificationProps) => (
          <div key={request.id}>
            <div className="flex items-center justify-between gap-8 p-2">
              <UserThumbnail
                imageSize="8"
                username={request.sender.username}
                image={request.sender.profileImage}
                sex={request.sender.sex}
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => acceptFriendRequest(request.sender.id)}
                  title="Ajouter en ami"
                >
                  Accepter
                </Button>
                <Button
                  variant="destructive"
                  className="text-primary-foreground"
                  onClick={() => rejectFriendRequest(request.sender.id)}
                  title="Refuser la demande d'ami"
                >
                  Refuser
                </Button>
              </div>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactRequest;
