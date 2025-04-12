import { AuthHeaderProps } from "@/types/auth";

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-1 items-center justify-center">
      <h1 className="text-title">{title}</h1>
      <p className="text-center text-description-form">{description}</p>
    </div>
  );
};

export default AuthHeader;
