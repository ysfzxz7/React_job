import { create } from "zustand";

type useNotificationType = {
  visibility: boolean;
  title: string | "custom title";
  message: string;
  setNotificationVisible: (title: string, message: string) => void;
  setNotificationClose: () => void;
};

const useNotification = create<useNotificationType>((set) => ({
  visibility: false,
  title: "",
  message: "",
  setNotificationVisible: (t, m) => {
    set(() => ({ visibility: true, message: m, title: t }));
    setTimeout(() => set(() => ({ visibility: false })), 4000);
  },
  setNotificationClose: () => set(() => ({ visibility: false })),
}));

export default useNotification;
