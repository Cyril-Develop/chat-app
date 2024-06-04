export interface UserState {
  user: any;
  useSetUser: (user: any) => void;
  useLogout: () => void;
}