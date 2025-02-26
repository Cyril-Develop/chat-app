export interface ContactFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NotificationEmailProps {
  receiverId: number;
  type: "Friend request" | "Private message";
  token: string | null;
}
