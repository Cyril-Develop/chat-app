import LoginForm from "@/components/auth/login-form";

const Login = () => {
  return (
    <div className="bg-primary dark:bg-secondary flex justify-center items-center sm:h-[calc(100vh-96px)] px-2 relative py-2">
      <LoginForm />
    </div>
  );
};

export default Login;
