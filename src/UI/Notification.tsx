import { IoClose } from "react-icons/io5";
import useNotification from "../stores/useNotification";

const Notification = () => {
  const { visibility, setNotificationClose, title, message } =
    useNotification();

  return (
    <div
      className={` ${
        !visibility && "hidden"
      } hover:bg-primary/30 transition-all duration-300   fixed top-20 right-5 rounded border-gray-300 border-2 bg-gray-200  p-5`}
    >
      <IoClose
        className="absolute right-2 top-2 cursor-pointer hover:scale-125 transition-all duration-200"
        onClick={setNotificationClose}
      />
      <div className="font-semibold flex items-center">
        <h1>{title}</h1>
      </div>
      <h5 className="text-xs">{message}</h5>
    </div>
  );
};

export default Notification;
