import { RadioGroupItem } from "@/components/ui/radio-group";

type ThemeOptionProps = {
  value: "light" | "dark";
  label: string;
  previewBg: string;
  sectionBg: string;
  lineBg: string;
  dotBg: string;
};

export const ThemeOption = ({
  value,
  label,
  previewBg,
  sectionBg,
  lineBg,
  dotBg,
}: ThemeOptionProps) => (
  <label className="cursor-pointer [&:has([data-state=checked])>div]:border-primary flex-1 max-w-[300px] hover:text-primary">
    <RadioGroupItem value={value} className="sr-only" />
    <div className="items-center rounded-md border-2 border-muted p-1">
      <div className={`space-y-2 rounded-sm ${previewBg} p-2`}>
        <div className={`space-y-2 rounded-md ${sectionBg} p-2 shadow-sm`}>
          <div className={`h-2 w-[80px] rounded-lg ${lineBg}`} />
          <div className={`h-2 w-[100px] rounded-lg ${lineBg}`} />
        </div>
        <div className={`space-y-2 rounded-md ${sectionBg} p-2`}>
          <div className={`h-2 w-[80px] rounded-lg ${lineBg}`} />
          <div className={`h-2 w-[100px] rounded-lg ${lineBg}`} />
        </div>
        <div
          className={`flex items-center space-x-2 rounded-md ${sectionBg} p-2`}
        >
          <div className={`h-4 w-4 rounded-full ${dotBg}`} />
          <div className={`h-2 w-[100px] rounded-lg ${lineBg}`} />
        </div>
      </div>
    </div>
    <span className="block w-full p-2 text-center font-semibold">{label}</span>
  </label>
);
