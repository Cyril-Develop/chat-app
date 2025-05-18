import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.store";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/chat-app/" />;
};

export default PrivateRoute;