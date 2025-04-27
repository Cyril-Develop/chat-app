import { BlockUserAccountParams, DeleteUserAccountParams } from "@/types/admin";

export const deleteUserAccount = async ({
  userId,
  reason,
}: DeleteUserAccountParams) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/delete/${userId}`,
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
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/admin/block/${userId}`,
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
