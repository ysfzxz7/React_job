const JobFilter = () => {
  return (
    <div className="flex   rounded border-gray-300 border-1  bg-amber-50 mb-10 p-2">
      <div className="flex-1">
        <select name="typefilter" className="input-base" id="">
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <button className="bg-black text-white rounded px-4 cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default JobFilter;
