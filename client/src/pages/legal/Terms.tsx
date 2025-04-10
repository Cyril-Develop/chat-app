import { terms } from "@/components/legal/terms-datas";
import { Accordion } from "@/components/ui/accordion";
import TermItem from "@/components/legal/terms-item";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="flex flex-col items-center bg-muted dark:bg-secondary min-h-[calc(100dvh-96px)]">
      <div className="flex flex-col gap-4 grow p-4 md:p-10 max-w-4xl w-full ">
        <div className="flex flex-col gap-1">
          <h1 className="text-title font-semibold text-center">
            Conditions générales d'utilisation
          </h1>
          <p className="text-muted-foreground text-md text-center">
            📅 Dernière mise à jour : 10 avril 2025
          </p>
        </div>
        <Accordion type="single" collapsible>
          {terms.map((term) => (
            <TermItem key={term.number} term={term} />
          ))}
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
