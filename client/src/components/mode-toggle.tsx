import { Icons } from "@/components/Icons";
import { Button } from "./ui/button";
import { useTheme } from "@/components/theme-provider";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="btn" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <Icons.sun className="h-[1.6rem] w-[1.6rem]" />
        </>
      ) : (
        <>
          <Icons.moon className="h-[1.6rem] w-[1.6rem]" />
        </>
      )}
      <span className="sr-only">
        {theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"}
      </span>
    </Button>
  );
};

export default ModeToggle;
