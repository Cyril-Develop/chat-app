import { Navigate } from "react-router-dom";
import Home from "@/pages/home/Home";
import { useAuthStore } from "@/store/auth.store";

const RedirectOnAuth = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/chateo/chat" />;
  }

  return <Home />;
};

export default RedirectOnAuth;
