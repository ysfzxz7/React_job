import { Link } from "react-router-dom";
import JobsCard from "../UI/JobCard";

const Jobs = () => {
  return (
    <div className="lg:w-[70%]  mx-auto space-y-5 py-10">
      <h1 className="mx-auto w-fit text-xl font-bold text-primary">
        Browse Jobs
      </h1>
      <div className="lg:flex justify-between gap-2">
        <JobsCard />
        <JobsCard />
        <JobsCard />
      </div>
      <div className="mx-auto w-fit bg-black text-white px-4 py-1 rounded mt-10">
        <Link to={"/jobs"}>See More</Link>
      </div>
    </div>
  );
};

export default Jobs;
