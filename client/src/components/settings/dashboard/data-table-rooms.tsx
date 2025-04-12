import * as React from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useDeleteRoomMutation } from "@/hooks/api/chat/delete-room";
import useGetRooms from "@/hooks/api/chat/get-rooms";
import { DashboardRoomsProps } from "@/types/setting";
import { Icons } from "@/components/Icons";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export default function DataTableRooms() {
  const { data: rooms = [] } = useGetRooms();
  const { mutate: deleteRoom } = useDeleteRoomMutation();
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // Définir l'état de pagination avec une taille de page de 5
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const filteredRooms = useMemo(() => {
    return rooms?.filter((room: DashboardRoomsProps) => room.name !== "");
  }, [rooms]);

  const roomColumns: ColumnDef<DashboardRoomsProps>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="btnMenu"
          title="Trier par ordre alphabétique"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Salon
          <Icons.arrowUpDown height={16} width={16} />
        </Button>
      ),
      cell: ({ row }) => {
        const room = row.original;
        return (
          <Button
            variant="btnMenu"
            title={`Supprimer le salon ${room.name}`}
            className="p-4 w-full h-14"
            onClick={() => deleteRoom(room.id)}
          >
            {room.name}
          </Button>
        );
      },
    },
  ];

  const table = useReactTable({
    data: filteredRooms,
    columns: roomColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Rechercher un salon..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn("name")?.setFilterValue(e.target.value)
          }
          className="text-base"
        />
      </div>
      <div className="rounded-md border border-foreground/5 max-h-[315px]">
        <Table>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={roomColumns.length}
                  className="h-24 text-center text-gray-600 dark:text-gray-400"
                >
                  Aucun salon trouvé
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <p>
          {filteredRooms.length === 0
            ? null
            : filteredRooms.length === 1
            ? "1 salon"
            : `${filteredRooms.length} salons`}
        </p>

        <div className="space-x-2">
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
      </div>
    </div>
  );
}
