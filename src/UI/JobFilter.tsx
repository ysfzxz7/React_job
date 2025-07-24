import KeyWordFilter from "./KeyWordFilter";
import LocationFilter from "./LocationFilter";
import TypeFilter from "./TypeFilter";

const JobFilter = () => {
  return (
    <div className="lg:flex space-y-3 mx-2 rounded justify-between border-gray-300 border-1  bg-amber-50 mb-10 p-2">
      <div className="flex gap-2">
        <TypeFilter />
        <LocationFilter />
        <KeyWordFilter />
      </div>
      <button
        onClick={() => console.log("clicked")}
        className="bg-black text-white rounded px-4 cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default JobFilter;
