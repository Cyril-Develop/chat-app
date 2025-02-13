import { useState, useEffect } from "react";
import RoomList from "@/components/room/room-list";
import { CommandSeparator } from "@/components/ui/command";
import { JoinRoom } from "@/components/dialog/join-room";
import { useRoomStore } from "@/store/room.store";
import { RoomProviderProps, Room } from "@/types/room";
import { useLeaveRoomMutation } from "@/hooks/leave-room";
import { useJoinRoomMutation } from "@/hooks/join-room";

const RoomProvider = ({ data, value, setOpen }: RoomProviderProps) => {
  const [selectedPrivateRoom, setSelectedPrivateRoom] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { room } = useRoomStore();
  const { id: currentRoomId } = room || {};
  const leaveRoom = useLeaveRoomMutation();
  const joinRoom = useJoinRoomMutation();

  useEffect(() => {
    if (!isDialogOpen) {
      setSelectedPrivateRoom(null);
    }
  }, [isDialogOpen]);

  const handlePublicRoomSelect = (room: Room) => {
    if (currentRoomId === room.id) {
      leaveRoom.mutate(room.id);
    } else {
      joinRoom.mutate({ roomId: room.id, roomName: room.name });
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
      leaveRoom.mutate(room.id);
    }
  };

  const privateRooms = data.filter((room) => room.isPrivate);
  const publicRooms = data.filter((room) => !room.isPrivate);

  return (
    <>
      {publicRooms && publicRooms.length > 0 && (
        <RoomList
          heading={
            publicRooms.length <= 1 ? "Salon Public 💬" : "Salons Publics 💬"
          }
          rooms={publicRooms}
          onSelect={handlePublicRoomSelect}
          value={value}
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
          value={value}
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
