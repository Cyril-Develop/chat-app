import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import VoiceDetection from "@/components/stream/voice/voice-detection";
import { useVoiceChat } from "@/hooks/stream/vocal/voice-chat";
import { useSocketStore } from "@/store/socket.store";
import { toast } from "@/components/ui/use-toast";

interface VoiceChatProps {
  roomId: number | null;
  username: string | null;
  userId: number | null;
}

const VoiceChat = ({ roomId, username, userId }: VoiceChatProps) => {
  const socket = useSocketStore((state) => state.socket);
  const {
    stream,
    isVoiceChatActive,
    isMuted,
    startVoiceChat,
    stopVoiceChat,
    toggleMute,
  } = useVoiceChat({ socket, roomId, username, userId });

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex gap-4">
        <Button variant="secondary" title="Démarrer le chat vidéo">
          <Icons.video
            width={22}
            height={22}
            onClick={() =>
              toast({
                title: "Cette fonctionnalité n'est pas encore disponible.",
                logo: <Icons.info />,
              })
            }
          />
        </Button>
        <Button
          variant={isVoiceChatActive ? "alert" : "secondary"}
          title={
            isVoiceChatActive
              ? "Arrêter le chat vocal"
              : "Démarrer le chat vocal"
          }
          onClick={isVoiceChatActive ? stopVoiceChat : startVoiceChat}
        >
          {isVoiceChatActive ? (
            <Icons.phoneOff width={20} height={20} />
          ) : (
            <Icons.phone width={20} height={20} />
          )}
        </Button>
        {isVoiceChatActive && (
          <Button
            variant={isMuted ? "secondary" : "alert"}
            title={isMuted ? "Réactiver le micro" : "Couper le micro"}
            onClick={toggleMute}
          >
            {isMuted ? (
              <Icons.micOff width={20} height={20} />
            ) : (
              <Icons.mic width={20} height={20} />
            )}
          </Button>
        )}
      </div>
      {/* VOICE DETECTION */}
      {isVoiceChatActive && stream && userId && roomId && (
        <VoiceDetection stream={stream} userId={userId} roomId={roomId} />
      )}
    </div>
  );
};

export default VoiceChat;
