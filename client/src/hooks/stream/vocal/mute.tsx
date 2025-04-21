import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";

export const useMute = (myStreamRef: React.RefObject<MediaStream | null>) => {
  const [isMuted, setIsMuted] = useState(false);

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

  return {
    isMuted,
    toggleMute,
  };
};
