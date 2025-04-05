import { getMessages } from "@/services/Message";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";
import { useRoomStore } from "@/store/room.store";
import { handleApiError } from "@/utils/error-handler";

const useGetRoomMessages = (roomId: number) => {
  const { isAuthenticated, setAuthentication } = useAuthStore();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["messages-room", roomId],
    queryFn: async () => getMessages(roomId),
    enabled: isAuthenticated,
    retry: false,
  });

  useEffect(() => {
    if (isError && error) {
      handleApiError(error, {
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

export default useGetRoomMessages;
