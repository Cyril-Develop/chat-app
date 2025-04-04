import { JoinRoom } from "@/components/dialog/join-room";
import RoomList from "@/components/sidebar/room/room-list";
import { CommandSeparator } from "@/components/ui/command";
import { useJoinRoomMutation } from "@/hooks/join-chat";
import { useLeaveRoomMutation } from "@/hooks/leave-room";
import { useRoomStore } from "@/store/room.store";
import { Room, RoomProviderProps } from "@/types/room";
import { useEffect, useState } from "react";

const RoomProvider = ({ rooms, roomName, setOpen }: RoomProviderProps) => {
  const [selectedPrivateRoom, setSelectedPrivateRoom] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { room } = useRoomStore();
  const { id: currentRoomId } = room || {};
  const { mutate: leaveRoom } = useLeaveRoomMutation();
  const { mutate: joinRoom } = useJoinRoomMutation();

  useEffect(() => {
    if (!isDialogOpen) {
      setSelectedPrivateRoom(null);
    }
  }, [isDialogOpen]);

  const handlePublicRoomSelect = (room: Room) => {
    if (currentRoomId === room.id) {
      leaveRoom(room.id);
    } else {
      joinRoom({ roomId: room.id, roomName: room.name });
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
      leaveRoom(room.id);
    }
  };

  const privateRooms = rooms.filter((room) => room.isPrivate);
  const publicRooms = rooms.filter((room) => !room.isPrivate);

  return (
    <>
      {publicRooms && publicRooms.length > 0 && (
        <RoomList
          heading={
            publicRooms.length <= 1 ? "Salon Public 💬" : "Salons Publics 💬"
          }
          rooms={publicRooms}
          onSelect={handlePublicRoomSelect}
          roomName={roomName}
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
