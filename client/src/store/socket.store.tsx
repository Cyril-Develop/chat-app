import { create } from "zustand";
import { io, Socket } from "socket.io-client";

interface SocketStore {
  socket: Socket | null;
  visible: boolean;
  users: { userId: number; socketId: string; visible: boolean }[];
  connectSocket: (visible: boolean) => void;
  disconnectSocket: () => void;
  visibleUsers: () => { userId: number; socketId: string; visible: boolean }[];
}

export const useSocketStore = create<SocketStore>((set, get) => {
  let socket = null as Socket | null;

  return {
    socket: null,
    visible: false,
    users: [],

    connectSocket: (visible) => {
      if (socket) return;

      socket = io(import.meta.env.VITE_REACT_APP_SOCKET_URL, {
        path: "/socket.io/",
        withCredentials: true,
        transports: ["websocket", "polling"],
      });

      socket.on("connect", () => {
        socket?.emit("addUser", visible);
      });

      socket.on("getUsers", (users) => {
        set({ users });
      });

      // Met à jour la visibilité d'un utilisateur en temps réel
      socket.on(
        "userStatusChanged",
        ({ userId, visible }: { userId: number; visible: boolean }) => {
          set((state) => ({
            users: state.users.map((user) =>
              user.userId === userId ? { ...user, visible } : user
            ),
          }));
        }
      );

      socket.on("disconnect", () => {
        socket = null;
      });

      set({ socket });
    },
    disconnectSocket: () => {
      socket?.disconnect();
      socket = null;
      set({ socket: null, users: [] });
    },

    visibleUsers: () => {
      return get().users.filter((user) => user.visible);
    },
  };
});
