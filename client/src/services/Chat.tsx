import { CreateRoomProps, JoinRoomProps } from "@/types/room";

//********** GET ALL ROOMS  **********/
export const getRooms = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat`,
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

//********** GET ROOM  **********/
export const getRoom = async (roomId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/${roomId}`,
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

//********** CREATE ROOM (PUBLIC OR PRIVATE)  **********/
export const createRoom = async (data: CreateRoomProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

//********** JOIN ROOM OR PRIVATE DISCUSSION  **********/
export const joinChat = async (data: JoinRoomProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/join`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

//********** LEAVE ROOM  **********/
export const leaveRoom = async (roomId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/leave`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ roomId }),
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

//********** DELETE ROOM  **********/
export const deleteRoom = async (roomId: number) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/chat/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomId }),
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
