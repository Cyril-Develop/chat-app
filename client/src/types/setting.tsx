import { UserInfos } from "@/types/user";

export interface AccountFormValues {
  user: UserInfos;
}

export interface NotificationFormValues {
  user: UserInfos;
}

export interface PreviewCardProps {
  user: UserInfos;
}

export interface ProfileFormValues {
  username: string;
  bio: string;
  image: File | null;
}

export interface ProfileFormProps {
  user: UserInfos;
}

export interface DashboardUsersProps {
  id: number;
  username: string;
  profileImage: string;
  sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
  role: string;
  isCurrentlyBlocked: boolean;
  totalBlockCount: number;
  adminBlocks: [
    {
      id: number;
      isActive: boolean;
      reason: "insultes" | "harcelement" | "spam" | "contenu_inapproprie";
      duration: string;
      startDate: string;
      endDate: string;
    }
  ];
}

export interface DashboardRoomsProps {
  id: number;
  name: string;
  isPrivate: boolean;
  creator: {
    username: string;
  };
}
