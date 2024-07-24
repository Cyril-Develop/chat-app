export interface Room {
  id: number;
  name: string;
  isPrivate: boolean;
  password: string;
  updatedAt: string;
  createdAt: string;
  createdBy: number;
}

export interface RoomListProps {
  heading: string;
  rooms: Room[];
  value: string;
  onSelect: (room: Room) => void;
}

export interface RoomProviderProps {
  data: Room[];
  value: string;
  setOpen: (open: boolean) => void;
}

export interface CreateRoomProps {
  name: string;
  password?: string;
}

export interface JoinRoomProps {
  roomId: number;
  roomName?: string;
  password?: string;
}
