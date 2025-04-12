import { SidebarNav } from "@/components/settings/sidebar-nav";
import ImageAccount from "@/assets/account.svg";
import ImageProfile from "@/assets/profile.svg";
import ImageDashboard from "@/assets/dashboard.svg";
import ImageNotification from "@/assets/notification.svg";
import ImageSettings from "@/components/image-provider";
import { Icons } from "@/components/Icons";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

const Settings = ({ children }: SettingsLayoutProps) => {
  const sidebarNavItems = [
    {
      title: "Profil",
      href: "/chateo/settings/profile",
    },
    {
      title: "Apparence",
      href: "/chateo/settings/appearance",
    },
    {
      title: "Notifications",
      href: "/chateo/settings/notifications",
    },
    {
      title: "Compte",
      href: "/chateo/settings/account",
    },
    {
      title: "Tableau de bord",
      href: "/chateo/settings/dashboard",
    },
  ];

  const imageSettings = [
    {
      href: "/chateo/settings/profile",
      img: ImageProfile,
      alt: "profile",
    },
    {
      href: "/chateo/settings/appearance",
      img: ImageProfile,
      alt: "appearance",
    },
    {
      href: "/chateo/settings/notifications",
      img: ImageNotification,
      alt: "notification",
    },
    {
      href: "/chateo/settings/account",
      img: ImageAccount,
      alt: "account",
    },
    {
      href: "/chateo/settings/dashboard",
      img: ImageDashboard,
      alt: "dashboard",
    },
  ];

  return (
    <>
      <div className="page_settings">
        <div className="space-y-0.5">
          <h2 className="flex items-center gap-1 text-2xl font-bold tracking-tight">
            <Icons.settings className="w-6 h-6" />
            Paramètres
          </h2>
          <p className="text-paragraph">
            Gérez les paramètres de votre compte et définissez vos préférences
            de messagerie.
          </p>
        </div>
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>

          <div className="hidden lg:block min-w-72 w-2/3 lg:w-1/3 md:w-2/5 sm:w-2/4">
            <ImageSettings logo={imageSettings} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
