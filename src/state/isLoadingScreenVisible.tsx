import { create } from "zustand";

type IsLoadingScreenVisible = {
  isLoadingScreenVisible: boolean;
  setIsLoadingScreenVisible: (isLoadingScreenVisible: boolean) => void;
};

export const useIsLoadingScreenVisibleStore = create<IsLoadingScreenVisible>()(
  (set) => ({
    isLoadingScreenVisible: true,
    setIsLoadingScreenVisible: (isLoadingScreenVisible: boolean) =>
      set({ isLoadingScreenVisible }),
  })
);
