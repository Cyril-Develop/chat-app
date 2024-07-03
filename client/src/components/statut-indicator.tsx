interface StatutIndicatorProps {
  status: "online" | "offline";
}

const StatutIndicator = ({ status }: StatutIndicatorProps) => {
  return (
    <div
      className={`absolute bottom-0 left-6 z-10 w-3 h-3 flex items-center justify-center rounded-full ${
        status === "online" ? "bg-green-500" : "bg-black"
      }`}
    ></div>
  );
};

export default StatutIndicator;
