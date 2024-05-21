import { Alert, AlertDescription } from "@/components/ui/alert";
import { useEffect, useState } from "react";

interface AlertCompProps {
  variant: "default" | "destructive" | "success";
  logo: JSX.Element;
  description: string;
  duration: number;
}

const AlertComp = ({
  variant,
  logo,
  description,
  duration,
}: AlertCompProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  return (
    <>
      {show && (
        <Alert
          variant={variant}
          className="w-auto flex items-center gap-2 absolute top-4"
        >
          <div>{logo}</div>
          <AlertDescription>{description}</AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default AlertComp;
