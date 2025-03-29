import { create } from "zustand";
import { NotificationProps, UnreadMessagesProps } from "@/types/message";
import {
  fetchUnreadPrivateMessages,
  markPrivateMessagesAsRead,
} from "@/services/Message";

interface NotificationStore {
  notifications: NotificationProps[];
  addNotification: (message: NotificationProps) => void;
  clearNotificationsForContact: (contactId: number) => void;
  initializeNotifications: () => Promise<void>;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],

  addNotification: (message) =>
    set((state) => ({
      notifications: [...state.notifications, message],
    })),

  // Initialise les notifications depuis la base de données au chargement de l'application
  initializeNotifications: async () => {
    try {
      const unreadMessages = await fetchUnreadPrivateMessages();

      set({
        notifications: unreadMessages.map((msg: UnreadMessagesProps) => ({
          messageId: msg.id,
          senderId: msg.user.id,
          receiverId: msg.receiver.id,
        })),
      });
    } catch (error) {
      console.error(
        "Erreur lors de l'initialisation des notifications:",
        error
      );
      // En cas d'erreur, nous gardons les notifications vides
      set({ notifications: [] });
    }
  },

  // Efface les notifications pour un contact donné et met à jour la BDD
  clearNotificationsForContact: async (contactId) => {
    try {
      await markPrivateMessagesAsRead(contactId);
      set((state) => ({
        notifications: state.notifications.filter(
          (notification) => notification.senderId !== contactId
        ),
      }));
    } catch (error) {
      console.error("Erreur lors de la mise à jour des messages lus:", error);
    }
  },
}));
