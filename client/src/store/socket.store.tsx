
import { create } from "zustand";
import { io, Socket } from "socket.io-client";
import { useUserStore } from "./user.store";
import { jwtDecode } from "jwt-decode";

interface CustomPayload {
  id: number;
}

interface SocketStore {
  socket: Socket | null;
  onlineUsers: number[];
  connectSocket: (token: string) => void;
  disconnectSocket: () => void;
}

export const useSocketStore = create<SocketStore>((set) => {
  let socket = null as Socket | null;

  return {
    socket: null,
    onlineUsers: [],
    connectSocket: (token) => {
      if (socket) return;

      socket = io(import.meta.env.VITE_REACT_APP_SOCKET_URL, {
        auth: { token },
      });

      const decodedToken = jwtDecode<CustomPayload>(token); // Decode the token

      const userId = decodedToken.id; // Assume the token contains a userId field

      socket.on("connect", () => {
        console.log("Connected to server");
        socket?.emit("addNewUser", userId);
      });

      socket.on("getOnlineUsers", (users) => {
        set({ onlineUsers: users });
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from server");
        socket = null;
      });

      set({ socket });
    },
    disconnectSocket: () => {
      if (socket) {
        socket.disconnect();
        socket = null;
        set({ socket: null, onlineUsers: [] });
      }
    },
  };
});
