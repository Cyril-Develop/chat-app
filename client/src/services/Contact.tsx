import { ContactFormProps } from "@/types/contact";

export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}: ContactFormProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/contact`,
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
