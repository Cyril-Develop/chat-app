import { useEffect, useRef } from "react";
import { useSocketStore } from "@/store/socket.store";

interface VoiceDetectionProps {
  roomId: number;
  userId: number;
  stream: MediaStream;
}

const VoiceDetection = ({ roomId, userId, stream }: VoiceDetectionProps) => {
  const analyserRef = useRef<AnalyserNode | null>(null);
  const speakingRef = useRef(false);
  const { socket } = useSocketStore();

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

      analyser.getByteFrequencyData(dataArray);
      const volume = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

      const threshold = 15;
      const isNowSpeaking = volume > threshold;

      if (isNowSpeaking !== speakingRef.current) {
        speakingRef.current = isNowSpeaking;
        socket?.emit(
          isNowSpeaking ? "user-speaking" : "user-stopped-speaking",
          {
            roomId,
            userId,
          }
        );
      }

      requestAnimationFrame(checkSpeaking);
    };

    checkSpeaking();

    return () => {
      analyser.disconnect();
      source.disconnect();
      audioContext.close();
    };
  }, [stream, roomId, userId, socket]);

  return null;
};

export default VoiceDetection;
