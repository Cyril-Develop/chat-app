import { Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface SortButtonProps {
  column: Column<any, unknown>;
  title: string;
}

export default function SortButton({ column, title }: SortButtonProps) {
  return (
    <Button
      variant="btnMenu"
      className={cn("p-0")}
      title="Trier par ordre alphabétique"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <Icons.arrowUpDown height={16} width={16} />
    </Button>
  );
}
