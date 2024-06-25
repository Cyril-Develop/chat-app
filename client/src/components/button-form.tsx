import { Icons } from "./Icons";
import { Button } from "./ui/button";

interface ButtonFormProps {
  loading: boolean;
  defaultValue: string;
  spinnerValue: string;
}

const ButtonForm = ({
  loading,
  defaultValue,
  spinnerValue,
}: ButtonFormProps) => {
  return (
    <Button
      type="submit"
      size="lg"
      variant="default"
      className="text-lg w-full sm:w-auto"
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
