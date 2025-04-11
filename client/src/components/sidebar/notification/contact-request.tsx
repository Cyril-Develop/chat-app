import { useMemo } from "react";
import useGetRequest from "@/hooks/api/user/get-friend-requests";
import { FriendRequest } from "@/types/contact";
import { Button } from "@/components/ui/button";
import { useAcceptFriendRequestMutation } from "@/hooks/api/user/accept-friend-request";
import { useRejectFriendRequestMutation } from "@/hooks/api/user/reject-friend-request";
import { Separator } from "@/components/ui/separator";
import useGetUser from "@/hooks/api/user/get-current-user";
import UserThumbnail from "@/components/user-thumbnail";

const ContactRequest = () => {
  const { data: currentUser } = useGetUser();
  const userId = currentUser?.id;
  const { data: friendRequests } = useGetRequest();
  const { mutate: acceptFriendRequest } = useAcceptFriendRequestMutation();
  const { mutate: rejectFriendRequest } = useRejectFriendRequestMutation();

  const receivedRequests = useMemo(
    () =>
      friendRequests?.filter(
        (request: FriendRequest) => request.receiver.id === userId
      ) || [],
    [friendRequests, userId]
  );

  // Si l'utilisateur courant n'a reçu aucune demande d'ami, on ne retourne pas le composant
  if (receivedRequests.length === 0) return null;

  return (
    <>
      <h2 className="text-additional-info">
        {receivedRequests.length > 1 ? "Demandes" : "Demande"} d'ami
        {receivedRequests.length > 1 ? "s" : ""} {""}({receivedRequests.length})
      </h2>
      <div className="flex flex-col gap-4">
        {receivedRequests.map((request: FriendRequest) => (
          <div key={request.id}>
            <div className="flex items-center justify-between gap-8 p-2">
              <UserThumbnail
                imageSize="8"
                username={request.sender.username}
                image={request.sender.profileImage}
                gender={request.sender.gender}
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
