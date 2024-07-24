import { RegisterByEmailProps, LoginByEmailProps } from "@/types/auth";

// export const googleLogin = async () => {
//   try {
//     const response = await fetch(
//       `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/google`,
//       {
//         method: "GET",
//         credentials: "include",
//       }
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const registerByEmail = async ({
  username,
  email,
  password,
}: RegisterByEmailProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
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

export const loginByEmail = async ({ email, password }: LoginByEmailProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
