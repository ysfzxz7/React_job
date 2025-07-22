import type React from "react";

const TypeFilter: React.FC<any> = ({ setTypeFilter }) => {
  const handleChange = (e: any) => {
    const filter = e.target.value;
    setTypeFilter(filter);
    console.log(filter);
  };
  return (
    <div className="flex items-center">
      <h1>Type</h1>
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
