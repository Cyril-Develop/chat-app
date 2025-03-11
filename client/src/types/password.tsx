export interface ForgotPasswordFormProps {
  btnSubmit: string;
  onSubmitSuccess: () => void;
  handleResetPassword: () => void;
}

export interface ForgotPasswordProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  headerTitle: string;
  handleResetPassword: () => void;
  headerDescription: string;
}