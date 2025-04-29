export const getAllUsers = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/all`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const isAuthenticated = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/status`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/profile`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const getFriends = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/friends`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const getUserById = async (userId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/${userId}/profile`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const getBlockedUsers = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/block`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const blockUser = async (contactId: number | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/${contactId}/block`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const unblockUser = async (contactId: number | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/${contactId}/unblock`,
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
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const editProfile = async (formData: FormData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user`,
      {
        method: "PATCH",
        body: formData,
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const editAccount = async (email: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/account`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const deleteAccount = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user`,
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
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const editNotification = async (notification: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/notifications`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notification }),
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const sendFriendRequest = async (receiverId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/${receiverId}/request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const getFriendRequests = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/request`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const acceptFriendRequest = async (contactId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/${contactId}/accept`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const rejectFriendRequest = async (contactId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/${contactId}/refuse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};

export const removeContact = async (contactId: number | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/${contactId}/remove`,
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
      throw responseData;
    }
    return responseData;
  } catch (error: any) {
    throw error;
  }
};
