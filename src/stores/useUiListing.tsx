import { create } from "zustand";

type uiListingType = {
  listType: string;
  setList: () => void;
  setCard: () => void;
};

const useUiListing = create<uiListingType>((set) => ({
  listType: "card",
  setList: () => set(() => ({ listType: "list" })),
  setCard: () => set(() => ({ listType: "card" })),
}));

export default useUiListing;
