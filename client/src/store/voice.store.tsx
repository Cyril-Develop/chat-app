import { create } from "zustand";
import { persist } from "zustand/middleware";

interface VoiceSettingsState {
  inputVolume: number;
  setInputVolume: (volume: number) => void;
  outputVolume: number;
  setOutputVolume: (volume: number) => void;
  speakingUsers: { [key: number]: boolean };
  setSpeakingUsers: (userId: number, isSpeaking: boolean) => void;
}

export const useVoiceStore = create<VoiceSettingsState>()(
  persist(
    (set) => ({
      inputVolume: 0.5,
      setInputVolume: (inputVolume) => set({ inputVolume }),
      outputVolume: 0.5,
      setOutputVolume: (outputVolume) => set({ outputVolume }),

      // Liste des utilisateurs qui parlent
      speakingUsers: {},
      setSpeakingUsers: (userId: number, isSpeaking: boolean) =>
        set((state) => ({
          speakingUsers: {
            ...state.speakingUsers,
            [userId]: isSpeaking,
          },
        })),
    }),
    {
      name: "voice-settings",
      partialize: (state) => ({
        inputVolume: state.inputVolume,
        outputVolume: state.outputVolume,
      }),
    }
  )
);
