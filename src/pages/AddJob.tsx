const AddJob = () => {
  return (
    <div className="bg-amber-100 py-10">
      <div className="flex flex-col rounded lg:w-[40%] mx-auto bg-white shadow-lg px-3 py-5 ">
        <h1>Update Job</h1>
        <label htmlFor="type" className="input-label">
          Job Type
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

        <label htmlFor="type">Job Type</label>
        <textarea
          name=""
          id="description"
          className="input-base"
          rows={5}
        ></textarea>

        <label className="input-label" htmlFor="type">
          Salary
        </label>
        <input
          className="input-base"
          placeholder="Enter your salary"
          type="text"
        />

        <label className="input-label" htmlFor="type">
          Location
        </label>
        <input
          className="input-base"
          placeholder="Enter your Location"
          type="text"
        />

        <h1>Company Info</h1>

        <label htmlFor="type" className="input-label">
          Job Type
        </label>
        <textarea
          name=""
          id="description"
          className="input-base"
          rows={5}
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
