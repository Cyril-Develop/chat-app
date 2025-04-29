import { logout } from "@/services/Auth";
import { useAuthStore } from "@/store/auth.store";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useHandleLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();

  const handleLogout = async () => {
    try {
      // Attendre que la requête de déconnexion soit terminée
      await logout();

      // Puis procéder aux autres opérations
      setAuthentication(false, null);
      queryClient.clear();
      navigate("/chateo/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return handleLogout;
};
