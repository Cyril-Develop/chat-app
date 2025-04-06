import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserThumbnail from "@/components/user-thumbnail";
import { useDeleteUserAccountMutation } from "@/hooks/api/user/delete-user-account";
import useGetUsers from "@/hooks/api/user/get-users";
import { cn } from "@/lib/utils";
import { DashboardProps } from "@/types/setting";

export default function Dashboard() {
  const { data: users, isLoading } = useGetUsers();
  const { mutate: deleteUserAccount } = useDeleteUserAccountMutation();

  const filteredUsers = users?.filter(
    (user: DashboardProps) => user.role === "USER"
  );

  const noUsersFound = !filteredUsers?.length;

  const handlePlural = (count: number) => {
    return count === 1
      ? " Utilisateur enregistré"
      : " Utilisateurs enregistrés";
  };

  return (
    <>
      {isLoading ? (
        <span className="flex justify-center">
          <Icons.loader />
        </span>
      ) : noUsersFound ? (
        <p className="text-gray-600 dark:text-gray-400 flex justify-center">
          Aucun utilisateur enregistré
        </p>
      ) : (
        <Table>
          <TableCaption
            className={cn("text-gray-600 dark:text-gray-400 text-base")}
          >
            {filteredUsers?.length}
            {handlePlural(filteredUsers?.length)}
          </TableCaption>
          <TableHeader>
            <TableRow className={cn("border-primary/10")}>
              <TableHead className={cn("text-foreground text-lg")}>
                ID
              </TableHead>
              <TableHead className={cn("text-foreground text-lg")}>
                Utilisateur
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers?.map((user: DashboardProps) => (
              <TableRow key={user.id} className={cn("hover:bg-foreground/5")}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>
                  <UserThumbnail
                    imageSize="8"
                    image={user.profileImage}
                    username={user.username}
                    gender={user.gender}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="alert"
                    title="Supprimer l'utilisateur"
                    className="p-0"
                    onClick={() => deleteUserAccount(user.id)}
                  >
                    <Icons.delete width={16} height={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
