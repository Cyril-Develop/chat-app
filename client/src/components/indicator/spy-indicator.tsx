import { Icons } from "@/components/Icons";
import { useAuthStore } from "@/store/auth.store";
import { cn } from "@/lib/utils";

const SpyIndicator = () => {
  const visible = useAuthStore((state) => state.visible);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated || visible) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute top-1 md:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
      )}
      title="Mode espion activé"
    >
      <Icons.mask width={24} height={24} fill="#f8fafc" />
    </div>
  );
};

export default SpyIndicator;
