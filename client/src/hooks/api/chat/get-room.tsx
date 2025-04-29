import { getRoom } from "@/services/Chat";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useGetRoom = (roomId: number) => {
  const { room, setRoom } = useRoomStore();
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setAuthentication } = useAuthStore();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["room", roomId],
    queryFn: async () => getRoom(roomId),
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
        navigate,
      });
    }
  }, [isError, error]);

  return { data, isLoading };
};

export default useGetRoom;
