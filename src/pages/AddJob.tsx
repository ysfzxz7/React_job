const AddJob = () => {
  return (
    <div className="bg-amber-100 py-10 ">
      <div className="flex flex-col  rounded lg:w-[40%] mx-2 lg:mx-auto bg-white shadow-lg px-3 py-5 ">
        <h1 className="font-bold text-lg mb-3">Add Job</h1>
        <label htmlFor="type" className="input-label">
          Job Type
        </label>
        <select name="type" id="" className="input-base">
          <option value="Full Time">Full Time</option>
          <option value="Remote">Remote</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Part Time</option>
        </select>
        <label htmlFor="type" className="input-label">
          Job Listing Name
        </label>
        <input
          className="input-base"
          placeholder="Enter a Job title"
          type="text"
        />

        <label htmlFor="type" className="input-label">
          Job Type
        </label>
        <textarea
          name=""
          id="description"
          className="input-base"
          rows={5}
          placeholder="Enter job description ..."
        ></textarea>

        <label className="input-label" htmlFor="type">
          Salary
        </label>
        <div className=" flex justify-between">
          <div className="w-full flex">
            <h5 className="mt-1.5 text-sm font-semibold">From</h5>
            <input
              className="input-base mr-4 "
              placeholder="Enter your salary"
              type="text"
            />
          </div>
          <div className="w-full flex items-start ">
            <h5 className="mt-1.5 text-sm font-semibold">To</h5>
            <input
              className="input-base   w-full"
              placeholder="Enter your salary"
              type="text"
            />
          </div>
        </div>

        <label className="input-label" htmlFor="type">
          Location
        </label>
        <input
          className="input-base"
          placeholder="Enter your Location"
          type="text"
        />

        <h1 className="font-semibold mb-3">Company Info</h1>

        <label htmlFor="type" className="input-label">
          Job Type
        </label>
        <textarea
          name=""
          id="description"
          className="input-base"
          rows={5}
          placeholder="Enter compnay description ..."
        ></textarea>

        <label htmlFor="type" className="input-label">
          Job Listing Name
        </label>
        <input
          className="input-base"
          placeholder="Enter you name"
          type="text"
        />
        <label htmlFor="type" className="input-label">
          Job Listing Name
        </label>
        <input
          className="input-base"
          placeholder="Enter you name"
          type="text"
        />

        <button className="bg-primary text-white font-semibold rounded py-1.5">
          Add Job
        </button>
      </div>
    </div>
  );
};

export default AddJob;
