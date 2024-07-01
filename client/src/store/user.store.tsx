import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "@/types/types";

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      token: null,
      statut: "online",
      setToken: (token: string) => set({ token }),
      setStatut: (statut: "online" | "busy" | "away") => set({ statut }),
      logout: () => set({ token: null }),
    }),
    {
      name: "user-storage",
    }
  )
);
