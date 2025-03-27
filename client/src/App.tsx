import Navbar from "@/components/navbar/Navbar";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Chat from "@/pages/chat/Chat";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/NotFound";
import Account from "@/pages/settings/Account";
import Dashboard from "@/pages/settings/Dashboard";
import Notification from "@/pages/settings/Notification";
import Profile from "@/pages/settings/Profile";
import Settings from "@/pages/settings/Settings";
import { useAuthStore } from "@/store/auth.store";
import { useSocketStore } from "@/store/socket.store";
import { ThemeProvider } from "@/theme/theme-provider";
import { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Contact from "@/pages/contact/Contact";
import Password from "@/pages/password/Password";
import { GlobalNotifications } from "@/components/Notification";
import { useGlobalNotifications } from "@/hooks/notification";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Afficher les notifications peu importe la page
  useGlobalNotifications();
  return (
    <>
      <Navbar />
      {children}
      <GlobalNotifications />
    </>
  );
};

function App() {
  const { connectSocket, disconnectSocket } = useSocketStore();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const visible = useAuthStore((state) => state.visible);
  const role = useAuthStore((state) => state.user?.role);

  // Get current user id , role and check if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      initializeAuth();
    }
  }, [initializeAuth]);

  // Connect or disconnect socket based on authentication status
  useEffect(() => {
    if (isAuthenticated) {
      connectSocket(visible);
    } else {
      disconnectSocket();
    }
  }, [isAuthenticated, connectSocket, disconnectSocket]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        { path: "/chateo", element: <Home /> },
        { path: "/chateo/register", element: <Register /> },
        { path: "/chateo/login", element: <Login /> },
        { path: "/chateo/reset-password/:token", element: <Password /> },
        { path: "/chateo/contact", element: <Contact /> },
        {
          path: "/chateo/chat",
          element: isAuthenticated ? <Chat /> : <Navigate to="/chateo/login" />,
        },
        {
          path: "/chateo/settings",
          element: isAuthenticated ? (
            <Settings>
              <Profile />
            </Settings>
          ) : (
            <Navigate to="/chateo/login" />
          ),
        },
        {
          path: "/chateo/settings/profile",
          element: isAuthenticated ? (
            <Settings>
              <Profile />
            </Settings>
          ) : (
            <Navigate to="/chateo/login" />
          ),
        },
        {
          path: "/chateo/settings/account",
          element: isAuthenticated ? (
            <Settings>
              <Account />
            </Settings>
          ) : (
            <Navigate to="/chateo/login" />
          ),
        },
        {
          path: "/chateo/settings/notifications",
          element: isAuthenticated ? (
            <Settings>
              <Notification />
            </Settings>
          ) : (
            <Navigate to="/chateo/login" />
          ),
        },
        {
          path: "/chateo/settings/dashboard",
          element:
            isAuthenticated && role === "ADMIN" ? (
              <Settings>
                <Dashboard />
              </Settings>
            ) : (
              <Navigate to="/chateo" />
            ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
