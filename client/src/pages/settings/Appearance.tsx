import  ThemeSelector  from "@/components/settings/theme/theme-selector";
import { Separator } from "@/components/ui/separator";

const AppearancePage = () => {
  return (
    <div className="space-y-6 md:pb-10">
      <>
        <div>
          <h3 className="text-lg font-medium">Apparence</h3>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Personnalisez l'apparence de l'application.
          </p>
        </div>
        <Separator />
        <ThemeSelector />
      </>
    </div>
  );
};

export default AppearancePage;
