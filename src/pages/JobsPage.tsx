import { useState } from "react";
import jobsdata from "../data";
import JobsCard from "../UI/JobCard";
import JobFilter from "../UI/JobFilter";

const JobsPage = () => {
  const [data, setData] = useState(jobsdata);
  const [page, setPage] = useState(0);

  const datatoshow = data.slice(page, page + 9);
  return (
    <div className="lg:w-[70%] mx-auto">
      <h1 className="text-4xl font-semibold mx-auto w-fit my-10">
        Browse Jobs
      </h1>
      <button
        className={` ${
          datatoshow.length < 9 && "hidden"
        } bg-black text-white px-2 rounded`}
        onClick={() => setPage((prev) => prev + 9)}
      >
        add
      </button>
      <JobFilter setData={setData} />
      <div className="grid mx-4 lg:mx-0 md:grid-cols-2 lg:mx:0  lg:grid-cols-3 gap-3 mb-20">
        {datatoshow.map((job) => (
          <JobsCard key={job.uuid} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
