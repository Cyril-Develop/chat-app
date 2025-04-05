import { useMemo, useEffect } from "react";
import useGetRequest from "@/hooks/api/user/get-friend-requests";
import { FriendRequest, CurrentUserId } from "@/types/contact";
import { useSocketStore } from "@/store/socket.store";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAcceptFriendRequestMutation } from "@/hooks/api/user/accept-friend-request";
import { useRejectFriendRequestMutation } from "@/hooks/api/user/reject-friend-request";
import { useQueryClient } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const ContactRequest = ({ currentUser }: { currentUser?: CurrentUserId }) => {
  const userId = currentUser?.id;
  const { data: friendRequests } = useGetRequest();
  const queryClient = useQueryClient();
  const { socket } = useSocketStore();
  const { mutate: acceptFriendRequest } = useAcceptFriendRequestMutation();
  const { mutate: rejectFriendRequest } = useRejectFriendRequestMutation();

  const receivedRequests = useMemo(
    () =>
      friendRequests?.filter(
        (request: FriendRequest) => request.receiver.id === userId
      ) || [],
    [friendRequests, userId]
  );

  useEffect(() => {
    const handleReceiveFriendRequest = () => {
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
    };

    socket?.on("receiveFriendRequest", handleReceiveFriendRequest);
    return () => {
      socket?.off("receiveFriendRequest", handleReceiveFriendRequest);
    };
  }, [socket, queryClient]);

  // Si l'utilisateur courant n'a reçu aucune demande d'ami, on ne retourne pas le composant
  if (receivedRequests.length === 0) return null;

  return (
    <>
      <h2 className="text-xl font-semibold flex justify-between">
        {receivedRequests.length > 1 ? "Demandes" : "Demande"} d'ami {""}
        {receivedRequests.length > 1 ? "s" : ""}({receivedRequests.length})
      </h2>
      <Separator />
      <ScrollArea className={cn("h-72")}>
        <div className="flex flex-col gap-4">
          {receivedRequests.map((request: FriendRequest) => (
            <div key={request.id} className="flex items-center justify-between">
              <div>{request.sender.username}</div>
              <div className="flex gap-2">
                <Button onClick={() => acceptFriendRequest(request.sender.id)}>
                  Accepter
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => rejectFriendRequest(request.sender.id)}
                >
                  Refuser
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default ContactRequest;
