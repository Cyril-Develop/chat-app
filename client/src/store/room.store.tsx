import { create } from "zustand";
import { persist } from "zustand/middleware";
import { RoomState } from "@/types/store";
import { UserInfos } from "@/types/user";

export const useRoomStore = create<RoomState>()(
  persist(
    (set) => ({
      room: null,
      setRoom: (room) => set({ room }),

      usersInRoom: [],
      setUsersInRoom: (users: UserInfos[]) => set({ usersInRoom: users }),

      updateUserInRoom: (updatedUser: Partial<UserInfos> & { id: number }) =>
        set((state) => ({
          usersInRoom: state.usersInRoom.map((user) =>
            user.id === updatedUser.id ? { ...user, ...updatedUser } : user
          ),
        })),
    }),
    {
      name: "room-storage",
      partialize: (state) => ({
        room: state.room,
      }),
    }
  )
);
