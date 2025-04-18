import { terms } from "@/components/legal/terms-datas";
import { Accordion } from "@/components/ui/accordion";
import TermItem from "@/components/legal/terms-item";

export default function Terms() {
  return (
    <div className="terms">
      <div className="flex flex-col gap-4 w-full max-w-4xl">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-center text-2xl md:text-3xl">
            Conditions générales d'utilisation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-md text-center">
            📅 Dernière mise à jour : 17 avril 2025
          </p>
        </div>
        <Accordion type="single" collapsible>
          {terms.map((term) => (
            <TermItem key={term.number} term={term} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
