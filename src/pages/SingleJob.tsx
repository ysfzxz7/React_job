import { Link, useParams } from "react-router-dom";
import jobsdata from "../data";
import NotFound from "../UI/NotFound";

const SingleJob = () => {
  const { id } = useParams();

  const job = jobsdata.find((oneJob) => oneJob.uuid == id);

  if (!job) {
    return <NotFound />;
  }
  return (
    <div className="bg-blue-100 lg:px-40 pb-4 mx-auto ">
      <Link to="/" className="bg-white w-[100%] block py-2 font-semibold">
        Back to Job Listing
      </Link>
      <div className="flex-row lg:flex  my-10 gap-3">
        <div className=" h-fit space-y-3">
          <div className="bg-white rounded p-4 shadow-lg space-y-2">
            <h4 className="text-xs">{job.jobtype}</h4>
            <h1 className="font-semibold text-xl">{job.title}</h1>
            <h5 className="text-xs">{job.location}</h5>
          </div>
          <div className=" bg-white rounded p-4 shadow-lg">
            <h4 className="text-sm font-semibold mb-3 ">Job Description</h4>
            <p className="text-sm font-medium indent-3">{job.description}</p>
            <h5 className="font-semibold text-primary mt-4">Salary</h5>
            <h5 className="text-xs font-semibold mt-2">
              ${job.salary[0]}k - ${job.salary[1]}k / Year
            </h5>
          </div>
        </div>
        <div className="w-full  space-y-3 ">
          <div className="bg-white rounded p-3 shadow-lg mt-2 lg:mt-0 ">
            <h3 className="font-semibold text-sm mb-3">Company Info</h3>
            <h2 className="mb-2">{job.companyName}</h2>
            <p className="text-xs leading-4 indent-3">{job.companyDesc}</p>
            <div className="border-b border-b-teal-400 my-4"></div>
            <h2 className="text-sm font-semibold">Contact Email:</h2>
            <h5 className="bg-primary/10 rounded py-1.5 mb-3 text-sm px-2">
              {job.Email}
            </h5>
            <h2 className="text-sm font-semibold">Contact Phone</h2>
            <h5 className="bg-primary/10 rounded py-1.5 text-xs px-2">
              {job.phone}
            </h5>
          </div>
          <div className="bg-white p-3 shadow-lg rounded space-y-2">
            <h2 className="font-semibold">Mange Jobs</h2>
            <Link
              to={`/edit/${job.uuid}`}
              className="bg-primary py-1.5 rounded block text-white text-center"
            >
              Edit Jobs
            </Link>
            <Link
              to={"/"}
              className="bg-green-800 block py-1.5 rounded text-white text-center"
            >
              Delete Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
