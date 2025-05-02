import { logout } from "@/services/Auth";
import { useAuthStore } from "@/store/auth.store";
import { useQueryClient } from "@tanstack/react-query";

export const useHandleLogout = () => {
  const queryClient = useQueryClient();
  const setAuthentication = useAuthStore((state) => state.setAuthentication);

  const handleLogout = async () => {
    try {
      // Attendre que la requête de déconnexion soit terminée
      await logout();

      // Puis procéder aux autres opérations
      setAuthentication(false, null);
      queryClient.clear();
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return handleLogout;
};
