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
      const error = {
        message: responseData.error,
        errorCode: responseData.errorCode,
      };
      throw error;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const sendNotificationByEmail = async ({
  receiverId,
  type,
}: NotificationEmailProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/email/notification`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ receiverId, type }),
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = {
        message: responseData.error,
        errorCode: responseData.errorCode,
      };
      throw error;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};
