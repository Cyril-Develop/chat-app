import Navbar from "@/components/navbar/Navbar";
import Auth from "@/pages/auth/Auth";
import Chat from "@/pages/chat/Chat";
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
import { GlobalNotifications } from "@/components/notification/Notification";
import { useGlobalNotifications } from "@/hooks/notification";
import { useSocketHandler } from "@/socket/socket-handler";
import { AppInitializer } from "./components/app-initializer";
import CoockieBanner from "./components/coockie-banner";
import SpyIndicator from "@/components/indicator/spy-indicator";
import PrivateRoute from "@/components/routes/private-route";
import AdminRoute from "@/components/routes/admin-route";
import InstallAppButton from "@/components/install-app-button";
import NotificationTitleUpdater from "@/components/notification/title-updater";
import RedirectOnAuth from "@/components/routes/redirect-route";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useGlobalNotifications();
  return (
    <>
      <NotificationTitleUpdater />
      <InstallAppButton />
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
        { path: "/chat-app", element: <RedirectOnAuth /> },
        { path: "/chat-app/auth", element: <Auth /> },
        { path: "/chat-app/reset-password/:token", element: <Password /> },
        { path: "/chat-app/contact", element: <Contact /> },
        { path: "/chat-app/terms", element: <Terms /> },
        {
          path: "/chat-app/chat",
          element: <PrivateRoute element={<Chat />} />,
        },
        {
          path: "/chat-app/settings",
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
          path: "/chat-app/settings/profile",
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
          path: "/chat-app/settings/appearance",
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
          path: "/chat-app/settings/stream",
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
          path: "/chat-app/settings/account",
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
          path: "/chat-app/settings/notifications",
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
          path: "/chat-app/settings/dashboard",
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
