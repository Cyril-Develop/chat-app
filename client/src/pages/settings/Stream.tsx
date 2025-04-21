import { Separator } from "@/components/ui/separator";
import TestMicrophoneButton from "@/components/settings/stream/test-microphone";
import InputVolumeControl from "@/components/settings/stream/volume/input-volume";
import OutputVolumeControl from "@/components/settings/stream/volume/output-volume";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Voix</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          Ajustez les différents paramètres liés au son.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col w-full space-y-4">
          <div>
            <h4 className="text-base font-semibold">Volume</h4>
            <p className="text-additional-info">
              Ajustez le volume d'entrée (microphone) et de sortie
              (haut-parleur).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-8">
            <InputVolumeControl />
            <OutputVolumeControl />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-4">
          <div>
            <h4 className="text-base font-semibold">Test du micro</h4>
            <p className="text-additional-info">
              Des problèmes de son ? Testez votre microphone et ajustez le
              volume d'entrée.
            </p>
          </div>
          <TestMicrophoneButton />
        </div>
      </div>
    </div>
  );
}
