import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { editProfile } from "@/services/User";
import { useAuthStore } from "@/store/auth.store";
import { useRoomStore } from "@/store/room.store";
import { useSocketStore } from "@/store/socket.store";
import { ApiError } from "@/types/api";
import { handleApiError } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useEditUserMutation = () => {
  const queryClient = useQueryClient();
  const { socket } = useSocketStore();
  const { setAuthentication } = useAuthStore();
  const { room, setRoom } = useRoomStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: FormData) => editProfile(formData),
    onSuccess: (data) => {
      toast({
        title: data.message,
        variant: "success",
        logo: <Icons.check />,
      });
      socket?.emit("updateUserInfos", data.user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: ApiError) => {
      handleApiError(error, {
        room,
        setRoom,
        setAuthentication,
        queryClient,
        navigate,
      });
    },
  });
};
