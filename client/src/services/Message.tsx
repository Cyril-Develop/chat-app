export const sendMessage = async (formData: FormData, token: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
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

export const deleteMessage = async (messageId: number, token: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageId }),
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
