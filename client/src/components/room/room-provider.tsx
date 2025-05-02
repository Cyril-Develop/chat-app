import { JoinRoom } from "@/components/room/dialog/join-room";
import RoomList from "@/components/room/room-list";
import { CommandSeparator } from "@/components/ui/command";
import { useRoomTransitionMutation } from "@/hooks/api/chat/room-transition";
import { useRoomStore } from "@/store/room.store";
import { Room, RoomProviderProps } from "@/types/room";
import { useEffect, useState } from "react";

const RoomProvider = ({ rooms, roomName, setOpen }: RoomProviderProps) => {
  const [selectedPrivateRoom, setSelectedPrivateRoom] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const currentRoomId = useRoomStore((state) => state.room?.id);
  const { transitionToRoom, isLoading } = useRoomTransitionMutation();

  useEffect(() => {
    if (!isDialogOpen) {
      setSelectedPrivateRoom(null);
    }
  }, [isDialogOpen]);

  const handlePublicRoomSelect = (room: Room) => {
    if (currentRoomId === room.id) {
      // On quitte simplement la room active sans en rejoindre une nouvelle
      transitionToRoom(null, room.id);
    } else {
      // On quitte la room active (si nécessaire) et on rejoint la nouvelle room
      transitionToRoom({ roomId: room.id, roomName: room.name }, currentRoomId);
    }
    setOpen(false);
  };

  const handlePrivateRoomSelect = (room: Room) => {
    // Set the selected private room to be used in the dialog
    setOpen(true);
    setSelectedPrivateRoom({ id: room.id, name: room.name });

    if (currentRoomId !== room.id) {
      setIsDialogOpen(true);
    } else {
      setOpen(false);
      transitionToRoom(null, room.id);
    }
  };

  const privateRooms = rooms.filter((room) => room.isPrivate);
  const publicRooms = rooms.filter((room) => !room.isPrivate);

  return (
    <>
      {publicRooms && publicRooms.length > 0 && (
        <RoomList
          heading={
            publicRooms.length <= 1 ? `Salon Public 💬` : `Salons Publics 💬`
          }
          rooms={publicRooms}
          onSelect={handlePublicRoomSelect}
          roomName={roomName}
          disabled={isLoading}
        />
      )}
      <CommandSeparator />
      {privateRooms && privateRooms.length > 0 && (
        <RoomList
          heading={
            privateRooms.length <= 1 ? "Salon Privé 🔒" : "Salons Privés 🔒"
          }
          rooms={privateRooms}
          onSelect={handlePrivateRoomSelect}
          roomName={roomName}
          disabled={isLoading}
        />
      )}
      {selectedPrivateRoom && (
        <JoinRoom
          btnTrigger={selectedPrivateRoom.name}
          headerTitle={`Rejoindre "${selectedPrivateRoom.name}"`}
          headerDescription="Veuillez entrer le mot de passe pour rejoindre le salon privé."
          isOpen={isDialogOpen}
          roomId={selectedPrivateRoom.id}
          onOpenChange={setIsDialogOpen}
        />
      )}
    </>
  );
};

export default RoomProvider;