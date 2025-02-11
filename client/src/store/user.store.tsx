import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "@/types/store";

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      token: null,
      statut: "online",
      role: "USER",
      setToken: (token) => set({ token }),
      setRole: (role) => set({ role }),
      setStatut: (statut: "online" | "spy") => set({ statut }),
      logout: () => set({ token: null }),
    }),
    {
      name: "user-storage",
    }
  )
);
