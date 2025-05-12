import { getCurrentUser } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useGetCurrentUser = () => {
  const { isAuthenticated, setAuthentication } = useAuthStore();
  const { room, setRoom } = useRoomStore();
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => getCurrentUser(),
    enabled: isAuthenticated,
    retry: false,
  });

  useEffect(() => {
    if (isError && error) {
      handleApiError(error as ApiError, {
        room,
        setRoom,
        setAuthentication,
        queryClient,
      });
    }
  }, [isError, error]);

  return { data, isLoading };
};

export default useGetCurrentUser;
