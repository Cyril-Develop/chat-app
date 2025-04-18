import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { Input } from "../ui/input";
import { ShowPassordProps } from "@/types/auth";
import { cn } from "@/lib/utils";

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
        id={field.name}
        aria-label="password"
        className={cn("form-input")}
      />
      <Button
        type="button"
        title={
          showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"
        }
        aria-label={
          showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"
        }
        variant="linkForm"
        className={cn(
          "absolute inset-y-0 right-0.5 flex items-center cursor-pointer "
        )}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Icons.eyeOff /> : <Icons.eye />}
      </Button>
    </div>
  );
};

export default ShowPassord;
