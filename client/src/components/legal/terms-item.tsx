import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <AccordionTrigger className="text-md sm:text-xl w-full flex items-center gap-3 justify-between">
        {term.title}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg">
        {term.text}
      </AccordionContent>
    </AccordionItem>
  );
}
