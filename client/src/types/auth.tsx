export type Sex = "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";

export type NewUser = {
  username: string;
  email: string;
  password: string;
  sex: Sex | "";
};

export interface RegisterByEmailProps {
  username: string;
  email: string;
  password: string;
  sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
}

export interface LoginByEmailProps {
  email: string;
  password: string;
}

export interface AuthHeaderProps {
  title: string;
  description: string;
}

export interface BackButtonProps {
  label: string;
  href: string;
  text: string;
}

export interface CardWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export interface ShowPassordProps {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
  field: {
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
}

export interface ValidateAccountFormProps {
  newUser: {
    username: string;
    email: string;
    password: string;
    sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
  };
  onSubmitSuccess: () => void;
}

export interface ValidateAccountProps {
  newUser: {
    username: string;
    email: string;
    password: string;
    sex: "MALE" | "FEMALE" | "NON_BINARY" | "UNDISCLOSED";
  };
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  headerTitle: string;
  headerDescription: string;
  handleAccountCreationSuccess: () => void;
}
