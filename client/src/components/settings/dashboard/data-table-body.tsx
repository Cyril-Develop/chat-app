import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { flexRender, Table as TableType } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

interface DataTableBodyProps<T> {
  table: TableType<T>;
  columnsLength: number;
}

export default function DataTableBody<T>({
  table,
  columnsLength,
}: DataTableBodyProps<T>) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            className={cn("hover:bg-foreground/5 border-b-foreground/5")}
            data-state={row.getIsSelected() && "selected"}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className={cn("p-0")}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            colSpan={columnsLength}
            className="p-4 w-full h-14 text-center text-gray-600 dark:text-gray-400"
          >
            Aucun résultat
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
