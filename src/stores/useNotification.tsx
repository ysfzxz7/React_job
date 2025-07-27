import { create } from "zustand";

type useNotificationType = {
  visibility: boolean;
  title: string;
  message: string;
  setNotificationVisible: (title: string, message: string) => void;
  setNotificationClose: () => void;
};

const useNotification = create<useNotificationType>((set) => ({
  visibility: false,
  title: "",
  message: "",
  setNotificationVisible: (title, message) => {
    set(() => ({ visibilty: true, title: title, message: message }));
    // setTimeout(() => set(() => ({ visibility: false })), 3000);
  },
  setNotificationClose: () => set(() => ({ visibility: false })),
}));

export default useNotification;
