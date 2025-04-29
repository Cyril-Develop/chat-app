export const reasonMapping = {
  insultes: "Comportement insultant",
  harcelement: "Harcèlement",
  spam: "Spam / Publicité",
  contenu_inapproprie: "Contenu inapproprié",
} as const;

export type ReasonKey = keyof typeof reasonMapping;

export function getReasonLabel(reason: ReasonKey): string {
  return reasonMapping[reason] ?? "Motif inconnu";
}
