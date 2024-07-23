import { create } from "zustand";

interface ContactState {
  contactId: number | null;
  setContactId: (contactId: number | null) => void;
}

export const useContactStore = create<ContactState>((set) => ({
  contactId: null,
  setContactId: (contactId: number | null) => set({ contactId }),
}));
