import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "@/types/types";

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      token: "",
      setUserToken: (token) => set({ token }),
      logout: () => set({ token: "" }),
    }),
    {
      name: "user-storage",
    }
  )
);
