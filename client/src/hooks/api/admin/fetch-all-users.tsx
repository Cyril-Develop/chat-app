import { fetchAllUsers } from "@/services/Admin";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useFetchAllUsers = () => {
  const { isAuthenticated, setAuthentication } = useAuthStore();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users-dashboard"],
    queryFn: async () => fetchAllUsers(),
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

export default useFetchAllUsers;
