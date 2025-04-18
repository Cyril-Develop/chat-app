//import { useSocketStore } from "@/store/socket.store";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
// import { useRef } from "react";
// import { toast } from "./ui/use-toast";

interface VoiceChatProps {
  roomId: number | null;
  username: string | null;
  userId: number | null;
}

const VoiceChat = ({ roomId, username, userId }: VoiceChatProps) => {
  //const { socket } = useSocketStore();

  //console.log("Socket:", socket);
  console.log("Room ID:", roomId);
  console.log("Username:", username);
  console.log("User ID:", userId);

  //const streamRef = useRef(null);

  // Fonction pour démarrer le chat vocal
  const startVoiceChat = async () => {
    // try {
    //   // Demander l'accès au microphone
    //   const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    //   streamRef.current = stream;
    //   // Créer un AudioContext pour détecter l'activité de la voix
    //   const audioContext = new (window.AudioContext ||
    //     window.webkitAudioContext)();
    //   audioContextRef.current = audioContext;
    // } catch (error) {
    //   console.error("Erreur lors de l'accès au microphone:", error);
    //   toast({
    //     title: "Impossible d'accéder au microphone.",
    //     description: " Veuillez vérifier vos permissions.",
    //     variant: "destructive",
    //     logo: <Icons.alert />,
    //   });
    // }
  };

  // Fonction pour démarrer le chat vidéo
  const startVideoChat = async () => {
    // try {
    //   // Demander l'accès à la caméra et au microphone
    //   const stream = await navigator.mediaDevices.getUserMedia({
    //     video: true,
    //     audio: true,
    //   });
    //   streamRef.current = stream;
    //   // Créer un AudioContext pour détecter l'activité de la voix
    //   const audioContext = new (window.AudioContext ||
    //     window.webkitAudioContext)();
    //   audioContextRef.current = audioContext;
    // } catch (error) {
    //   console.error("Erreur lors de l'accès à la caméra:", error);
    //   toast({
    //     title: "Impossible d'accéder à la caméra.",
    //     description: " Veuillez vérifier vos permissions.",
    //     variant: "destructive",
    //     logo: <Icons.alert />,
    //   });
    // }
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      <Button
        variant="secondary"
        title="Discuter en vidéo"
        onClick={startVideoChat}
      >
        <Icons.video width={20} height={20} />
      </Button>
      <Button
        variant="secondary"
        title="Discuter en vocal"
        onClick={startVoiceChat}
      >
        <Icons.call width={18} height={18} />
      </Button>
    </div>
  );
};

export default VoiceChat;
