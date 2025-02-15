import { Icons } from "./Icons";
import { Button } from "./ui/button";

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
      className="text-lg w-full sm:w-auto"
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
