import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface ShowPassordProps {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}

const ShowPassord = ({ showPassword, setShowPassword }: ShowPassordProps) => {
  return (
    <Button
      type="button"
      variant="toggle"
      className="absolute right-0 h-auto  top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EyeOff /> : <Eye />}
    </Button>
  );
};

export default ShowPassord;
