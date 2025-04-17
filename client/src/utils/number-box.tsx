export const NumberBox = ({ number }: { number: number }) => {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 text-base text-white font-bold bg-primary rounded-md">
      {number}
    </span>
  );
};
