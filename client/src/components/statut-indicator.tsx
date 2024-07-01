interface StatusIndicatorProps {
  statut: "online" | "busy" | "away";
}

const StatutIndicator = ({ statut }: StatusIndicatorProps) => {
  return (
    <div
      className={`absolute bottom-0 left-6 z-10 w-3 h-3 flex items-center justify-center rounded-full ${
        statut === "online"
          ? "bg-green-500"
          : statut === "busy"
          ? "bg-red-500"
          : "bg-orange-500"
      }`}
    ></div>
  );
};

export default StatutIndicator;
