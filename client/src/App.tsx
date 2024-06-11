import { ThemeProvider } from "@/components/theme-provider";
import { useUserStore } from "@/store/user.store";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Chat from "./pages/chat/Chat";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/settings/Profile";
import Account from "./pages/settings/Account";
import Notification from "./pages/settings/Notification";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

function App() {
  const token = useUserStore((state) => state.token);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        {
          path: "/chat",
          element: token ? <Chat /> : <Navigate to="/login" />,
        },
        {
          path: "/settings",
          element: token ? (
            <Settings>
              <Profile />
            </Settings>
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/settings/profile",
          element: token ? (
            <Settings>
              <Profile />
            </Settings>
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/settings/account",
          element: token ? (
            <Settings>
              <Account />
            </Settings>
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/settings/notifications",
          element: token ? (
            <Settings>
              <Notification />
            </Settings>
          ) : (
            <Navigate to="/login" />
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
