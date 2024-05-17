import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BackButtonProps {
  label: string;
  href: string;
  text: string;
}

const BackButton = ({ label, href, text }: BackButtonProps) => {
  return (
    <div className="font-normal w-full flex justify-center items-center">
      <p>{text}</p>
      <Button variant="link" size="sm">
        <Link to={href}>{label}</Link>
      </Button>
    </div>
  );
};

export default BackButton;
