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
import { Table } from "@/components/ui/table";
import UserThumbnail from "@/components/user-thumbnail";
import useFetchAllUsers from "@/hooks/api/admin/fetch-all-users";
import { DashboardUsersProps } from "@/types/setting";
import { Icons } from "@/components/Icons";
import { useMemo } from "react";
import DataTableButton from "@/components/settings/dashboard/data-table-button";
import DataTableBody from "@/components/settings/dashboard/data-table-body";
import DataTableHeader from "@/components/settings/dashboard/data-table-header";
import SortButton from "@/components/settings/dashboard/sort-button";
import DataTableSearchInput from "@/components/settings/dashboard/table-input-search";
import { BlockUser } from "@/components/settings/dashboard/block-user";
import { DeleteUser } from "@/components/settings/dashboard/delete-user";
import Alert from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { useUnblockUserAccountMutation } from "@/hooks/api/admin/unblock-user-account";
import { generateBlockDescription } from "@/utils/generate-alert-description";
import StatutIndicator from "@/components/indicator/statut-indicator";

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
          <div className="relative">
            <StatutIndicator userId={user.id} />
            <UserThumbnail
              imageSize="8"
              image={user.profileImage}
              username={user.username}
              sex={user.sex}
              textSize="text-sm sm:text-base"
            />
          </div>
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
      <div>
        <h4 className="text-base font-semibold">Utilisateurs</h4>
        <p className="text-additional-info">Gérez les utilisateurs.</p>
      </div>
      <div className="py-4">
        <DataTableSearchInput
          table={table}
          columnId="username"
          placeholder="Rechercher un utilisateur..."
        />
      </div>
      <div className="rounded-md border border-foreground/5 max-h-[315px]">
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
