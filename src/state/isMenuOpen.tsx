import { create } from "zustand";

type IsMenuOpenState = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const useIsMenuOpenStore = create<IsMenuOpenState>()((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
}));
