interface StorysetProps {
  logo: string;
}

const Storyset = ({ logo }: StorysetProps) => {
  return (
    <a href="https://storyset.com/online" className="cursor-auto">
      <img src={logo} alt="" className="h-96" />
    </a>
  );
};

export default Storyset;
