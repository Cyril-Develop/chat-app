export const getAllUsers = async (token: string | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/all`,
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

export const getUser = async (userId: number, token: string | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId }),
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

export const editProfile = async (formData: FormData, token: string | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
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

export const editAccount = async (email: string, token: string | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/account`,
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

export const deleteAccount = async (token: string | null) => {
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

export const editNotification = async (
  notification: string,
  token: string | null
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/notifications`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ notification }),
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

export const addContact = async (contactId: string, token: string | null) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ contactId }),
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

export const removeContact = async (
  contactId: number | null,
  token: string | null
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/remove`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ contactId }),
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
