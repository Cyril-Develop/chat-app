import { Icons } from "@/components/Icons";
import { toast } from "@/components/ui/use-toast";
import { logout } from "@/services/Auth";
import { ApiError } from "@/types/api";
import { Room } from "@/types/store";
import { QueryClient } from "@tanstack/react-query";
import { NavigateFunction } from "react-router-dom";
import { leaveRoom } from "@/services/Chat";
import { getReasonLabel } from "@/utils/block-reason";
import moment from "moment/min/moment-with-locales";
moment.locale("fr");

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

  // Gérer le toast par défaut à la fin, sauf si c'est BLOCK_ADMIN
  let showDefaultToast = true;

  switch (error.errorCode) {
    case "ACCOUNT_DELETED":
      if (room && room.id) {
        leaveRoom(room.id);
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

    case "BLOCK_ADMIN":
      if (room && room.id) {
        leaveRoom(room.id);
        setRoom(null);
      }

      // Formater la date de fin si disponible
      let endDateFormatted = "";
      if (error.endDate) {
        endDateFormatted = moment(error.endDate).format("D MMMM YYYY");
      }

      // Récupérer le motif de blocage
      let selectedReason = "";
      if (error.reason) {
        selectedReason = getReasonLabel(error.reason);
      }

      // Toast personnalisé pour BLOCK_ADMIN
      toast({
        description: (
          <div className="flex flex-col gap-1 font-semibold">
            <h3 className="flex items-center gap-1">
              <Icons.alert width={18} height={18} />
              {error.error}
            </h3>
            <p>
              Votre compte a été bloqué par un administrateur{" "}
              {endDateFormatted ? (
                <>
                  jusqu'au{" "}
                  <span className="font-semibold">{endDateFormatted}</span>
                </>
              ) : (
                <span className="font-semibold">de façon permanente</span>
              )}{" "}
              pour <span className="font-semibold">{selectedReason}</span>.
            </p>
          </div>
        ),
        variant: "destructive",
        duration: 8000,
      });

      // Ne pas afficher le toast par défaut
      showDefaultToast = false;
      break;

    case "ROOM_NOT_FOUND":
      if (room && room.id) {
        setRoom(null);
        leaveRoom(room.id);
      }
      break;
  }

  // Toast par défaut pour les autres erreurs
  if (showDefaultToast) {
    toast({
      description: error.error,
      variant: "destructive",
      logo: <Icons.alert />,
    });
  }
};
