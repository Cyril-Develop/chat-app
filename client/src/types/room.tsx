export interface Room {
  id: number;
  name: string;
  description?: string;
  isPrivate?: boolean;
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

export interface CreateRoomFormProps {
  btnSubmit: string;
  onSubmitSuccess: () => void;
}

export interface JoinPrivateRoomFormProps {
  btnSubmit: string;
  roomId: number;
  onOpenChange: (open: boolean) => void;
}

export interface RoomProviderProps {
  data: Room[];
  value: string;
  setOpen: (open: boolean) => void;
}

export interface CreateRoomProps {
  name: string;
  password?: string;
  description?: string;
}

export interface JoinRoomProps {
  roomId: number;
  roomName?: string;
  password?: string;
}
