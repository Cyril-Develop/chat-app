import { fetchLinkPreview } from "@/services/Message";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "react-router-dom";
import { useRoomStore } from "@/store/room.store";
import { handleApiError } from "@/utils/error-handler";

const useGetLinkPreview = (url: string) => {
  const { isAuthenticated, setAuthentication } = useAuthStore();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["link-preview", url],
    queryFn: () => fetchLinkPreview(url),
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

  return { data, isLoading, isError };
};

export default useGetLinkPreview;
