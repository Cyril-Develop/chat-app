import { useEffect, useRef } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useVoiceStore } from "@/store/voice.store";

interface VoiceDetectionProps {
  roomId: number;
  userId: number;
  stream: MediaStream;
}

// Fonction pour détecter si l'utilisateur parle ou non
const detectSpeaking = (
  analyser: AnalyserNode,
  dataArray: Uint8Array
): boolean => {
  analyser.getByteFrequencyData(dataArray);
  const volume = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
  const threshold = 15;
  return volume > threshold;
};

const VoiceDetection = ({ roomId, userId, stream }: VoiceDetectionProps) => {
  const analyserRef = useRef<AnalyserNode | null>(null);
  const speakingRef = useRef(false);
  const socket = useSocketStore((state) => state.socket);
  const setSpeakingUsers = useVoiceStore((state) => state.setSpeakingUsers);

  useEffect(() => {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    source.connect(analyser);
    analyserRef.current = analyser;

    const checkSpeaking = () => {
      if (!analyserRef.current) return;

      const isNowSpeaking = detectSpeaking(analyserRef.current, dataArray);

      if (isNowSpeaking !== speakingRef.current) {
        speakingRef.current = isNowSpeaking;

        // Mettre à jour le store
        setSpeakingUsers(userId, isNowSpeaking);

        // Émettre l'événement socket
        if (socket) {
          socket.emit(
            isNowSpeaking ? "user-speaking" : "user-stopped-speaking",
            {
              roomId,
              userId,
            }
          );
        } else {
          console.error("Socket is not available");
        }
      }

      requestAnimationFrame(checkSpeaking);
    };

    checkSpeaking();

    return () => {
      // Nettoyer lorsque le composant est démonté
      setSpeakingUsers(userId, false);
      analyser.disconnect();
      source.disconnect();

      if (audioContext.state === "running") {
        audioContext.close();
      }
    };
  }, [stream, roomId, userId, socket, setSpeakingUsers]);

  return null;
};

export default VoiceDetection;
