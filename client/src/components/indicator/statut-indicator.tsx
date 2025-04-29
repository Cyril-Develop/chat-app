import { useIsUserVisible } from "@/hooks/is-user-visible";

const StatutIndicator = ({ userId }: { userId: number }) => {
  const isConnected = useIsUserVisible(userId);

  if (!isConnected) return null;

  return (
    <div className="absolute bottom-0 left-6 z-10 w-3 h-3 flex items-center justify-center rounded-full bg-green-500"></div>
  );
};

export default StatutIndicator;
