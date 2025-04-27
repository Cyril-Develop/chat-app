//********** ROOM CHAT **********/
export const getMessages = async (roomId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/room/${roomId}/message`,
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

export const sendMessage = async (formData: FormData, roomId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/room/${roomId}/message`,
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

export const likeMessage = async (
  type: "private" | "room",
  messageId: number
) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/chat/${type}/message/${messageId}/like`,
      {
        method: "PATCH",
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

export const dislikeMessage = async (
  type: "private" | "room",
  messageId: number
) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/chat/${type}/message/${messageId}/dislike`,
      {
        method: "PATCH",
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

export const deleteMessage = async (messageId: number) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/chat/room/message/${messageId}`,
      {
        method: "DELETE",
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

//********** PRIVATE CHAT **********/
export const getPrivateMessages = async (contactId: number) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/chat/private/${contactId}/message/`,
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

export const fetchLinkPreview = async (url: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/link-preview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
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

export const sendPrivateMessage = async (
  formData: FormData,
  contactId: number
) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/chat/private/${contactId}/message`,
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

export const fetchUnreadPrivateMessages = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/private/message/unread`,
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
    `${
      import.meta.env.VITE_REACT_APP_BASE_URL
    }/chat/private/${contactId}/message/mark-as-read`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
};

export const deletePrivateMessage = async (messageId: number) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_REACT_APP_BASE_URL
      }/chat/private/message/${messageId}`,
      {
        method: "DELETE",
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
