import { SidebarNav } from "@/components/settings/sidebar-nav";
import { Separator } from "@radix-ui/react-dropdown-menu";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

const Settings = ({ children }: SettingsLayoutProps) => {
  const sidebarNavItems = [
    {
      title: "Profil",
      href: "/settings/profile",
    },
    {
      title: "Compte",
      href: "/settings/account",
    }
  ];

  return (
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Paramètres</h2>
          <p className="text-muted-foreground">
            Gérez les paramètres de votre compte et définissez vos préférences
            de messagerie.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
