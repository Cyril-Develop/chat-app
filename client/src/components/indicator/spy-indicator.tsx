import { Icons } from "@/components/Icons";
import { useAuthStore } from "@/store/auth.store";
import { cn } from "@/lib/utils";

const SpyIndicator = () => {
  const { visible } = useAuthStore();

  if (visible) return null;

  return (
    <div
      className={cn(
        "absolute top-2 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2"
      )}
      title="Mode espion activé"
    >
      <Icons.mask width={24} height={24} fill="#fff" />
    </div>
  );
};

export default SpyIndicator;
