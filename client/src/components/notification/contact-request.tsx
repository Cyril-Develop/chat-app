import { useSocketStore } from "@/store/socket.store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAcceptFriendRequestMutation } from "@/hooks/accept-friend-request";
import { useRejectFriendRequestMutation } from "@/hooks/reject-friend-request";
import useGetRequest from "@/hooks/get-request";
import { log } from "node:console";


interface ContactRequests {
  receivedRequests: {
    id: string;
    sender: {
      id: string;
      username: string;
    };
  }[];
}

const ContactRequest = () => {
  const [contactRequests, setContactRequests] = useState<ContactRequests>({
    receivedRequests: [],
  });

  const { socket } = useSocketStore();
  const acceptFriendRequest = useAcceptFriendRequestMutation();
  const rejectFriendRequest = useRejectFriendRequestMutation();

  const { data } = useGetRequest();

  useEffect(() => {
    if (data) {
      setContactRequests(data);
    }
  }, [data]);

  console.log(contactRequests);

  //console.log(contactRequests.receivedRequests);

  useEffect(() => {
    socket?.on("receiveFriendRequest", (data) => {
      console.log(data);
      setContactRequests((prevRequests) => ({
        ...prevRequests,
        receivedRequests: [...prevRequests.receivedRequests, data], 
      }));
    });

    // socket?.on("friendRequestRejected", (friend) => {
    //   console.log(friend);

    //   setContactRequests((prevRequests) =>
    //     prevRequests.filter((request) => request.senderId !== friend.id)
    //   );
    // });

    // socket?.on("friendRequestAccepted", (friend) => {
    //   setContactRequests((prevRequests) =>
    //     prevRequests.filter((request) => request.senderId !== friend.id)
    //   );
    // });
    return () => {
      socket?.off("receiveFriendRequest");
      // socket?.off("friendRequestRejected");
      // socket?.off("friendRequestAccepted");
    };
  }, [socket, contactRequests]);

  const handleAcceptFriendRequest = (senderId: string, requestId: string) => {
    console.log(senderId, requestId);
    
    socket?.emit("acceptFriendRequest", senderId, requestId);
    console.log(senderId, requestId);
    //acceptFriendRequest.mutate(senderId);
  };

  const handleRejectFriendRequest = (senderId: string, requestId: string) => {
    console.log(senderId, requestId);

    // Mettre à jour l'état pour retirer la demande de contact
    // setContactRequests((prevRequests) =>
    //   prevRequests.filter((request) => request.id !== requestId)
    // );
      
    

    //socket?.emit("rejectFriendRequest", senderId, requestId);
    //rejectFriendRequest.mutate(senderId);
  };

  return (
    <ScrollArea className="h-72">
      <div className="flex flex-col gap-4">
        {contactRequests.receivedRequests?.map((request) => (
          <div
            key={request.sender.id}
            className="flex items-center justify-between"
          >
            <div>{request.sender.username}</div>
            <div className="flex gap-2">
              <Button
                title="Accepter la demande de contact"
                onClick={() =>
                  handleAcceptFriendRequest(request.sender.id, request.id)
                }
              >
                Accepter
              </Button>

              <Button
                variant="destructive"
                title="Refuser la demande de contact"
                onClick={() =>
                  handleRejectFriendRequest(request.sender.id, request.id)
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
