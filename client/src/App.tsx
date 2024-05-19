import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";

//const connected = false;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

// const PrivateRoute = ({ children }) => {
//   if (connected) {
//     return children;
//   } else return <Login />;
// };

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout> <Outlet /> </Layout>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
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
