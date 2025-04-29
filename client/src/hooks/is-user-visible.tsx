import { useSocketStore } from "@/store/socket.store";

export const useIsUserVisible = (userId: number): boolean => {
  const { visibleUsers } = useSocketStore();
  return visibleUsers().some((user) => user.userId === userId);
};
