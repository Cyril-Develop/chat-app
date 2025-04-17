import { TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

interface DataTableHeadProps<T> {
  table: TableType<T>;
}

export default function DataTableHeader<T>({ table }: DataTableHeadProps<T>) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow
          key={headerGroup.id}
          className={cn("border-b-foreground/5 text-base")}
        >
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
}
