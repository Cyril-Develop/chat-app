export interface UserState {
  token: string | null;
  statut: "online" | "spy";
  setStatut: (statut: "online" | "spy") => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export interface Room {
  id: number | null;
  name: string | null;
}

export interface RoomState {
  room: Room | null;
  setRoom: (room: Room | null) => void;
}