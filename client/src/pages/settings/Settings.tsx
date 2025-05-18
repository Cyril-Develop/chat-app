import { SidebarNav } from "@/components/settings/sidebar-nav";
import ImageAccount from "/images/account.svg";
import ImageProfile from "/images/profile.svg";
import ImageAppearance from "/images/appearance.svg";
import ImageStream from "/images/stream.svg";
import ImageDashboard from "/images/dashboard.svg";
import ImageNotification from "/images/notification.svg";
import ImageProvider from "@/components/settings/image-provider";
import { Icons } from "@/components/Icons";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

const Settings = ({ children }: SettingsLayoutProps) => {
  const sidebarNavItems = [
    {
      title: "Profil",
      href: "/chat-app/settings/profile",
    },
    {
      title: "Apparence",
      href: "/chat-app/settings/appearance",
    },
    {
      title: "Voix",
      href: "/chat-app/settings/stream",
    },
    {
      title: "Compte",
      href: "/chat-app/settings/account",
    },
    {
      title: "Notifications",
      href: "/chat-app/settings/notifications",
    },
    {
      title: "Tableau de bord",
      href: "/chat-app/settings/dashboard",
    },
  ];

  const imageSettings = [
    {
      href: "/chat-app/settings/profile",
      img: ImageProfile,
      alt: "profile",
    },
    {
      href: "/chat-app/settings/appearance",
      img: ImageAppearance,
      alt: "appearance",
    },
    {
      href: "/chat-app/settings/stream",
      img: ImageStream,
      alt: "stream",
    },
    {
      href: "/chat-app/settings/account",
      img: ImageAccount,
      alt: "account",
    },
    {
      href: "/chat-app/settings/notifications",
      img: ImageNotification,
      alt: "notification",
    },
    {
      href: "/chat-app/settings/dashboard",
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

          <div className="hidden xl:block min-w-72 w-2/3 lg:w-1/3 md:w-2/5 sm:w-2/4">
            <ImageProvider logo={imageSettings} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
