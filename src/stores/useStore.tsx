import { create } from "zustand";

interface store {
  counter: number;
  incr: (value: number) => void;
  decr: (value: number) => void;
}
const useStore = create<store>((set) => ({
  counter: 0,
  incr: (value) => set((state: store) => ({ counter: state.counter + value })),
  decr: (value) => set((state: store) => ({ counter: state.counter - value })),
}));

export default useStore;
