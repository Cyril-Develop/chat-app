import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons";
import { Button } from "../ui/button";

interface ChatHeaderProps {
  room: {
    name: string;
    createdBy: number;
  };
  currentUser: {
    id: number;
  };
}

const ChatHeader = ({ room, currentUser }: ChatHeaderProps) => {
  return (
    <>
      <div className="flex justify-between pt-4 pb-4 text-3xl">
        <h1>{room.name}</h1>
        {room.createdBy === currentUser?.id && (
          <Button
            variant="linkForm"
            title="Supprimer le salon"
            className="p-0"
            onClick={() => {
              console.log("clicked");
            }}
          >
            <Icons.delete width="18" height="18" />
          </Button>
        )}
      </div>
      <Separator />
    </>
  );
};

export default ChatHeader;
