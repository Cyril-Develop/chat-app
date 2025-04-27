export interface DeleteUserAccountParams {
  userId: number;
  reason: string;
}

export interface BlockUserAccountParams {
  userId: number;
  duration: string;
  reason: string;
}