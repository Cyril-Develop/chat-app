export const JOIN_SOUND_URL = "/chat-app/sounds/join-vocal.wav";
export const LEAVE_SOUND_URL = "/chat-app/sounds/leave-vocal.wav";

export const playNotificationSound = (type: "join" | "leave") => {
  const soundUrl = type === "join" ? JOIN_SOUND_URL : LEAVE_SOUND_URL;
  const audio = new Audio(soundUrl);

  try {
    audio.currentTime = 0;
    audio.play().catch((err) => console.error("Erreur lecture son:", err));
  } catch (error) {
    console.error("Erreur lors de la lecture du son:", error);
  }
};
