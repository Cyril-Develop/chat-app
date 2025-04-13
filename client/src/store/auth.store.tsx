import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState } from "@/types/store";
import { isAuthenticated } from "@/services/User";

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      user: null,
      visible: true,

      // Définir l'état d'authentification lorsque l'utilisateur se connecte (isAuthenticated = true, userData = {id, role})
      setAuthentication: (isAuthenticated, userData) =>
        set({
          isAuthenticated,
          user: userData,
        }),

      setVisible: (visible) => set({ visible }),

      // Récupére l'état d'authentification de l'utilisateur actuel lorsque la page est actualisée
      initializeAuth: async () => {
        try {
          const response = await isAuthenticated();
          set({
            isAuthenticated: true,
            user: {
              id: response.user.id,
              role: response.user.role,
            },
          });
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
          });
        }
      },
    }),
    {
      name: "auth-storage",
      // Stocke uniquement l'état isAuthenticated dans localStorage
      partialize: (state) =>
        ({
          isAuthenticated: state.isAuthenticated,
          visible: state.visible,
        } as AuthState),
    }
  )
);
