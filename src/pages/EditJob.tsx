import { useParams } from "react-router-dom";
import jobsdata from "../data";
import { useState } from "react";

const EditJob = () => {
  const { id } = useParams();
  const job = jobsdata.find((item) => item.uuid == id);

  const [formData, setFormData] = useState({
    jobtype: job?.jobtype,
    title: job?.title,
    description: job?.description,
    companyDesc: job?.companyDesc,
    email: job?.Email,
    location: job?.location,
    phone: job?.phone,
    companyName: job?.companyName,
    salary: job?.salary,
  });

  if (!job) {
    return <h1>No job Found</h1>;
  }
  return (
    <div className="bg-amber-100 py-10 ">
      <div className="flex flex-col  rounded lg:w-[40%] mx-2 lg:mx-auto bg-white shadow-lg px-3 py-5 ">
        <h1 className="font-bold text-lg mb-3">Add Job</h1>
        <label htmlFor="type" className="input-label">
          Job Type
        </label>
        <select
          value={formData.jobtype}
          onChange={(e) =>
            setFormData({ ...formData, jobtype: e.target.value })
          }
          name="type"
          id=""
          className="input-base"
        >
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
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <label htmlFor="type" className="input-label">
          Job Description
        </label>
        <textarea
          name=""
          id="description"
          className="input-base font-medium indent-4"
          rows={6}
          placeholder="Enter job description ..."
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
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
              value={job.salary[1]}
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
          value={job.location}
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

        <button className="bg-primary text-white font-semibold rounded py-1.5 cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditJob;
