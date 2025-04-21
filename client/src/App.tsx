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
import Appearance from "@/pages/settings/Appearance";
import Settings from "@/pages/settings/Settings";
import Stream from "@/pages/settings/Stream";
import { useAuthStore } from "@/store/auth.store";
import { ThemeProvider } from "@/theme/theme-provider";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "@/pages/contact/Contact";
import Password from "@/pages/password/Password";
import Terms from "@/pages/legal/Terms";
import { GlobalNotifications } from "@/components/Notification";
import { useGlobalNotifications } from "@/hooks/notification";
import { useSocketHandler } from "@/hooks/socket-handler";
import { AppInitializer } from "./components/app-initializer";
import CoockieBanner from "./components/coockie-banner";
import SpyIndicator from "@/components/indicator/spy-indicator";
import PrivateRoute from "@/components/routes/private-route";
import AdminRoute from "@/components/routes/admin-route";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useGlobalNotifications();
  return (
    <>
      <AppInitializer />
      <SpyIndicator />
      <CoockieBanner />
      <Navbar />
      {children}
      <GlobalNotifications />
    </>
  );
};

function App() {
  const role = useAuthStore((state) => state.user?.role);

  //********** SOCKET HANDLER **********/
  useSocketHandler();

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
        { path: "/chateo/terms", element: <Terms /> },
        {
          path: "/chateo/chat",
          element: <PrivateRoute element={<Chat />} />,
        },
        {
          path: "/chateo/settings",
          element: (
            <PrivateRoute
              element={
                <Settings>
                  <Profile />
                </Settings>
              }
            />
          ),
        },
        {
          path: "/chateo/settings/profile",
          element: (
            <PrivateRoute
              element={
                <Settings>
                  <Profile />
                </Settings>
              }
            />
          ),
        },
        {
          path: "/chateo/settings/appearance",
          element: (
            <PrivateRoute
              element={
                <Settings>
                  <Appearance />
                </Settings>
              }
            />
          ),
        },
        {
          path: "/chateo/settings/stream",
          element: (
            <PrivateRoute
              element={
                <Settings>
                  <Stream />
                </Settings>
              }
            />
          ),
        },
        {
          path: "/chateo/settings/account",
          element: (
            <PrivateRoute
              element={
                <Settings>
                  <Account />
                </Settings>
              }
            />
          ),
        },
        {
          path: "/chateo/settings/notifications",
          element: (
            <PrivateRoute
              element={
                <Settings>
                  <Notification />
                </Settings>
              }
            />
          ),
        },
        {
          path: "/chateo/settings/dashboard",
          element: (
            <AdminRoute
              element={
                <Settings>
                  <Dashboard />
                </Settings>
              }
              role={role}
            />
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
