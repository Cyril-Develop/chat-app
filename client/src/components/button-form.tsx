import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

interface ButtonFormProps {
  loading: boolean;
  disabled: boolean;
  defaultValue: string;
  spinnerValue: string;
}

const ButtonForm = ({
  loading,
  disabled,
  defaultValue,
  spinnerValue,
}: ButtonFormProps) => {
  return (
    <Button
      type="submit"
      size="lg"
      variant="default"
      className="text-button w-full"
      disabled={disabled || loading}
    >
      {loading ? (
        <p className="flex items-center gap-2">
          {spinnerValue} <Icons.spinner className="animate-spin" />{" "}
        </p>
      ) : (
        defaultValue
      )}
    </Button>
  );
};

export default ButtonForm;
