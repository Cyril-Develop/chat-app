import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";

interface DataTableSearchInputProps<T> {
  table: Table<T>;
  columnId: string;
  placeholder?: string;
  className?: string;
}

export default function DataTableSearchInput<T>({
  table,
  columnId,
  placeholder = "Rechercher...",
  className = "form-input",
}: DataTableSearchInputProps<T>) {
  const column = table.getColumn(columnId);

  return (
    <Input
      placeholder={placeholder}
      value={(column?.getFilterValue() as string) ?? ""}
      onChange={(e) => column?.setFilterValue(e.target.value)}
      className={className}
    />
  );
}
