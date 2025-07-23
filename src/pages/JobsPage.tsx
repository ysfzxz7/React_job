import JobsCard from "../UI/JobCard";
import JobFilter from "../UI/JobFilter";
import useDateStore from "../stores/useDataStore";

const JobsPage = () => {
  const { jobdata } = useDateStore();

  return (
    <div className="lg:w-[70%] mx-auto mb-20">
      <h1 className="text-4xl font-semibold mx-auto w-fit my-10">
        Browse Jobs
      </h1>

      <JobFilter />
      <div className="grid mx-4 lg:mx-0 md:grid-cols-2 lg:mx:0  lg:grid-cols-3 gap-3 mb-5">
        {jobdata.map((job) => (
          <JobsCard key={job.uuid} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
