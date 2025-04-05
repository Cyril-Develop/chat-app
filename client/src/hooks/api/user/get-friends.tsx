import { getFriends } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { handleApiError } from "@/utils/error-handler";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useGetFriends = () => {
  const { setAuthentication } = useAuthStore();
  const queryClient = useQueryClient();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["friends"],
    queryFn: async () => getFriends(),
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

export default useGetFriends;
