export const getUser = async (token: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

interface EditProfileProps {
  lastname: string;
  firstname: string;
}

export const editProfile = async (data: EditProfileProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/edit-profile`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.error);
    }
    return res;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const editEmail = async (email: string, token: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/email`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      }
    );
    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.error);
    }
    return res;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteAccount = async (token: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
