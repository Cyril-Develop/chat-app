import Alert from "@/components/Alert";
import { Icons } from "@/components/Icons";
import { BlockUser } from "@/components/settings/dashboard/dialog/block-user";
import { DeleteUser } from "@/components/settings/dashboard/dialog/delete-user";
import SortButton from "@/components/settings/dashboard/sort-button";
import DataTableSearchInput from "@/components/settings/dashboard/table-input-search";
import DataTableBody from "@/components/settings/dashboard/table/data-table-body";
import DataTableButton from "@/components/settings/dashboard/table/data-table-button";
import DataTableHeader from "@/components/settings/dashboard/table/data-table-header";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import UserThumbnail from "@/components/user-thumbnail";
import useFetchAllUsers from "@/hooks/api/admin/fetch-all-users";
import { useUnblockUserAccountMutation } from "@/hooks/api/admin/unblock-user-account";
import { DashboardUsersProps } from "@/types/setting";
import { generateBlockDescription } from "@/utils/generate-alert-description";
import {
  ColumnDef,
  PaginationState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";
import { useMemo } from "react";
import { Label } from "@/components/ui/label";

export default function DataTableUsers() {
  const { data: users = [] } = useFetchAllUsers();
  const { mutate: unblockUserAccount } = useUnblockUserAccountMutation();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleUnblockUser = (userId: number) => {
    if (userId) {
      setAlertOpen(false);
      unblockUserAccount(userId);
    }
  };

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
        <SortButton column={column} title="Utilisateur" />
      ),
      cell: ({ row }) => {
        const user = row.original;
        return (
          <UserThumbnail
            userId={user.id}
            username={user.username}
            sex={user.sex}
            image={user.profileImage}
            textSize="text-sm sm:text-base"
          />
        );
      },
    },
    {
      accessorKey: "block",
      header: () => <div>Bloqué</div>,
      cell: ({ row }) => {
        const user = row.original;
        return (
          <div className="flex items-center justify-between gap-4">
            <p> {user.isCurrentlyBlocked ? "Oui" : "Non"}</p>
            <div className="flex items-center justify-center gap-5">
              {user.isCurrentlyBlocked ? (
                <>
                  <Button variant="linkForm" title="Débloquer l'utilisateur">
                    <Icons.block
                      width={18}
                      height={18}
                      onClick={() => setAlertOpen(true)}
                    />
                  </Button>
                  <Alert
                    open={alertOpen}
                    setOpen={setAlertOpen}
                    title={`Débloquer l'utilisateur "${user.username}"`}
                    description={generateBlockDescription(user)}
                    buttonTitle="Débloquer"
                    action={() => handleUnblockUser(user.id)}
                  />
                </>
              ) : (
                <BlockUser
                  btnTrigger={<Icons.block width={18} height={18} />}
                  headerTitle="Bloquer l'utilisateur"
                  headerDescription={`Sélectionnez la durée et expliquez le motif pour lequel "${user.username}" doit être bloqué.`}
                  userIdToBlock={user.id}
                />
              )}
              <DeleteUser
                btnTrigger={<Icons.delete width={18} height={18} />}
                headerTitle="Supprimer l'utilisateur"
                headerDescription={`Précisez le motif de la suppression du compte de "${user.username}".`}
                userIdToDelete={user.id}
              />
            </div>
          </div>
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
      <Label htmlFor="search-user">
        <h4 className="text-base font-semibold">Utilisateurs</h4>
        <p className="text-additional-info">Gérez les utilisateurs.</p>
      </Label>
      <div className="py-4">
        <DataTableSearchInput
          table={table}
          id="search-user"
          columnId="username"
          placeholder="Rechercher un utilisateur..."
        />
      </div>
      <div className="rounded-md border border-foreground/5 max-h-[330px]">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columnsLength={userColumns.length} />
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
        <DataTableButton table={table} />
      </div>
    </div>
  );
}
