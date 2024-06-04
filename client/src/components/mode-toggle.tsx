import { Icons } from "@/components/Icons";

interface ThemeModProps {
  theme: string;
}

export function ThemeMod({ theme }: ThemeModProps) {
  return (
    <>
      {theme === "light" ? (
        <>
          <Icons.sun className="h-[1.6rem] w-[1.6rem]" />
          Mode clair
        </>
      ) : (
        <>
          <Icons.moon className="h-[1.6rem] w-[1.6rem]" />
          Mode sombre
        </>
      )}
      <span className="sr-only">
        {theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"}
      </span>
    </>
  );
}
