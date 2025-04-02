import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { logout } from "@/services/Auth";
import { ApiError } from "@/types/api";
import { Room } from "@/types/store";
import { QueryClient } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";

type ErrorHandlerDependencies = {
  room?: Room | null;
  setRoom: (room: Room | null) => void;
  setAuthentication?: (isAuthenticated: boolean, user: null) => void;
  queryClient: QueryClient;
  navigate: NavigateFunction;
};

export const handleApiError = (
  error: ApiError,
  dependencies: ErrorHandlerDependencies
) => {
  const { room, setRoom, setAuthentication, queryClient, navigate } =
    dependencies;

  toast({
    title: "Erreur",
    description: error.message,
    variant: "destructive",
    logo: <Icons.alert />,
  });

  switch (error.errorCode) {
    case "ACCOUNT_DELETED":
      if (room && room.id) {
        setRoom(null);
      }
      logout();
      if (setAuthentication) {
        setAuthentication(false, null);
      }
      queryClient.clear();
      navigate("/chateo/login");
      break;

    case "TOKEN_EXPIRED":
      logout();
      if (setAuthentication) {
        setAuthentication(false, null);
      }
      navigate("/chateo/login");
      break;

    case "ROOM_NOT_FOUND":
      if (room && room.id) {
        setRoom(null);
      }
  }
};
