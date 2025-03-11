import { Link } from "react-router-dom";
import { BackButtonProps } from "@/types/auth";

const BackButton = ({ label, href, text }: BackButtonProps) => {
  return (
    <div className="font-normal text-lg  w-full flex flex-col gap-1 justify-center items-center">
      <p className="text-center">{text}</p>
      <Link to={href} className="link-form font-semibold">
        {label}
      </Link>
    </div>
  );
};

export default BackButton;
