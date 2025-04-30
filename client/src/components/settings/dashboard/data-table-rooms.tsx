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
import useFetchAllRooms from "@/hooks/api/admin/fetch-all-rooms";
import { DashboardRoomsProps } from "@/types/setting";
import { Icons } from "@/components/Icons";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import DataTableButton from "@/components/settings/dashboard/data-table-button";
import DataTableBody from "@/components/settings/dashboard/data-table-body";
import DataTableHeader from "@/components/settings/dashboard/data-table-header";
import DataTableSearchInput from "@/components/settings/dashboard/table-input-search";
import SortButton from "@/components/settings/dashboard/sort-button";
import Alert from "@/components/Alert";

export default function DataTableRooms() {
  const { data: rooms = [] } = useFetchAllRooms();
  const { mutate: deleteRoom } = useDeleteRoomMutation();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [roomIdToDelete, setRoomIdToDelete] = useState<number | null>(null);

  const handleDeleteRoom = () => {
    if (roomIdToDelete !== null) {
      deleteRoom(roomIdToDelete);
      setAlertOpen(false);
      setRoomIdToDelete(null);
    }
  };

  // Définir l'état de pagination avec une taille de page de 5
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const filteredRooms = useMemo(() => {
    return rooms?.filter((room: DashboardRoomsProps) => room.name !== "");
  }, [rooms]);

  const roomColumns: ColumnDef<DashboardRoomsProps>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => <SortButton column={column} title="Salon" />,
      cell: ({ row }) => {
        const room = row.original;
        return <p className="texte-sm sm:text-base">{room.name}</p>;
      },
    },
    {
      accessorKey: "creator",
      header: () => <div>Créateur</div>,
      cell: ({ row }) => {
        const room = row.original;
        return <p>{room.creator.username}</p>;
      },
    },
    {
      accessorKey: "Type",
      header: () => <div>Type</div>,
      cell: ({ row }) => {
        const room = row.original;
        return (
          <div className="flex items-center justify-between gap-4">
            <p>{room.isPrivate ? "Privé" : "Public"}</p>
            <Button
              variant="alert"
              className={cn("p-0")}
              title="Supprimer le salon"
              onClick={() => {
                setRoomIdToDelete(room.id);
                setAlertOpen(true);
              }}
            >
              <Icons.delete width={18} height={18} />
            </Button>
            <Alert
              open={alertOpen}
              setOpen={setAlertOpen}
              title="Supprimer le salon"
              description={`Êtes-vous sûr de vouloir supprimer le salon "${room.name}" ?`}
              buttonTitle="Supprimer"
              action={handleDeleteRoom}
            />
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
      <div className="rounded-md border border-foreground/5 max-h-[330px]">
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
