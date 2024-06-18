import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

interface ChatRoomProps {
  roomId: string;
  password: string;
}

const ChatRoom = ({ roomId, password }: ChatRoomProps) => {
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    // Rejoindre le salon
    socket.emit("joinRoom", { roomId, password });

    // Recevoir la confirmation de la connexion au salon
    socket.on("joinedRoom", (chatRoom) => {
      setRoom(chatRoom);
    });

    // Recevoir la liste des utilisateurs
    socket.on("userList", (userList) => {
      setUsers(userList);
    });

    // Recevoir les messages d'erreur
    socket.on("error", (message) => {
      console.error("Error:", message);
    });

    // Nettoyage à la déconnexion
    return () => {
      socket.emit("leaveRoom", roomId);
      socket.off("joinedRoom");
      socket.off("userList");
      socket.off("error");
    };
  }, [roomId, password]);

  return (
    <div>
      <h1>Chat Room: {room ? room.name : "Loading..."}</h1>
      <h2>Users in room:</h2>
      <ul>
        {users.map((userId, index) => (
          <li key={index}>{userId}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoom;
