import { useState, useEffect } from "react";
import RoomList from "@/components/room/room-list";
import { CommandSeparator } from "@/components/ui/command";
import { DialogJoin } from "@/components/dialog/dialog-join";
import { useRoomStore } from "@/store/room.store";

export interface Room {
  id: number;
  name: string;
  isPrivate: boolean;
}

interface RoomProviderProps {
  data: Room[];
  value: string;
  setOpen: (open: boolean) => void;
  handleJoinRoom: (id: number, password?: string) => void;
}

const RoomProvider = ({
  data,
  value,
  setOpen,
  handleJoinRoom,
}: RoomProviderProps) => {
  const [selectedRoom, setSelectedRoom] = useState<Omit<
    Room,
    "isPrivate"
  > | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { room: storedRoomId } = useRoomStore();

  useEffect(() => {
    if (!isDialogOpen) {
      setSelectedRoom(null);
    }
  }, [isDialogOpen]);

  const handlePublicRoomSelect = (room: Room) => {
    handleJoinRoom(room.id);
  };

  const handlePrivateRoomSelect = (room: Room) => {
    setSelectedRoom({ id: room.id, name: room.name });

    if (storedRoomId !== room.id) {
      setIsDialogOpen(true);
    } else {
      setOpen(false);
      handleJoinRoom(room.id);
    }
  };

  const privateRooms = data.filter((room) => room.isPrivate);
  const publicRooms = data.filter((room) => !room.isPrivate);

  return (
    <>
      {publicRooms && publicRooms.length > 0 && (
        <RoomList
          heading="Salons Publics 💬"
          rooms={publicRooms}
          onSelect={handlePublicRoomSelect}
          value={value}
        />
      )}
      <CommandSeparator />
      {privateRooms && privateRooms.length > 0 && (
        <RoomList
          heading="Salons Privés 🔒"
          rooms={privateRooms}
          onSelect={handlePrivateRoomSelect}
          value={value}
        />
      )}
      {selectedRoom && (
        <DialogJoin
          btnTrigger={selectedRoom.name}
          headerTitle={`Rejoindre "${selectedRoom.name}"`}
          headerDescription="Veuillez entrer le mot de passe pour rejoindre le salon privé."
          isOpen={isDialogOpen}
          roomId={selectedRoom.id}
          onOpenChange={setIsDialogOpen}
        />
      )}
    </>
  );
};

export default RoomProvider;
