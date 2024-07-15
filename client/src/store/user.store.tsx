import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "@/types/types";

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      token: null,
      statut: "online",
      setStatut: (statut: "online" |"spy") => set({ statut }),
      setToken: (token: string) => set({ token }),
      logout: () => set({ token: null }),
    }),
    {
      name: "user-storage",
    }
  )
);