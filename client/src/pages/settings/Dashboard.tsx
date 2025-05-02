import DataTableRooms from "@/components/settings/dashboard/table/data-table-rooms";
import DataTableUsers from "@/components/settings/dashboard/table/data-table-users";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <div className="space-y-6 md:pb-10">
      <div>
        <h3 className="text-lg font-medium">Tableau de bord</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          Gérez les utilisateurs et les salons de discussion.
        </p>
      </div>
      <Separator />
      <div className="flex flex-col min-[1500px]:flex-row gap-8">
        <DataTableUsers />
        <DataTableRooms />
      </div>
    </div>
  );
}
