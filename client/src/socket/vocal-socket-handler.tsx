import { Icons } from "@/components/Icons";
import { playNotificationSound } from "@/components/stream/audio/sound-provider";
import { toast } from "@/components/ui/use-toast";
import { Socket } from "socket.io-client";

export interface VoiceSocketHandlersConfig {
  socket: Socket;
  userId: number;
  roomId: number;
  username: string | null;
  peerRef: React.MutableRefObject<any>;
  processedStreamRef: React.MutableRefObject<MediaStream | null>;
  setConnections: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  setSpeakingUsers: (userId: number, isSpeaking: boolean) => void;
  addAudioElement: (peerId: string, stream: MediaStream) => HTMLAudioElement;
  removeAudioElement: (peerId: string) => void;
}

export function setupVocalSocketHandlers({
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
}: VoiceSocketHandlersConfig) {
  // Gestionnaire d'événement pour quand un utilisateur rejoint le chat vocal
  const handleUserJoinedVocalChat = ({
    userId: joinedUserId,
    peerId,
    username: joinedUsername,
  }: any) => {
    // Ignorer si c'est nous-mêmes
    if (joinedUserId === userId) return;

    // Toujours jouer le son et afficher le toast, même si on n'est pas dans le vocal
    playNotificationSound("join");
    toast({
      title: `${joinedUsername} a rejoint le chat vocal.`,
      logo: <Icons.info />,
    });

    // Si on n'est pas dans le vocal, ne pas tenter de peer call
    if (!processedStreamRef.current || !peerRef.current) return;

    const call = peerRef.current.call(peerId, processedStreamRef.current);

    call.on("stream", (remoteStream: MediaStream) => {
      // Utiliser addAudioElement au lieu de créer un élément audio manuellement
      const audioElement = addAudioElement(peerId, remoteStream);

      // Stocker l'élément audio dans les connexions
      setConnections((prev) => ({
        ...prev,
        [peerId]: {
          ...prev[peerId],
          call,
          stream: remoteStream,
          audioElement,
        },
      }));
    });

    call.on("close", () => {
      removeAudioElement(peerId);

      setConnections((prev) => {
        const newConnections = { ...prev };
        delete newConnections[peerId];
        return newConnections;
      });

      // Marquer l'utilisateur comme ne parlant plus
      setSpeakingUsers(joinedUserId, false);
    });
  };

  // Gestionnaire d'événement pour la diffusion d'ID peer
  const handlePeerIdBroadcast = ({ userId: broadcastUserId, peerId }: any) => {
    if (
      broadcastUserId === userId ||
      !peerRef.current ||
      !processedStreamRef.current
    )
      return;

    // Appeler l'utilisateur existant avec notre stream traité
    const call = peerRef.current.call(peerId, processedStreamRef.current);

    call.on("stream", (remoteStream: MediaStream) => {
      // Utiliser addAudioElement au lieu de créer un élément audio manuellement
      const audioElement = addAudioElement(peerId, remoteStream);

      // Stocker l'élément audio dans les connexions
      setConnections((prev) => ({
        ...prev,
        [peerId]: {
          ...prev[peerId],
          call,
          stream: remoteStream,
          audioElement,
        },
      }));
    });

    call.on("close", () => {
      removeAudioElement(peerId);

      setConnections((prev) => {
        const newConnections = { ...prev };
        delete newConnections[peerId];
        return newConnections;
      });

      // Marquer l'utilisateur comme ne parlant plus
      setSpeakingUsers(broadcastUserId, false);
    });
  };

  // Gestionnaire d'événement pour quand un utilisateur quitte le chat vocal
  const handleUserLeftVocalChat = ({
    userId: leftUserId,
    username: leftUsername,
  }: any) => {
    // Jouer un son quand quelqu'un quitte
    playNotificationSound("leave");

    if (leftUsername) {
      toast({
        title: `${leftUsername} a quitté le chat vocal.`,
        logo: <Icons.info />,
      });
    }

    // Supprimer la connexion et l'élément audio si elle existe
    setConnections((prev) => {
      const newConnections = { ...prev };
      Object.keys(newConnections).forEach((key) => {
        if (key.includes(`user${leftUserId}`)) {
          // Nettoyer l'élément audio avant de supprimer la connexion
          removeAudioElement(key);
          delete newConnections[key];
        }
      });
      return newConnections;
    });
    // Marquer l'utilisateur comme ne parlant plus
    setSpeakingUsers(leftUserId, false);
  };

  // Gestionnaires d'événements pour le statut speaking
  const handleUserSpeaking = ({ userId: speakingUserId }: any) => {
    if (speakingUserId !== userId) {
      setSpeakingUsers(speakingUserId, true);
    }
  };

  const handleUserStoppedSpeaking = ({ userId: stoppedUserId }: any) => {
    if (stoppedUserId !== userId) {
      setSpeakingUsers(stoppedUserId, false);
    }
  };

  // Gérer les appels entrants
  peerRef.current?.on("call", (call: any) => {
    call.answer(processedStreamRef.current);

    call.on("stream", (remoteStream: MediaStream) => {

      // Utiliser addAudioElement
      const audioElement = addAudioElement(call.peer, remoteStream);

      setConnections((prev) => ({
        ...prev,
        [call.peer]: {
          ...prev[call.peer],
          call,
          stream: remoteStream,
          audioElement,
        },
      }));
    });

    call.on("close", () => {
      removeAudioElement(call.peer);

      setConnections((prev) => {
        const newConnections = { ...prev };
        delete newConnections[call.peer];
        return newConnections;
      });
    });
  });

  // Enregistrer les gestionnaires d'événements
  socket.on("user-joined-vocal", handleUserJoinedVocalChat);
  socket.on("user-left-vocal", handleUserLeftVocalChat);
  socket.on("peer-id-broadcast", handlePeerIdBroadcast);
  socket.on("user-speaking", handleUserSpeaking);
  socket.on("user-stopped-speaking", handleUserStoppedSpeaking);

  // Fonction pour émettre un événement de participation au chat vocal
  const emitJoinVocalChat = (peerId: string) => {
    socket.emit("join-vocal-chat", {
      roomId,
      userId,
      username,
      peerId,
    });
  };

  // Fonction pour émettre un événement de sortie du chat vocal
  const emitLeaveVocalChat = () => {
    socket.emit("leave-vocal-chat", {
      roomId,
      userId,
      username,
    });
  };

  // Fonction pour nettoyer les gestionnaires d'événements
  const cleanup = () => {
    socket.off("user-joined-vocal", handleUserJoinedVocalChat);
    socket.off("user-left-vocal", handleUserLeftVocalChat);
    socket.off("peer-id-broadcast", handlePeerIdBroadcast);
    socket.off("user-speaking", handleUserSpeaking);
    socket.off("user-stopped-speaking", handleUserStoppedSpeaking);
  };

  return {
    emitJoinVocalChat,
    emitLeaveVocalChat,
    cleanup,
  };
}
