import { create } from "zustand";
import { persist } from "zustand/middleware";
import { RoomState } from "@/types/store";

export const useRoomStore = create(
  persist<RoomState>(
    (set) => ({
      room: null,
      setRoom: (room) => set({ room }),
    }),
    {
      name: "room-storage",
    }
  )
);
