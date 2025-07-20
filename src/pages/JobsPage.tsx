import JobsCard from "../UI/JobCard";

const JobsPage = () => {
  return (
    <div className="lg:w-[70%] mx-auto">
      <h1 className="text-4xl font-semibold mx-auto w-fit my-10">
        Browse Jobs
      </h1>
      <div className="grid grid-cols-3 gap-3">
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
      </div>
    </div>
  );
};

export default JobsPage;
