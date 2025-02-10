import { jwtDecode } from "jwt-decode";
import { io, Socket } from "socket.io-client";
import { create } from "zustand";

interface CustomPayload {
  id: number;
}

interface SocketStore {
  socket: Socket | null;
  statut: "online" | "spy";
  users: { userId: number; socketId: string; statut: "online" | "spy" }[];
  connectSocket: (token: string, statut: "online" | "spy") => void;
  disconnectSocket: () => void;
}

export const useSocketStore = create<SocketStore>((set) => {
  let socket = null as Socket | null;

  return {
    socket: null,
    statut: "online",
    users: [],
    connectSocket: (token, statut) => {
      if (socket) return;

      socket = io(import.meta.env.VITE_REACT_APP_SOCKET_URL, {
        auth: { token },
      });

      const decodedToken = jwtDecode<CustomPayload>(token);
      const userId = decodedToken.id;

      socket.on("connect", () => {
        socket?.emit("addUser", userId, statut);
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
