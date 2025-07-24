import type React from "react";
import useDateStore from "../stores/useDataStore";

const TypeFilter: React.FC<any> = () => {
  const { typeFilter } = useDateStore();
  const handleChange = (e: any) => {
    typeFilter(e.target.value);
  };
  return (
    <div className="flex items-center">
      <h4 className="input-label">Type</h4>
      <select
        onChange={handleChange}
        name="typefilter"
        className="input-base"
        id=""
      >
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Remote">Remote</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
      </select>
    </div>
  );
};

export default TypeFilter;
