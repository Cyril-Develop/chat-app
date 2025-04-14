import { Icons } from "@/components/Icons";
import { useAuthStore } from "@/store/auth.store";
import { cn } from "@/lib/utils";

const SpyIndicator = () => {
  const { visible } = useAuthStore();

  if (visible) return null;

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2"
      )}
      title="Mode espion activé"
    >
      <Icons.mask width={28} height={28} fill="#fff" />
    </div>
  );
};

export default SpyIndicator;
