import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "@/types/types";

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      useSetUser: (user) => set({ user }),
      useLogout: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    }
  )
);
