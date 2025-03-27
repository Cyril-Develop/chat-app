import { create } from "zustand";
import { PrivateMessageProps } from "@/types/message";

interface NotificationStore {
  notifications: PrivateMessageProps[];
  addNotification: (message: PrivateMessageProps) => void;
  removeNotification: (messageId: number) => void;
  clearNotificationsForContact: (contactId: number) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],

  addNotification: (message) =>
    set((state) => ({
      notifications: [...state.notifications, message],
    })),

  removeNotification: (messageId) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== messageId
      ),
    })),

  clearNotificationsForContact: (contactId) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.user.id !== contactId
      ),
    })),
}));
