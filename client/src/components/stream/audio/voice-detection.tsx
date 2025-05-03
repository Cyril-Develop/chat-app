import { useEffect, useRef } from "react";
import { useSocketStore } from "@/store/socket.store";
import { useVoiceStore } from "@/store/voice.store";

interface VoiceDetectionProps {
  roomId: number;
  userId: number;
  stream: MediaStream;
}

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
  const frameRef = useRef<number | null>(null);
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

        setSpeakingUsers(userId, isNowSpeaking);

        if (socket) {
          socket.emit(
            isNowSpeaking ? "user-speaking" : "user-stopped-speaking",
            {
              roomId,
              userId,
            }
          );
        }
      }

      frameRef.current = requestAnimationFrame(checkSpeaking);
    };

    checkSpeaking();

    return () => {
      // Arrêter la boucle de détection
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      // Réinitialiser les états
      setSpeakingUsers(userId, false);
      if (socket) {
        socket.emit("user-stopped-speaking", { roomId, userId });
      }

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
