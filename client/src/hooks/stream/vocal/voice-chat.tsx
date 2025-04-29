import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { playNotificationSound } from "@/components/stream/voice/sound-provider";
import { useMute } from "@/hooks/stream/vocal/mute";
import { useVoiceStore } from "@/store/voice.store";
import {
  AudioProcessingContext,
  cleanupAudioProcessing,
  setupAudioProcessing,
} from "@/utils/audio-processor";
import { setupVoiceSocketHandlers } from "@/socket/voice-socket-handler";
import { Peer } from "peerjs";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseVoiceChatProps {
  socket: any | null;
  roomId: number | null;
  username: string | null;
  userId: number | null;
}

export function useVoiceChat({
  socket,
  roomId,
  username,
  userId,
}: UseVoiceChatProps) {
  const { inputVolume, outputVolume, setSpeakingUsers } = useVoiceStore();
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isVoiceChatActive, setIsVoiceChatActive] = useState(false);
  const [connections, setConnections] = useState<{ [key: string]: any }>({});
  const peerRef = useRef<Peer | null>(null);
  const myStreamRef = useRef<MediaStream | null>(null);
  const processedStreamRef = useRef<MediaStream | null>(null);
  const isVoiceChatActiveRef = useRef(false);
  const audioProcessingRef = useRef<AudioProcessingContext | null>(null);
  const socketHandlersRef = useRef<{
    emitJoinVoiceChat: (peerId: string) => void;
    emitLeaveVoiceChat: () => void;
    cleanup: () => void;
  } | null>(null);

  // Référence pour stocker les éléments audio de sortie
  const audioElementsRef = useRef<{ [key: string]: HTMLAudioElement }>({});

  const { isMuted, toggleMute } = useMute(myStreamRef);

  // Ajoutez ces fonctions avec useCallback
  const addAudioElement = useCallback(
    (peerId: string, stream: MediaStream) => {
      const audioElement = new Audio();
      audioElement.srcObject = stream;
      audioElement.autoplay = true;
      audioElement.volume = outputVolume; // Utilise la valeur au moment de la création

      audioElementsRef.current[peerId] = audioElement;
      return audioElement;
    },
    [outputVolume]
  );

  const removeAudioElement = useCallback((peerId: string) => {
    if (audioElementsRef.current[peerId]) {
      const audioElement = audioElementsRef.current[peerId];
      audioElement.pause();
      audioElement.srcObject = null;
      delete audioElementsRef.current[peerId];
    }
  }, []);

  // Effet pour gérer les événements de socket
  useEffect(() => {
    if (!socket || !roomId || !userId) return;

    const handlers = setupVoiceSocketHandlers({
      socket,
      userId,
      roomId,
      username,
      peerRef,
      processedStreamRef,
      setConnections,
      setSpeakingUsers,
      addAudioElement,
      removeAudioElement,
    });

    socketHandlersRef.current = handlers;

    return () => {
      handlers.cleanup();

      // Arrêter le chat vocal lors du démontage
      if (isVoiceChatActiveRef.current) {
        stopVoiceChat();
      }
    };
  }, [
    socket,
    roomId,
    userId,
    setSpeakingUsers,
    addAudioElement,
    removeAudioElement,
  ]);

  const startVoiceChat = async () => {
    try {
      // Demander l'accès au microphone
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      setStream(audioStream);
      myStreamRef.current = audioStream;

      // Configurer le traitement audio
      const audioProcessing = setupAudioProcessing(audioStream, inputVolume);
      audioProcessingRef.current = audioProcessing;
      processedStreamRef.current = audioProcessing.processedStream;

      // Initialiser PeerJS
      const peer = new Peer(`room${roomId}-user${userId}`);
      peerRef.current = peer;

      peer.on("open", (id) => {
        setIsVoiceChatActive(true);

        // Jouer le son de connexion
        playNotificationSound("join");

        // Informer les autres utilisateurs de votre ID peer
        if (socketHandlersRef.current) {
          socketHandlersRef.current.emitJoinVoiceChat(id);
        } else {
          // Fallback si les handlers ne sont pas disponibles
          socket?.emit("join-voice-chat", {
            roomId,
            userId,
            username,
            peerId: id,
          });
        }

        isVoiceChatActiveRef.current = true;

        toast({
          title: "Vous avez rejoint le chat vocal.",
          logo: <Icons.info />,
        });
      });

      peer.on("call", (call) => {
        // Répondre automatiquement aux appels entrants avec notre stream traité
        if (audioProcessing.processedStream) {
          call.answer(audioProcessing.processedStream);
        }

        call.on("stream", (remoteStream) => {
          // Créer un élément audio pour jouer le stream distant
          const audioElement = new Audio();
          audioElement.srcObject = remoteStream;
          audioElement.autoplay = true;
          audioElement.className = "hidden"; // Cacher l'élément audio
          audioElement.volume = outputVolume; // Appliquer le volume de sortie
          document.body.appendChild(audioElement);
        });

        // Sauvegarder la connexion
        setConnections((prev) => ({ ...prev, [call.peer]: call }));
      });

      peer.on("error", (err) => {
        console.error("Erreur PeerJS:", err);
        toast({
          title: "Erreur de connexion",
          description: "Problème avec la connexion audio.",
          variant: "destructive",
          logo: <Icons.alert />,
        });
      });
    } catch (error) {
      console.error("Erreur lors de l'accès au microphone:", error);
      toast({
        title: "Impossible d'accéder au microphone",
        description: "Veuillez vérifier vos permissions.",
        variant: "destructive",
        logo: <Icons.alert />,
      });
    }
  };

  const stopVoiceChat = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      myStreamRef.current = null;
      processedStreamRef.current = null;
    }

    // Fermer toutes les connexions
    Object.values(connections).forEach((conn) => {
      if (typeof conn.close === "function") {
        conn.close();
      }
    });
    setConnections({});

    // Fermer la connexion peer
    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }

    // Nettoyer le contexte audio
    if (audioProcessingRef.current) {
      cleanupAudioProcessing(audioProcessingRef.current);
      audioProcessingRef.current = null;
    }

    // Jouer le son de déconnexion
    if (isVoiceChatActive) {
      playNotificationSound("leave");
    }

    setIsVoiceChatActive(false);

    // Informer les autres utilisateurs que vous avez quitté le chat vocal
    if (socketHandlersRef.current) {
      socketHandlersRef.current.emitLeaveVoiceChat();
    } else {
      // Fallback si les handlers ne sont pas disponibles
      socket?.emit("leave-voice-chat", {
        roomId,
        userId,
        username,
      });
    }

    isVoiceChatActiveRef.current = false;

    // Supprimer tous les éléments audio cachés
    document.querySelectorAll("audio.hidden").forEach((el) => el.remove());

    toast({
      title: "Vous avez quitté le chat vocal.",
      logo: <Icons.info />,
    });
  };

  return {
    stream,
    isVoiceChatActive,
    isMuted,
    startVoiceChat,
    stopVoiceChat,
    toggleMute,
    addAudioElement,
    removeAudioElement,
  };
}
