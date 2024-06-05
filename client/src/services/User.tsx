interface EditProfileProps {
  lastname: string;
  firstname: string;
}

export const EditProfile = async (data: EditProfileProps) => {
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
