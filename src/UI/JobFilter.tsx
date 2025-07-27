import useNotification from "../stores/useNotification";
import KeyWordFilter from "./KeyWordFilter";
import LocationFilter from "./LocationFilter";
import TypeFilter from "./TypeFilter";

const JobFilter = () => {
  const { setNotificationVisible } = useNotification();

  return (
    <div className="lg:flex py-2 gap-y-2 px-2 rounded justify-between  border-gray-300 border-1  bg-amber-50 mb-10 ">
      <div className="flex gap-2 flex-wrap">
        <TypeFilter />
        <LocationFilter />
        <KeyWordFilter />
      </div>
      <button
        onClick={() =>
          setNotificationVisible(
            "search",
            "You have just clicked the search button"
          )
        }
        className="bg-black text-white rounded px-4 cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default JobFilter;
