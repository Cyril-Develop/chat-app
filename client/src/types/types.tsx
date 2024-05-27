export interface UserState {
  token: string;
  setUserToken: (token: string) => void;
  logout: () => void;
}