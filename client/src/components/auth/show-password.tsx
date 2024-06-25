import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { Input } from "../ui/input";

interface ShowPassordProps {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
  field: {
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
}

const ShowPassord = ({
  showPassword,
  setShowPassword,
  field,
}: ShowPassordProps) => {
  return (
    <div className="relative">
      <Input
        {...field}
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
      />
      <Button
        type="button"
        aria-label={
          showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"
        }
        variant="linkForm"
        className="absolute right-0.5 h-auto  top-1/2 transform -translate-y-1/2 cursor-pointer "
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Icons.eyeOff /> : <Icons.eye />}
      </Button>
    </div>
  );
};

export default ShowPassord;
