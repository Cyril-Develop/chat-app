export interface RegisterByEmailProps {
  username: string;
  email: string;
  password: string;
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
  backButtonHref?: string;
  backButtonLabel?: string;
  children: React.ReactNode;
  text?: string;
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
  newUser: { username: string; email: string; password: string };
  onSubmitSuccess: () => void;
}

export interface ValidateAccountProps {
  newUser: { username: string; email: string; password: string, sexe: string };
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  headerTitle: string;
  headerDescription: string;
  handleAccountCreationSuccess: () => void;
}