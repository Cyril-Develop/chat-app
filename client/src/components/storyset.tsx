interface StorysetProps {
  logo: string;
}

const Storyset = ({ logo }: StorysetProps) => {
  return <img src={logo} alt="" className="h-full sm:px-6 sm:pl-0  flex-1" />;
};

export default Storyset;
