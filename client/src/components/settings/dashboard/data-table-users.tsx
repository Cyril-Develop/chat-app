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

import UserThumbnail from "@/components/user-thumbnail";
import { useDeleteUserAccountMutation } from "@/hooks/api/user/delete-user-account";
import useGetUsers from "@/hooks/api/user/get-users";
import { DashboardUsersProps } from "@/types/setting";
import { Icons } from "@/components/Icons";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export default function DataTableUsers() {
  const { data: users = [] } = useGetUsers();
  const { mutate: deleteUserAccount } = useDeleteUserAccountMutation();
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // Définir l'état de pagination avec une taille de page de 5
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const filteredUsers = useMemo(() => {
    return users?.filter((user: DashboardUsersProps) => user.role === "USER");
  }, [users]);

  const userColumns: ColumnDef<DashboardUsersProps>[] = [
    {
      accessorKey: "username",
      header: ({ column }) => (
        <Button
          variant="btnMenu"
          title="Trier par ordre alphabétique"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Utilisateur
          <Icons.arrowUpDown height={16} width={16} />
        </Button>
      ),
      cell: ({ row }) => {
        const user = row.original;
        return (
          <Button
            variant="btnMenu"
            className="p-4 w-full"
            title={`Supprimer l'utilisateur ${user.username}`}
            onClick={() => deleteUserAccount(user.id)}
          >
            <UserThumbnail
              imageSize="6"
              image={user.profileImage}
              username={user.username}
              gender={user.gender}
            />
          </Button>
        );
      },
    },
  ];

  const table = useReactTable({
    data: filteredUsers,
    columns: userColumns,
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
          placeholder="Rechercher un utilisateur..."
          value={
            (table.getColumn("username")?.getFilterValue() as string) ?? ""
          }
          onChange={(e) =>
            table.getColumn("username")?.setFilterValue(e.target.value)
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
                  colSpan={userColumns.length}
                  className="h-24 text-center text-gray-600 dark:text-gray-400"
                >
                  Aucun utilisateur enregistré
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <p>
          {filteredUsers.length === 0
            ? null
            : filteredUsers.length === 1
            ? "1 utilisateur"
            : `${filteredUsers.length} utilisateurs`}
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
