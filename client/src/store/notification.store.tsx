import { create } from "zustand";
import { NotificationProps, UnreadMessagesProps } from "@/types/message";
import { FriendRequest } from "@/types/contact";
import {
  fetchUnreadPrivateMessages,
  markPrivateMessagesAsRead,
} from "@/services/Message";
import { getFriendRequests } from "@/services/User";

interface NotificationStore {
  messages: NotificationProps[];
  requests: NotificationProps[];
  addNotification: (notification: NotificationProps) => void;
  clearNotificationsForContact: (contactId: number) => void;
  clearRequestFromSender: (senderId: number) => void;
  initializeNotifications: (currentUserId: number) => Promise<void>;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  messages: [],
  requests: [],

  // Ajoute une notification dans le tableau approprié
  addNotification: (notification) =>
    set((state) => {
      if (notification.type === "message") {
        return { messages: [...state.messages, notification] };
      } else if (notification.type === "request") {
        return { requests: [...state.requests, notification] };
      }
      return state;
    }),

  // Initialisation des notifications (messages et demandes d'amis)
  initializeNotifications: async (currentUserId) => {
    try {
      const unreadMessages = await fetchUnreadPrivateMessages();
      const messageNotifications: NotificationProps[] = unreadMessages.map(
        (msg: UnreadMessagesProps) => ({
          type: "message",
          id: msg.id,
          receiver: {
            id: msg.receiver.id,
          },
          user: {
            id: msg.user.id,
            username: msg.user.username,
            gender: msg.user.gender,
            profileImage: msg.user.profileImage,
          },
        })
      );

      const receivedRequests = await getFriendRequests();
      const requestNotifications: NotificationProps[] = receivedRequests
        .filter(
          (request: FriendRequest) => request.receiver.id === currentUserId
        )
        .map((request: FriendRequest) => ({
          type: "request",
          id: request.id,
          receiver: {
            id: request.receiver.id,
          },
          sender: {
            id: request.sender.id,
            username: request.sender.username,
            gender: request.sender.gender,
            profileImage: request.sender.profileImage,
          },
        }));

      set({
        messages: messageNotifications,
        requests: requestNotifications,
      });
    } catch (error) {
      console.error(
        "Erreur lors de l'initialisation des notifications:",
        error
      );
      set({ messages: [], requests: [] });
    }
  },

  // Effacer les notifications pour un contact donné
  clearNotificationsForContact: async (contactId) => {
    try {
      await markPrivateMessagesAsRead(contactId);
      set((state) => ({
        messages: state.messages.filter(
          (notification) => notification.user.id !== contactId
        ),
      }));
    } catch (error) {
      console.error("Erreur lors de la mise à jour des messages lus:", error);
    }
  },

  // Effacer une demande d'ami d'un expéditeur donné
  clearRequestFromSender: (senderId) =>
    set((state) => ({
      requests: state.requests.filter(
        (notification) => notification.sender.id !== senderId
      ),
    })),
}));
