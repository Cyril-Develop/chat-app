import { useEffect, useState } from "react";
import { useSocketStore } from "@/store/socket.store";
import useGetUserById from "@/hooks/get-user-by-id";
import useGetPrivateMessage from "@/hooks/get-private-messages";
import { PrivateMessageProps } from "@/types/message";

export const usePrivateChat = (contactId: number) => {
  const { data: fetchedContactInfos } = useGetUserById(contactId);
  const { data: privateMessages } = useGetPrivateMessage(contactId);
  const [contactData, setContactData] = useState(fetchedContactInfos);
  const [messages, setMessages] = useState<PrivateMessageProps[]>([]);
  const { socket } = useSocketStore();

  useEffect(() => {
    if (fetchedContactInfos) setContactData(fetchedContactInfos);
  }, [fetchedContactInfos]);

  useEffect(() => {
    if (privateMessages) setMessages(privateMessages);
  }, [privateMessages]);

  // Fonction pour gérer un nouveau message reçu
  const handleGetMessage = (data: PrivateMessageProps) => {
    setMessages((prev) => [...prev, data]);
  };

  // Fonction pour mettre à jour les infos du contact
  const handleUpdatedUserInfos = (user: any) => {
    if (user.id === contactId) setContactData(user);
  };

  // Fonction pour supprimer un message de la liste
  const handleDeleteMessage = (messageId: number) => {
    setMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.id !== messageId)
    );
  };

  // Gestion des événements Socket
  useEffect(() => {
    socket?.on("updatedUserInfos", handleUpdatedUserInfos);
    socket?.on("getPrivateMessage", handleGetMessage);
    socket?.on("deletePrivateMessage", handleDeleteMessage);

    return () => {
      socket?.off("updatedUserInfos", handleUpdatedUserInfos);
      socket?.off("getPrivateMessage", handleGetMessage);
      socket?.off("deletePrivateMessage", handleDeleteMessage);
    };
  }, [socket]);

  return { contactData, messages, isLoading: !fetchedContactInfos };
};