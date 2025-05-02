import { Button } from "@/components/ui/button";

interface DataTableButtonProps {
  table: {
    previousPage: () => void;
    nextPage: () => void;
    getCanPreviousPage: () => boolean;
    getCanNextPage: () => boolean;
  };
}

export default function DataTableButton({ table }: DataTableButtonProps) {
  return (
    <div className="space-x-3 sm:space-x-2">
      <Button
        title="Page précédente"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Précédent
      </Button>
      <Button
        title="Page suivante"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Suivant
      </Button>
    </div>
  );
}
