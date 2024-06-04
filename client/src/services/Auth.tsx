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

interface registerByEmailProps {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
}

export const registerByEmail = async ({
  lastname,
  firstname,
  email,
  password,
}: registerByEmailProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lastname, firstname, email, password }),
      }
    );
    const data = await response.json();
    if(!response.ok) {
      throw new Error(data.error);
    }
    return data;
  } catch (error : any) {
    throw new Error(error.message);
  }
};

interface loginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = async ({ email, password }: loginByEmailProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      }
    );
    const data = await response.json();
    if(!response.ok) {
      throw new Error(data.error);
    }

    return data;
  } catch (error : any) {
    throw new Error(error.message);
  }
};