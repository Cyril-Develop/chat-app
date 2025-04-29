import { DashboardUsersProps } from "@/types/setting";
import { getReasonLabel } from "@/utils/block-reason";
import moment from "moment/min/moment-with-locales";
moment.locale("fr");
export const generateBlockDescription = (user: DashboardUsersProps) => {
  const activeBlock = user.adminBlocks?.[0];
  const totalBlockCount = user.totalBlockCount;
  const selectedReason = getReasonLabel(activeBlock.reason);

  // Formater la date de début
  let startDateFormatted = "";
  if (activeBlock.startDate) {
    startDateFormatted = moment(activeBlock.startDate).format("D MMMM YYYY");
  }

  // Formater la date de fin si disponible
  let endDateFormatted = "";
  if (activeBlock.endDate) {
    endDateFormatted = moment(activeBlock.endDate).format("D MMMM YYYY");
  }
  const duration = activeBlock.duration
    ? parseInt(activeBlock.duration, 10)
    : null;
  const formattedDuration = duration
    ? `${duration} jour${duration > 1 ? "s" : ""}`
    : "Indéfinie";

  return (
    <>
      <p>
        <span className="font-semibold">Motif :</span> {selectedReason}
      </p>
      <p>
        <span className="font-semibold">Depuis le :</span> {startDateFormatted}
      </p>

      {duration ? (
        <>
          <p>
            <span className="font-semibold">Jusqu'au :</span> {endDateFormatted}
          </p>
          <p>
            <span className="font-semibold">Durée :</span> {formattedDuration}
          </p>
        </>
      ) : (
        <p>
          <span className="font-semibold">Blocage permanent</span>
        </p>
      )}

      {totalBlockCount && (
        <p>
          <span className="font-semibold">A déjà été bloqué :</span>{" "}
          {totalBlockCount} fois
        </p>
      )}
    </>
  );
};
