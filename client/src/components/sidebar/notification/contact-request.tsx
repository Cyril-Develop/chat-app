import { useSocketStore } from "@/store/socket.store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import { useAcceptFriendRequestMutation } from "@/hooks/accept-friend-request";
import { useRejectFriendRequestMutation } from "@/hooks/reject-friend-request";
import useGetRequest from "@/hooks/get-friend-requests";
import { FriendRequest, CurrentUserId } from "@/types/contact";
import { cn } from "@/lib/utils";

const ContactRequest = ({
  currentUser,
  setShowNotification,
}: {
  currentUser?: CurrentUserId;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const userId = currentUser?.id;
  const [contactRequests, setContactRequests] = useState<FriendRequest[]>([]);
  const { socket } = useSocketStore();
  const { mutate: acceptFriendRequest } = useAcceptFriendRequestMutation();
  const { mutate: rejectFriendRequest } = useRejectFriendRequestMutation();
  const { data: friendRequests } = useGetRequest();

  // Met à jour contactRequests quand friendRequests change
  useEffect(() => {
    if (friendRequests && userId) {
      const receivedRequests = friendRequests.filter(
        (request: FriendRequest) => request.receiver.id === userId
      );
      setContactRequests(receivedRequests);
      setShowNotification(receivedRequests.length > 0);
    }
  }, [friendRequests, userId, setShowNotification]);

  // Gère les nouvelles demandes de contact via le socket
  useEffect(() => {
    const handleReceiveFriendRequest = (newRequest: FriendRequest) => {
      setContactRequests((prevRequests) => {
        const exists = prevRequests.some((req) => req.id === newRequest.id);
        return exists ? prevRequests : [...prevRequests, newRequest];
      });
      setShowNotification(true);
    };

    socket?.on("receiveFriendRequest", handleReceiveFriendRequest);
    return () => {
      socket?.off("receiveFriendRequest", handleReceiveFriendRequest);
    };
  }, [socket, setShowNotification]);

  // Supprime une requête localement et met à jour la notification
  const removeRequest = useCallback(
    (requestId: number) => {
      setContactRequests((prevRequests) => {
        const updatedRequests = prevRequests.filter(
          (request) => request.id !== requestId
        );
        setShowNotification(updatedRequests.length > 0);
        return updatedRequests;
      });
    },
    [setShowNotification]
  );

  // Gestion des actions Accepter / Refuser
  const handleAccept = (request: FriendRequest) => {
    acceptFriendRequest(request.sender.id);
    removeRequest(request.id);
    socket?.emit(
      "acceptFriendRequest",
      request.sender.id,
      request.receiver.id,
      request.id
    );
  };

  const handleReject = (request: FriendRequest) => {
    rejectFriendRequest(request.sender.id);
    removeRequest(request.id);
    socket?.emit(
      "rejectFriendRequest",
      request.sender.id,
      request.receiver.id,
      request.id
    );
  };

  return (
    <ScrollArea className={cn("h-72")}>
      <div className="flex flex-col gap-4">
        {contactRequests.map((request) => (
          <div key={request.id} className="flex items-center justify-between">
            <div>{request.sender.username}</div>
            <div className="flex gap-2">
              <Button
                title="Accepter la demande de contact"
                onClick={() => handleAccept(request)}
              >
                Accepter
              </Button>
              <Button
                variant="destructive"
                title="Refuser la demande de contact"
                onClick={() => handleReject(request)}
              >
                Refuser
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ContactRequest;
