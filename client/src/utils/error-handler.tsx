import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { ApiError } from "@/types/api";
import { logout } from "@/services/Auth";
import { QueryClient } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { Room } from "@/types/store";

type ErrorHandlerDependencies = {
  room: Room | null;
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

  console.log(`Erreur API: ${error.errorCode}`, error);

  switch (error.errorCode) {
    case "ACCOUNT_DELETED":
      console.log("Le compte a été supprimé");

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
      console.log("on doit se déconnecter");
      logout();
      if (setAuthentication) {
        setAuthentication(false, null);
      }
      navigate("/chateo/login");
      break;

    case "ROOM_NOT_FOUND":
      console.log("La salle de chat n'a pas été trouvée");
      if (room && room.id) {
        setRoom(null);
      }
  }
};
