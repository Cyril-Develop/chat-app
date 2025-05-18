import { useIsUserVisible } from "@/hooks/is-user-visible";

const StatutIndicator = ({ userId }: { userId: number }) => {
  const isConnected = useIsUserVisible(userId);

  if (!isConnected) return null;

  return (
    <div className="absolute bottom-0 right-0 z-10 w-2.5 h-2.5 flex items-center justify-center border dark:border-secondary rounded-full bg-green-500"></div>
  );
};

export default StatutIndicator;
