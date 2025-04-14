import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  element: JSX.Element;
  role: string | undefined;
}

const AdminRoute = ({ element, role }: AdminRouteProps) => {
  if (role !== "ADMIN") {
    return <Navigate to="/chateo" />;
  }
  return element;
};

export default AdminRoute;
