export interface ApiError extends Error {
  error: string;       
  errorCode?: string;   
  reason?: "insultes" | "harcelement" | "spam" | "contenu_inapproprie";   
  endDate?: string; 
}
