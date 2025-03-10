export interface ApiError extends Error {
  errorCode?: string;
  response?: {
    data?: {
      errorCode?: string;
      message?: string;
      error?: string;
    };
  };
}
