export interface CreateRoomProps {
  btnTrigger: string;
  headerTitle: string;
  headerDescription: string;
}

export interface DialogHeaderProps {
  title: string;
  description: string;
}

export interface JoinRoomProps {
  btnTrigger: string;
  headerTitle: string;
  headerDescription: string;
  isOpen: boolean;
  roomId: number;
  onOpenChange: (open: boolean) => void;
}