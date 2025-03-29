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

export const sendMessage = async (formData: FormData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-room`,
      {
        method: "POST",
        body: formData,
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

export const deleteMessage = async (messageId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-room`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageId }),
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

// PRIVATE CHAT
export const getPrivateMessages = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-private`,
      {
        headers: {
          "Content-Type": "application/json",
        },
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

export const fetchUnreadPrivateMessages = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-private/unread`,
      {
        headers: {
          "Content-Type": "application/json",
        },
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

export const markPrivateMessagesAsRead = async (contactId: number) => {
  await fetch(
    `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-private/mark-as-read`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ contactId }),
    }
  );
};

export const sendPrivateMessage = async (formData: FormData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-private`,
      {
        method: "POST",
        body: formData,
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

export const deletePrivateMessage = async (messageId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/message-private`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageId }),
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
