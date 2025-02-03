import { useSocketStore } from "@/store/socket.store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAcceptFriendRequestMutation } from "@/hooks/accept-friend-request";
import { useRejectFriendRequestMutation } from "@/hooks/reject-friend-request";
import useGetRequest from "@/hooks/get-request";
import { toast } from "@/components/ui/use-toast";

interface FriendRequest {
  id: number;
  status: string;
  sender: {
    id: number;
    username: string;
    profileImage: string;
  };
  receiver: {
    id: number;
    username: string;
    profileImage: string;
  };
  createdAt: string;
}

interface CurrentUserId {
  id: number;
}

const ContactRequest = ({ currentUser }: { currentUser: CurrentUserId }) => {
  const userId = currentUser?.id;
  const [contactRequests, setContactRequests] = useState<FriendRequest[]>([]);

  const { socket } = useSocketStore();
  const acceptFriendRequest = useAcceptFriendRequestMutation();
  const rejectFriendRequest = useRejectFriendRequestMutation();

  const { data } = useGetRequest();

  useEffect(() => {
    if (data) {
      setContactRequests(data);
    }
  }, [data]);

  useEffect(() => {
    if (data && userId) {
      const receivedRequests = data.filter(
        (request: FriendRequest) => request.receiver.id === userId
      );
      setContactRequests(receivedRequests);
    }
  }, [data, userId]);

  useEffect(() => {
    socket?.on("receiveFriendRequest", (data) => {
      setContactRequests((prevRequests) => [...prevRequests, data]);
    });

    return () => {
      socket?.off("receiveFriendRequest");
    };
  }, [socket]);

  const handleAcceptFriendRequest = (
    senderId: number,
    receiverId: number,
    requestId: number
  ) => {
    acceptFriendRequest.mutate(senderId);

    removeRequest(requestId);

    socket?.emit("acceptFriendRequest", senderId, receiverId, requestId);
  };

  const handleRejectFriendRequest = (
    senderId: number,
    receiverId: number,
    requestId: number
  ) => {
    rejectFriendRequest.mutate(senderId);

    removeRequest(requestId);

    socket?.emit("rejectFriendRequest", senderId, receiverId, requestId);
  };

  // retirer la demande de contact de la liste
  const removeRequest = (requestId: number) => {
    setContactRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== requestId)
    );
  };

  return (
    <ScrollArea className="h-72">
      <div className="flex flex-col gap-4">
        {contactRequests.map((request) => (
          <div
            key={request.sender.id}
            className="flex items-center justify-between"
          >
            <div>{request.sender.username}</div>
            <div className="flex gap-2">
              <Button
                title="Accepter la demande de contact"
                onClick={() =>
                  handleAcceptFriendRequest(
                    request.sender.id,
                    request.receiver.id,
                    request.id
                  )
                }
              >
                Accepter
              </Button>

              <Button
                variant="destructive"
                title="Refuser la demande de contact"
                onClick={() =>
                  handleRejectFriendRequest(
                    request.sender.id,
                    request.receiver.id,
                    request.id
                  )
                }
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
