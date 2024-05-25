import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="link" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <Sun className="h-[1.6rem] w-[1.6rem]" />
      ) : (
        <Moon className="h-[1.6rem] w-[1.6rem]" />
      )}
      <span className="sr-only">
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </span>
    </Button>
  )
}
