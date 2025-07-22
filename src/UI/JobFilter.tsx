import { useState } from "react";
import { useFilter } from "../Gears/useFilter";
import LocationFilter from "./LocationFilter";
import TypeFilter from "./TypeFilter";

interface jobFilterType {
  setData: any;
}
const JobFilter: React.FC<jobFilterType> = ({ setData }) => {
  const [typeFilter, setTypeFilter] = useState("");
  const handleFilter = () => {
    const filtredData = useFilter(typeFilter);
    setData(filtredData);
  };

  return (
    <div className="flex rounded justify-between border-gray-300 border-1  bg-amber-50 mb-10 p-2">
      <div className="flex gap-2">
        <TypeFilter setTypeFilter={setTypeFilter} />
        <LocationFilter />
      </div>
      <button
        onClick={handleFilter}
        className="bg-black text-white rounded px-4 cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default JobFilter;
