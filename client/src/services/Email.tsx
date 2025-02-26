import { ContactFormProps, NotificationEmailProps } from "@/types/email";

export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}: ContactFormProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/email/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.error);
    }
    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const sendNotificationByEmail = async (
  { receiverId, type, token }: NotificationEmailProps
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/email/notification`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ receiverId, type }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.error);
    }
    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
