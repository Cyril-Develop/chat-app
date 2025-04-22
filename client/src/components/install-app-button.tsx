import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { useInstallApp } from "@/hooks/install-app";

const InstallAppButton = () => {
  const { isInstallable, promptInstall } = useInstallApp();

  if (!isInstallable) return null;

  return (
    <Button
      variant="default"
      title="Installer Chateo"
      aria-label="Installer Chateo"
      onClick={promptInstall}
      className="fixed top-[100px] left-1/2 -translate-x-1/2 z-50 h-10 min-w-10 overflow-hidden transition-all duration-300 ease-in-out flex items-center hover:px-5 group rounded-full"
    >
      <span className="max-w-0 text-base overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[150px] group-hover:opacity-100 whitespace-nowrap">
        Installer Chateo
      </span>
      <Icons.download width={24} height={18} />
    </Button>
  );
};

export default InstallAppButton;
