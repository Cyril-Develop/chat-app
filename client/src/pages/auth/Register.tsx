import RegisterForm from "@/components/auth/register-form";
import Storyset from "@/components/storyset";
import Logo from "@/assets/Login-pana.svg";

const Register = () => {
  return (
    <div className="flex justify-center items-center sm:h-[calc(100vh-81px)] px-2 relative py-2">
      <RegisterForm />
      <Storyset logo={Logo} />
    </div>
  );
};

export default Register;
