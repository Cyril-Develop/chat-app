import * as React from "react";
import {
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { useDeleteRoomMutation } from "@/hooks/api/chat/delete-room";
import useGetRooms from "@/hooks/api/chat/get-rooms";
import { DashboardRoomsProps } from "@/types/setting";
import { Icons } from "@/components/Icons";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import DataTableButton from "@/components/settings/dashboard/data-table-button";
import DataTableBody from "@/components/settings/dashboard/data-table-body";
import DataTableHeader from "@/components/settings/dashboard/data-table-header";
import DataTableSearchInput from "./table-input-search";
import SortButton from "@/components/settings/dashboard/sort-button";

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
      accessorKey: "createBy",
      header: () => <div>Créateurs</div>,
      cell: ({ row }) => {
        const room = row.original;
        return (
          <div className="flex items-center p-4 w-full h-14">
            <p>{room.createdBy}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => <SortButton column={column} title="Salons" />,
      cell: ({ row }) => {
        const room = row.original;
        return (
          <div className="flex justify-between p-4 w-full h-14">
            <span className="text-base">{room.name}</span>
            <Button
              variant="alert"
              title={`Supprimer le salon : ${room.name}`}
              className={cn("p-0")}
              onClick={() => deleteRoom(room.id)}
            >
              <Icons.delete width={18} height={18} />
            </Button>
          </div>
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
      <div>
        <h4 className="text-base font-semibold">Salons</h4>
        <p className="text-additional-info">
          Gérez les salons (privés & publics).
        </p>
      </div>
      <div className="flex items-center py-4">
        <DataTableSearchInput
          table={table}
          columnId="name"
          placeholder="Rechercher un salon..."
        />
      </div>
      <div className="rounded-md border border-foreground/5 max-h-[315px]">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columnsLength={roomColumns.length} />
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

        <DataTableButton table={table} />
      </div>
    </div>
  );
}
