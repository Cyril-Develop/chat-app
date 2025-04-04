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
  roomName: string;
  onSelect: (room: Room) => void;
}

export interface CreateRoomFormProps {
  btnSubmit: string;
  onSubmitSuccess: () => void;
  roomDescription?: string;
}

export interface JoinPrivateRoomFormProps {
  btnSubmit: string;
  roomId: number;
  onOpenChange: (open: boolean) => void;
}

export interface RoomProviderProps {
  rooms: Room[];
  roomName: string;
  setOpen: (open: boolean) => void;
}

export interface CreateRoomProps {
  name: string;
  password?: string;
  description?: string;
}

export interface updateRoomDescriptionProps {
  roomId: number;
  description: string;
}

export interface JoinRoomProps {
  roomId: number;
  roomName?: string;
  password?: string;
}
