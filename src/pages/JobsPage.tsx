import jobsdata from "../data";
import JobsCard from "../UI/JobCard";

const JobsPage = () => {
  console.log(jobsdata);

  return (
    <div className="lg:w-[70%] mx-auto">
      <h1 className="text-4xl font-semibold mx-auto w-fit my-10">
        Browse Jobs
      </h1>
      <div className="grid mx-4 md:grid-cols-2 lg:mx:0  lg:grid-cols-3 gap-3 mb-20">
        {jobsdata.map((job) => (
          <JobsCard job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
