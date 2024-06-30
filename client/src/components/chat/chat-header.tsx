import { Separator } from "@/components/ui/separator";

interface ChatHeaderProps {
  room: {
    name: string;
  };
}

const ChatHeader = ({ room }: ChatHeaderProps) => {

  return (
    <>
      <div className="flex justify-between pt-4 pb-4 text-3xl">
        <h1>{room.name}</h1>
      </div>
      <Separator />
    </>
  );
};

export default ChatHeader;
