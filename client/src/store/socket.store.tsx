import { create } from "zustand";
import { io, Socket } from "socket.io-client";

interface SocketStore {
  socket: Socket | null;
  visible: boolean;
  users: { userId: number; socketId: string; visible: boolean }[];
  connectSocket: (visible: boolean) => void;
  disconnectSocket: () => void;
}

export const useSocketStore = create<SocketStore>((set) => {
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
  };
});
