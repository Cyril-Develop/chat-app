import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NumberBox } from "@/utils/number-box";
import { cn } from "@/lib/utils";

interface TermProps {
  number: number;
  title: string;
  text: React.ReactNode;
}

export default function TermItem({ term }: { term: TermProps }) {
  return (
    <AccordionItem
      key={term.number}
      value={`item-${term.number}`}
      className={cn("border-border dark:border-secondary-foreground/10")}
    >
      <AccordionTrigger className="group text-lg sm:text-xl font-semibold w-full flex items-center gap-2 justify-between hover:underline">
        <div className="group-hover:no-underline">
          <NumberBox number={term.number} />
        </div>
        <span className="flex-1 text-left">{term.title}</span>
      </AccordionTrigger>

      <AccordionContent className="text-muted-foreground text-base sm:text-lg">
        {term.text}
      </AccordionContent>
    </AccordionItem>
  );
}
