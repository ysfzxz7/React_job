import { create } from "zustand";

type usePaginationType = {
  page: number;
  index: number;
  numOfItems: number;
  next: () => void;
  back: () => void;
  changeItem: (n: number) => void;
};

const usePagination = create<usePaginationType>((set) => ({
  page: 1,
  index: 0,
  numOfItems: 9,
  next: () =>
    set((state) => ({
      index: state.index + state.numOfItems,
      page: state.page + 1,
    })),
  back: () =>
    set((state) => ({
      index: state.index - state.numOfItems,
      page: state.page - 1,
    })),
  changeItem: (n) => set(() => ({ numOfItems: n })),
}));

export default usePagination;
