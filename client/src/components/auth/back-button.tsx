import { Link } from "react-router-dom";
import { BackButtonProps } from "@/types/auth";

const BackButton = ({ label, href, text }: BackButtonProps) => {
  return (
    <div className="font-normal text-sm md:text-base w-full flex flex-col justify-center items-center">
      <p className="text-center">{text}</p>
      <Link to={href} className="link-form font-semibold">
        {label}
      </Link>
    </div>
  );
};

export default BackButton;
