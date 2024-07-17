import { useSocketStore } from "@/store/socket.store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAddContactMutation } from "@/hooks/add-contact";

interface ContactProps {
  requesterId: string;
  requesterName: string;
  contactId: string;
}

const ContactRequest = () => {
  const [contactRequests, setContactRequests] = useState<ContactProps[]>([]);
  const { socket } = useSocketStore();
  const mutation = useAddContactMutation();

  useEffect(() => {
    socket?.on("receiveFriendRequest", (data: ContactProps) => {
      setContactRequests((prevRequests) => [...prevRequests, data]);
    });

    socket?.on("friendRequestRejected", (friendId) => {
      setContactRequests((prevRequests) =>
        prevRequests.filter((request) => request.requesterId !== friendId)
      );
    });

    socket?.on("friendRequestAccepted", (friend) => {
      setContactRequests((prevRequests) =>
        prevRequests.filter((request) => request.requesterId !== friend.id)
      );
    });
    return () => {
      socket?.off("receiveFriendRequest");
      socket?.off("friendRequestRejected");
      socket?.off("friendRequestAccepted");
    };
  }, [socket, contactRequests]);

  const handleAcceptFriendRequest = (
    requesterId: string,
    contactId: string
  ) => {
    socket?.emit("acceptFriendRequest", requesterId, contactId);
    mutation.mutate(requesterId);
  };

  const handleRejectFriendRequest = (
    requesterId: string,
    contactId: string
  ) => {
    socket?.emit("rejectFriendRequest", requesterId, contactId);
  };

  return (
    <ScrollArea className="h-72">
      <div className="flex flex-col gap-4">
        {contactRequests?.map((contact) => (
          <div
            key={contact.requesterId}
            className="flex items-center justify-between"
          >
            <div>{contact.requesterName}</div>
            <div className="flex gap-2">
              <Button
                title="Accepter la demande de contact"
                onClick={() =>
                  handleAcceptFriendRequest(
                    contact.requesterId,
                    contact.contactId
                  )
                }
              >
                Accepter
              </Button>

              <Button
                variant="alert"
                title="Refuser la demande de contact"
                onClick={() =>
                  handleRejectFriendRequest(
                    contact.requesterId,
                    contact.contactId
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
