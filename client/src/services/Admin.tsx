import { BlockUserAccountParams, DeleteUserAccountParams } from "@/types/admin";

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/users`,
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

export const fetchAllRooms = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/rooms`,
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

export const deleteUserAccount = async ({
  userId,
  reason,
}: DeleteUserAccountParams) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/users/${userId}/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reason }),
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

export const blockUserAccount = async ({
  userId,
  duration,
  reason,
}: BlockUserAccountParams) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/users/${userId}/block`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ duration, reason }),
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

export const unblockUserAccount = async (userId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/users/${userId}/unblock`,
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