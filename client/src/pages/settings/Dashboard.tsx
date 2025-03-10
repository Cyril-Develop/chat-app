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
import useGetUsers from "@/hooks/get-users";
import { cn } from "@/lib/utils";
import { DashboardProps } from "@/types/setting";
import { useDeleteUserAccountMutation } from "@/hooks/delete-user-account";

export default function Dashboard() {
  const { data, isLoading } = useGetUsers();
  const { mutate: deleteUserAccount } = useDeleteUserAccountMutation();

  const filteredData = data?.filter(
    (user: DashboardProps) => user.role === "USER"
  );

  const noUsersFound = !filteredData?.length;

  return (
    <>
      {isLoading ? (
        <span className="flex justify-center">
          <Icons.loader />
        </span>
      ) : noUsersFound ? (
        <p className="text-lg flex justify-center">
          Aucun utilisateur enregistré
        </p>
      ) : (
        <Table>
          <TableCaption className="text-lg">
            {filteredData?.length}
            {filteredData?.length === 1
              ? " utilisateur enregistré"
              : " utilisateurs enregistrés"}
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
            {filteredData?.map((user: DashboardProps) => (
              <TableRow key={user.id} className={cn("hover:bg-foreground/5")}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>
                  <UserThumbnail
                    imageSize="8"
                    image={user.profileImage}
                    username={user.username}
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
