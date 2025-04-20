import { useSocketStore } from "@/store/socket.store";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useRef, useState } from "react";
import { Peer } from "peerjs";
import VoiceDetection from "@/components/voice/voice-detection";

const JOIN_SOUND_URL = "/chateo/sounds/join-vocal.wav";
const LEAVE_SOUND_URL = "/chateo/sounds/leave-vocal.wav";

interface VoiceChatProps {
  roomId: number | null;
  username: string | null;
  userId: number | null;
}

const VoiceChat = ({ roomId, username, userId }: VoiceChatProps) => {
  const { socket } = useSocketStore();

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isVoiceChatActive, setIsVoiceChatActive] = useState(false);
  const [connections, setConnections] = useState<{ [key: string]: any }>({});
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [volume, setVolume] = useState(1); // 100% volume par défaut
  const [isMuted, setIsMuted] = useState(false);

  const peerRef = useRef<Peer | null>(null);
  const myStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const destinationRef = useRef<MediaStreamAudioDestinationNode | null>(null);
  const processedStreamRef = useRef<MediaStream | null>(null);
  const joinSoundRef = useRef<HTMLAudioElement | null>(null);
  const leaveSoundRef = useRef<HTMLAudioElement | null>(null);
  const isVoiceChatActiveRef = useRef(false);

  // Initialiser les sons de notification
  useEffect(() => {
    joinSoundRef.current = new Audio(JOIN_SOUND_URL);
    leaveSoundRef.current = new Audio(LEAVE_SOUND_URL);

    return () => {
      joinSoundRef.current = null;
      leaveSoundRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!socket || !roomId || !userId) return;

    // Configurer les événements de socket pour le chat vocal
    socket.on("user-joined-voice", handleUserJoinedVoice);
    socket.on("user-left-voice", handleUserLeftVoice);
    socket.on("peer-id-broadcast", handlePeerIdBroadcast);

    return () => {
      // Nettoyer les événements
      socket.off("user-joined-voice", handleUserJoinedVoice);
      socket.off("user-left-voice", handleUserLeftVoice);
      socket.off("peer-id-broadcast", handlePeerIdBroadcast);

      // Arrêter le chat vocal lors du démontage
      if (isVoiceChatActiveRef.current) {
        stopVoiceChat();
      }
    };
  }, [socket, roomId, userId]);

  // Effet pour gérer le changement de volume
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume;
    }
  }, [volume]);

  // Fonction pour jouer un son de notification
  const playNotificationSound = (type: "join" | "leave") => {
    try {
      if (type === "join" && joinSoundRef.current) {
        joinSoundRef.current.currentTime = 0;
        joinSoundRef.current
          .play()
          .catch((err) => console.error("Erreur lecture son:", err));
      } else if (type === "leave" && leaveSoundRef.current) {
        leaveSoundRef.current.currentTime = 0;
        leaveSoundRef.current
          .play()
          .catch((err) => console.error("Erreur lecture son:", err));
      }
    } catch (error) {
      console.error("Erreur lors de la lecture du son:", error);
    }
  };

  //Mute / Unmute microphone
  const toggleMute = () => {
    if (myStreamRef.current) {
      myStreamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMuted((prev) => !prev);
      toast({
        title: isMuted ? "Microphone réactivé" : "Microphone coupé",
        logo: <Icons.info />,
      });
    }
  };

  // Fonction pour initialiser le traitement audio
  const setupAudioProcessing = (audioStream: MediaStream) => {
    // Créer un nouveau AudioContext
    const audioContext = new AudioContext();
    audioContextRef.current = audioContext;

    // Créer les nœuds audio
    const source = audioContext.createMediaStreamSource(audioStream);
    sourceNodeRef.current = source;

    const gainNode = audioContext.createGain();
    gainNodeRef.current = gainNode;
    gainNode.gain.value = volume;

    const destination = audioContext.createMediaStreamDestination();
    destinationRef.current = destination;

    // Connecter les nœuds
    source.connect(gainNode);
    gainNode.connect(destination);

    // Utiliser le stream traité
    processedStreamRef.current = destination.stream;

    return destination.stream;
  };

  const startVoiceChat = async () => {
    try {
      // Demander l'accès au microphone
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setStream(audioStream);
      myStreamRef.current = audioStream;

      // Configurer le traitement audio
      const processedStream = setupAudioProcessing(audioStream);

      // Initialiser PeerJS
      const peer = new Peer(`room${roomId}-user${userId}`);
      peerRef.current = peer;

      peer.on("open", (id) => {
        setIsVoiceChatActive(true);
        setShowVolumeControl(true);

        // Jouer le son de connexion
        playNotificationSound("join");

        // Informer les autres utilisateurs de votre ID peer
        socket?.emit("join-voice-chat", {
          roomId,
          userId,
          username,
          peerId: id,
        });

        isVoiceChatActiveRef.current = true;

        toast({
          title: "Vous avez rejoint le chat vocal",
          logo: <Icons.info />,
        });
      });

      peer.on("call", (call) => {
        // Répondre automatiquement aux appels entrants avec notre stream traité
        call.answer(processedStream);

        call.on("stream", (remoteStream) => {
          // Créer un élément audio pour jouer le stream distant
          const audioElement = new Audio();
          audioElement.srcObject = remoteStream;
          audioElement.autoplay = true;
          audioElement.className = "hidden"; // Cacher l'élément audio
          document.body.appendChild(audioElement);
        });

        // Sauvegarder la connexion
        setConnections((prev) => ({ ...prev, [call.peer]: call }));
      });

      peer.on("error", (err) => {
        console.error("Erreur PeerJS:", err);
        toast({
          title: "Erreur de connexion",
          description: "Problème avec la connexion audio",
          variant: "destructive",
          logo: <Icons.alert />,
        });
      });
    } catch (error) {
      console.error("Erreur lors de l'accès au microphone:", error);
      toast({
        title: "Impossible d'accéder au microphone",
        description: "Veuillez vérifier vos permissions",
        variant: "destructive",
        logo: <Icons.alert />,
      });
    }
  };

  const handleUserJoinedVoice = ({
    userId: joinedUserId,
    peerId,
    username: joinedUsername,
  }: any) => {
    // Ignorer si c'est nous-mêmes
    if (joinedUserId === userId) return;

    // Toujours jouer le son et afficher le toast, même si on n'est pas dans le vocal
    playNotificationSound("join");
    toast({
      title: `${joinedUsername} a rejoint le chat vocal`,
      logo: <Icons.info />,
    });

    // Si on n'est pas dans le vocal, ne pas tenter de peer call
    if (!processedStreamRef.current || !peerRef.current) return;

    console.log("User joined voice:", joinedUserId, peerId, joinedUsername);

    const call = peerRef.current.call(peerId, processedStreamRef.current);

    call.on("stream", (remoteStream) => {
      const audioElement = new Audio();
      audioElement.srcObject = remoteStream;
      audioElement.autoplay = true;
      audioElement.className = "hidden";
      document.body.appendChild(audioElement);
    });

    setConnections((prev) => ({ ...prev, [peerId]: call }));
  };

  const handlePeerIdBroadcast = ({ userId: broadcastUserId, peerId }: any) => {
    if (
      broadcastUserId === userId ||
      !peerRef.current ||
      !processedStreamRef.current
    )
      return;

    // Appeler l'utilisateur existant avec notre stream traité
    const call = peerRef.current.call(peerId, processedStreamRef.current);

    call.on("stream", (remoteStream) => {
      // Créer un élément audio pour jouer le stream distant
      const audioElement = new Audio();
      audioElement.srcObject = remoteStream;
      audioElement.autoplay = true;
      audioElement.className = "hidden"; // Cacher l'élément audio
      document.body.appendChild(audioElement);
    });

    // Sauvegarder la connexion
    setConnections((prev) => ({ ...prev, [peerId]: call }));
  };

  const handleUserLeftVoice = ({
    userId: leftUserId,
    username: leftUsername,
  }: any) => {
    // Jouer un son quand quelqu'un quitte
    playNotificationSound("leave");

    if (leftUsername) {
      toast({
        title: `${leftUsername} a quitté le chat vocal`,
        logo: <Icons.info />,
      });
    }

    // Supprimer la connexion si elle existe
    const newConnections = { ...connections };
    Object.keys(newConnections).forEach((key) => {
      if (key.includes(`user${leftUserId}`)) {
        delete newConnections[key];
      }
    });
    setConnections(newConnections);
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
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close();
      audioContextRef.current = null;
      gainNodeRef.current = null;
      sourceNodeRef.current = null;
      destinationRef.current = null;
    }

    // Jouer le son de déconnexion
    if (isVoiceChatActive) {
      playNotificationSound("leave");
    }

    setIsVoiceChatActive(false);
    setShowVolumeControl(false);

    // Informer les autres utilisateurs que vous avez quitté le chat vocal
    if (socket && roomId && userId) {
      socket.emit("leave-voice-chat", {
        roomId,
        userId,
        username,
      });
    }

    isVoiceChatActiveRef.current = false;

    // Supprimer tous les éléments audio cachés
    document.querySelectorAll("audio.hidden").forEach((el) => el.remove());

    toast({
      title: "Vous avez quitté le chat vocal",
      logo: <Icons.info />,
    });
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0]);
  };

  const startVideoChat = async () => {
    toast({
      title: "Fonction non implémentée",
      description: "Le chat vidéo sera disponible prochainement",
      logo: <Icons.info />,
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex gap-4">
        <Button
          variant="secondary"
          title="Démarrer le chat vidéo"
          onClick={startVideoChat}
        >
          <Icons.video width={22} height={22} />
        </Button>
        <Button
          variant="secondary"
          title="paramètres audio"
          onClick={() => {
            toast({
              title: "Fonction non implémentée",
              description:
                "Les paramètres audio seront disponibles prochainement",
              logo: <Icons.info />,
            });
          }}
        >
          <Icons.settings width={22} height={22} />
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

      {/* VOLUME CONTROL */}
      {showVolumeControl && (
        <div className="flex items-center gap-2 mt-2 w-full">
          <Icons.volumeDown width={18} height={18} />
          <Slider
            defaultValue={[1.0]}
            max={2}
            step={0.1}
            value={[volume]}
            onValueChange={handleVolumeChange}
            className="w-full cursor-pointer"
          />
          <Icons.volumeUp width={18} height={18} />
        </div>
      )}

      {/* VOICE DETECTION */}
      {isVoiceChatActive && stream && userId && roomId && (
        <VoiceDetection stream={stream} userId={userId} roomId={roomId} />
      )}
    </div>
  );
};

export default VoiceChat;
