import { Icons } from "@/components/Icons";
import VoiceDetection from "@/components/stream/audio/voice-detection";
import { Button } from "@/components/ui/button";
import { useVocalChat } from "@/hooks/stream/vocal/vocal-chat";
import { useSocketStore } from "@/store/socket.store";

interface VoiceChatProps {
  roomId: number | null;
  username: string | null;
  userId: number | null;
}

const VocalChat = ({ roomId, username, userId }: VoiceChatProps) => {
  const socket = useSocketStore((state) => state.socket);
  const {
    stream,
    isVocalChatActive,
    isMuted,
    startVocalChat,
    stopVocalChat,
    toggleMute,
  } = useVocalChat({ socket, roomId, username, userId });

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex gap-4 items-center">
        <Button
          variant={isVocalChatActive ? "alert" : "secondary"}
          title={
            isVocalChatActive
              ? "Arrêter le chat vocal"
              : "Démarrer le chat vocal"
          }
          onClick={isVocalChatActive ? stopVocalChat : startVocalChat}
        >
          {isVocalChatActive ? (
            <Icons.phoneOff width={20} height={20} />
          ) : (
            <Icons.phone width={20} height={20} />
          )}
        </Button>
        {isVocalChatActive && (
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
      {isVocalChatActive && stream && userId && roomId && (
        <VoiceDetection stream={stream} userId={userId} roomId={roomId} />
      )}
    </div>
  );
};

export default VocalChat;
