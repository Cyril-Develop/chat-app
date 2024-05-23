import { Link } from "react-router-dom";

interface BackButtonProps {
  label: string;
  href: string;
  text: string;
}

const BackButton = ({ label, href, text }: BackButtonProps) => {
  return (
    <div className="font-normal text-lg  w-full flex flex-col gap-1 justify-center items-center sm:flex-row">
      <p className="text-center">{text}</p>
      <Link to={href} className="link-form font-semibold">{label}</Link>
    </div>
  );
};

export default BackButton;
