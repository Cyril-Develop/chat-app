import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "@/types/store";

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      token: null,
      statut: "online",
      setToken: (token) => set({ token }),
      setStatut: (statut: "online" | "spy") => set({ statut }),
      logout: () => set({ token: null }),
    }),
    {
      name: "user-storage",
    }
  )
);
