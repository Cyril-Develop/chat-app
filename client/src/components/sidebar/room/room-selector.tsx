import { Icons } from "@/components/Icons";
import RoomProvider from "@/components/room/room-provider";
import { SkeletonInput } from "@/components/skeleton/skeleton";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useGetRooms from "@/hooks/api/chat/get-rooms";
import { cn } from "@/lib/utils";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function RoomSelector() {
  const { data: fetchedRooms, isLoading } = useGetRooms();
  const { setRoom, room } = useRoomStore();
  const { id: currentRoomId, name: currentRoomName } = room || {};
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  // État local pour la gestion du Popover
  const [open, setOpen] = useState(false);
  const togglePopover = () => {
    setOpen((prev) => !prev);
  };

  // Écouter les événements Socket.IO pour les mises à jour en temps réel
  useEffect(() => {
    if (!socket) return;

    // Room supprimée
    const handleRoomDeleted = (deletedRoomId: number) => {
      // Si c'est la room active, la réinitialiser
      if (currentRoomId === deletedRoomId) {
        setRoom(null);
      }

      // Invalider le cache pour forcer un refetch
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    };

    // On met à jour la room active et rafraîchit la liste des rooms
    const handleRoomUpdated = (roomId: number) => {
      queryClient.invalidateQueries({ queryKey: ["room", roomId] });
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    };

    socket.on("roomUpdated", handleRoomUpdated);
    socket.on("roomDeleted", handleRoomDeleted);

    return () => {
      socket.off("roomUpdated", handleRoomUpdated);
      socket.off("roomDeleted", handleRoomDeleted);
    };
  }, [socket, currentRoomId, setRoom, queryClient]);

  const roomsFound = fetchedRooms && fetchedRooms.length > 0;

  return (
    <>
      {isLoading ? (
        <SkeletonInput />
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              size="box"
              aria-label="Voir les salons"
              aria-expanded={open}
              className={cn("w-[200px] justify-between p-3 text-button")}
              disabled={isLoading || !roomsFound}
              onClick={togglePopover}
            >
              {currentRoomName
                ? currentRoomName
                : roomsFound
                ? `Rejoindre un salon (${fetchedRooms.length})`
                : "Aucun salon"}
              {open ? (
                <Icons.chevronUp width={16} height={16} />
              ) : (
                <Icons.chevronDown width={16} height={16} />
              )}
            </Button>
          </PopoverTrigger>

          {roomsFound && (
            <PopoverContent
              className={cn("p-0 w-[200px]")}
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <Command>
                <CommandInput placeholder="Rechercher un salon" />
                <CommandList>
                  <CommandEmpty className={cn("error p-3")}>
                    Aucun salon trouvé.
                  </CommandEmpty>
                  <RoomProvider
                    rooms={fetchedRooms}
                    roomName={currentRoomName ?? ""}
                    setOpen={setOpen}
                  />
                </CommandList>
              </Command>
            </PopoverContent>
          )}
        </Popover>
      )}
    </>
  );
}
