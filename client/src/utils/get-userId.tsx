import { jwtDecode } from "jwt-decode";
import { useUserStore } from "@/store/user.store";

interface CustomPayload {
  id: number;
}

export const getUserId = () => {
  const { token } = useUserStore();
  if(!token) return;
  const decodedToken = jwtDecode<CustomPayload>(token || "");
  return decodedToken.id;
};
