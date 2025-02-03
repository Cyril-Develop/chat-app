// ROOM

export const getMessages = async (token: string | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-room`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

export const sendMessage = async (formData: FormData, token: string | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-room`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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

export const deleteMessage = async (
  messageId: number,
  token: string | null
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-room`,
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

// PRIVATE CHAT
export const getPrivateMessages = async (token: string | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-private`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

export const sendPrivateMessage = async (
  formData: FormData,
  token: string | null
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-private`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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
