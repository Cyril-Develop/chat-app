export interface UserState {
  token: string | null;
  statut: "online" | "spy";
  setStatut: (statut: "online" | "spy") => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export interface RoomState {
  room: number | null;
  setRoom: (room: number | null) => void;
}