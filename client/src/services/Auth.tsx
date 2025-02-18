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

export const verifyIfUserExists = async (username: string, email: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/verify-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      }
    );
    const data = await response.json();

    // Vérifie si la réponse contient une erreur
    if (!response.ok) {
      throw new Error(data.error); // Si l'email ou le username existe, lève une erreur
    }

    // Si l'utilisateur n'existe pas encore, on peut continuer
    return data; // Cela retournera le message indiquant que l'utilisateur n'existe pas
  } catch (error: any) {
    console.error("Erreur de vérification utilisateur :", error);
    throw new Error(error.message);
  }
};

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

export const forgotPassword = async (email: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
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

export const resetPassword = async (token: string, password: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
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

export const loginAsGuest = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${import.meta.env.VITE_REACT_APP_GUEST_EMAIL}`,
          password: `${import.meta.env.VITE_REACT_APP_GUEST_PASSWORD}`,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const sendOtp = async (email: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/send-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
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

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/verify-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
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
