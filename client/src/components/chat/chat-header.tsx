import { Separator } from "@/components/ui/separator";

interface ChatHeaderProps {
  roomInfos: {
    name: string;
  };
}

const ChatHeader = ({ roomInfos }: ChatHeaderProps) => {

  return (
    <>
      <div className="flex justify-between pt-4 pb-4 text-3xl">
        <h1>{roomInfos.name}</h1>
      </div>
      <Separator />
    </>
  );
};

export default ChatHeader;
