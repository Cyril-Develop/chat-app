import { Slider } from "@/components/ui/slider";
import { Icons } from "@/components/Icons";
import { useVoiceStore } from "@/store/voice.store";

const OutputVolumeControl = () => {
  const { outputVolume, setOutputVolume } = useVoiceStore();

  return (
    <div className="flex flex-col space-y-2 w-full">
      <h5 className="text-sm font-semibold flex justify-between items-center">
        <span>Volume de sortie</span>
        <span className="text-additional-info">
          {Math.round(outputVolume * 100)}%
        </span>
      </h5>
      <div className="flex items-center gap-2 w-full">
        <Icons.volumeDown width={18} height={18} />
        <div className="relative flex-1">
          <Slider
            value={[outputVolume]}
            max={1}
            min={0.1}
            step={0.1}
            onValueChange={([v]) => setOutputVolume(v)}
            className="w-full cursor-pointer"
          />
        </div>
        <Icons.volumeUp width={18} height={18} />
      </div>
    </div>
  );
};

export default OutputVolumeControl;
