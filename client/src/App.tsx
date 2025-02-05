import { ThemeProvider } from "@/components/theme-provider";
import { useUserStore } from "@/store/user.store";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Chat from "./pages/chat/Chat";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/settings/Profile";
import Account from "./pages/settings/Account";
import Notification from "./pages/settings/Notification";
import { useSocketStore } from "@/store/socket.store";
import { useEffect } from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

function App() {
  const { token, statut} = useUserStore((state) => state);
  const { connectSocket, disconnectSocket } = useSocketStore();

  useEffect(() => {
    if (token) {
      connectSocket(token, statut);
    } else {
      disconnectSocket();
    }
  }, [token, connectSocket, disconnectSocket]);

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
        {
          path: "/chateo/chat",
          element: token ? <Chat /> : <Navigate to="/chateo/login" />,
        },
        {
          path: "/chateo/settings",
          element: token ? (
            <Settings>
              <Profile />
            </Settings>
          ) : (
            <Navigate to="/chateo/login" />
          ),
        },
        {
          path: "/chateo/settings/profile",
          element: token ? (
            <Settings>
              <Profile />
            </Settings>
          ) : (
            <Navigate to="/chateo/login" />
          ),
        },
        {
          path: "/chateo/settings/account",
          element: token ? (
            <Settings>
              <Account />
            </Settings>
          ) : (
            <Navigate to="/chateo/login" />
          ),
        },
        {
          path: "/chateo/settings/notifications",
          element: token ? (
            <Settings>
              <Notification />
            </Settings>
          ) : (
            <Navigate to="/chateo/login" />
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
