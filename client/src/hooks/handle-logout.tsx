import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";
import { logout } from "@/services/Auth";
import { useQueryClient } from "@tanstack/react-query";

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
