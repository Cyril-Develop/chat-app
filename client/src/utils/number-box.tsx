export const NumberBox = ({ number }: { number: number }) => {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 text-white font-bold bg-primary rounded-md">
      {number}
    </span>
  );
};