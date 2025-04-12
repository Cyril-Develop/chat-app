import { useTheme } from "@/theme/theme-provider";
import { RadioGroup } from "@/components/ui/radio-group";
import { ThemeOption } from "@/components/settings/theme/theme-option";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-4">
      <div>
        <p className="text-base font-semibold">Thème</p>
        <p className="text-additional-info">
          Choisissez entre un thème clair ou sombre. Le thème sombre est plus
          adapté à une utilisation nocturne, tandis que le thème clair est idéal
          pour une utilisation diurne.
        </p>
      </div>

      <RadioGroup
        value={theme}
        onValueChange={(value) => setTheme(value as "light" | "dark")}
        className="flex flex-col sm:flex-row gap-8 pt-4"
      >
        <ThemeOption
          value="light"
          label="Clair"
          previewBg="bg-[#ecedef]"
          sectionBg="bg-white"
          lineBg="bg-[#ecedef]"
          dotBg="bg-[#ecedef]"
        />
        <ThemeOption
          value="dark"
          label="Sombre"
          previewBg="bg-slate-950"
          sectionBg="bg-slate-800"
          lineBg="bg-slate-400"
          dotBg="bg-slate-400"
        />
      </RadioGroup>
    </div>
  );
};

export default ThemeSelector;
