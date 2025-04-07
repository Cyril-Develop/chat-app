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

export interface DashboardProps {
  id: number;
  username: string;
  profileImage: string;
  gender: "HOMME" | "FEMME";
  role: string;
}
