import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

interface ButtonFormProps {
  loading: boolean;
  disabled: boolean;
  defaultValue: string;
  spinnerValue: string;
  variant?: "default" | "destructive" | "outline" | "secondary";
}

const ButtonForm = ({
  loading,
  disabled,
  defaultValue,
  spinnerValue,
  variant = "default",
}: ButtonFormProps) => {
  return (
    <Button
      type="submit"
      size="lg"
      variant={variant}
      className="text-button w-full"
      disabled={disabled || loading}
    >
      {loading ? (
        <p className="flex items-center gap-2">
          {spinnerValue} <Icons.loader className="animate-spin" />{" "}
        </p>
      ) : (
        defaultValue
      )}
    </Button>
  );
};

export default ButtonForm;
