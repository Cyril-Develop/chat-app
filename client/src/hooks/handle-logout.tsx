import { logout } from "@/services/Auth";
import { useAuthStore } from "@/store/auth.store";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useHandleLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setAuthentication } = useAuthStore();

  const handleLogout = async () => {
    logout();
    setAuthentication(false, null);
    queryClient.clear();
    navigate("/chateo/login");
  };

  return handleLogout;
};
