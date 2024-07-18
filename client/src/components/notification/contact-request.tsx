import { useSocketStore } from "@/store/socket.store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useAddContactMutation } from "@/hooks/add-contact";

interface ContactProps {
  senderId: string;
  senderName: string;
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
        prevRequests.filter((request) => request.senderId !== friendId)
      );
    });

    socket?.on("friendRequestAccepted", (friend) => {
      setContactRequests((prevRequests) =>
        prevRequests.filter((request) => request.senderId !== friend.id)
      );
    });
    return () => {
      socket?.off("receiveFriendRequest");
      socket?.off("friendRequestRejected");
      socket?.off("friendRequestAccepted");
    };
  }, [socket, contactRequests]);

  const handleAcceptFriendRequest = (senderId: string, contactId: string) => {
    socket?.emit("acceptFriendRequest", senderId, contactId);
    mutation.mutate(senderId);
  };

  const handleRejectFriendRequest = (senderId: string, contactId: string) => {
    socket?.emit("rejectFriendRequest", senderId, contactId);
  };

  return (
    <ScrollArea className="h-72">
      <div className="flex flex-col gap-4">
        {contactRequests?.map((contact) => (
          <div
            key={contact.senderId}
            className="flex items-center justify-between"
          >
            <div>{contact.senderName}</div>
            <div className="flex gap-2">
              <Button
                title="Accepter la demande de contact"
                onClick={() =>
                  handleAcceptFriendRequest(contact.senderId, contact.contactId)
                }
              >
                Accepter
              </Button>

              <Button
                variant="destructive"
                title="Refuser la demande de contact"
                onClick={() =>
                  handleRejectFriendRequest(contact.senderId, contact.contactId)
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
