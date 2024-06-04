import { ThemeProvider } from "@/components/theme-provider";
import { useUserStore } from "@/store/user.store";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Messaging from "./pages/Messaging";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   const isConnected = useUserStore((state) => state.user) ? true : false;
//   return isConnected ? children : <Navigate to="/login" />;
// };

function App() {
  const user = useUserStore((state) => state.user);
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
          path: "/messaging",
          // element: (
          //   <PrivateRoute>
          //     <Messaging />
          //   </PrivateRoute>
          // ),
          element: user ? <Messaging /> : <Navigate to="/login" />,
        },
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
