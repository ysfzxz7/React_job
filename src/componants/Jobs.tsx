import { Link } from "react-router-dom";
import JobsCard from "../UI/JobCard";
import jobsdata from "../data";

const Jobs = () => {
  const [job1, job2, job3] = jobsdata;
  return (
    <div className="lg:w-[70%]  mx-auto space-y-5 py-10">
      <h1 className="mx-auto w-fit text-xl font-bold text-primary">
        Browse Jobs
      </h1>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 justify-between gap-2 mx-4 lg:mx-0 ">
        <JobsCard job={job1} />
        <JobsCard job={job2} />
        <JobsCard job={job3} />
      </div>
      <div className="mx-auto w-fit bg-black text-white px-4 py-1 rounded mt-10">
        <Link to={"/jobs"}>See More</Link>
      </div>
    </div>
  );
};

export default Jobs;
