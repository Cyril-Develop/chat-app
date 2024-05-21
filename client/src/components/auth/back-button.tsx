import { Link } from "react-router-dom";

interface BackButtonProps {
  label: string;
  href: string;
  text: string;
}

const BackButton = ({ label, href, text }: BackButtonProps) => {
  return (
    <div className="font-normal w-full flex flex-col gap-2 justify-center items-center sm:flex-row">
      <p>{text}</p>
      <Link to={href} className="link-form">{label}</Link>
    </div>
  );
};

export default BackButton;
