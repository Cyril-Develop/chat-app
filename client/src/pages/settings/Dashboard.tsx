import DataTableRooms from "@/components/settings/dashboard/data-table-rooms";
import DataTableUsers from "@/components/settings/dashboard/data-table-users";

export default function Dashboard() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-medium">Tableau de bord</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          Gérez les utilisateurs et les salons de discussion.
        </p>
      </div>
      <div className="flex flex-col min-[1500px]:flex-row gap-4 mt-4">
        <DataTableUsers />
        <DataTableRooms />
      </div>
    </div>
  );
}
