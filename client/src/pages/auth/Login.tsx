import LoginForm from "@/components/auth/login-form";
import Navbar from "@/components/Navbar";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default Login;
