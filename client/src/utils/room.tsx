import { UserInfos } from "@/types/user";

// Fonction utilitaire pour obtenir le nombre d'utilisateurs visibles
export const getVisibleUsersCount = (usersInRoom: UserInfos[]): number => {
  return usersInRoom.filter((user) => user.visible === true).length;
};

// Fonction utilitaire pour obtenir le label "Membre" ou "Membres"
export const getVisibleUsersLabel = (usersInRoom: UserInfos[]): string => {
  return getVisibleUsersCount(usersInRoom) === 1 ? "Membre" : "Membres";
};
