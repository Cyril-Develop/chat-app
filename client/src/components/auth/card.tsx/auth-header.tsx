import { AuthHeaderProps } from "@/types/auth";

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-1 items-center justify-center">
      <h2 className="text-title md:text-4xl">{title}</h2>
      <p className="text-center text-paragraph md:text-xl">{description}</p>
    </div>
  );
};

export default AuthHeader;
