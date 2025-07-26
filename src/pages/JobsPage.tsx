import JobsCard from "../UI/JobCard";
import JobFilter from "../UI/JobFilter";
import UiListing from "../UI/uiListing";
import JobIndex from "../componants/JobsIndex";
import useDateStore from "../stores/useDataStore";
import usePagination from "../stores/usePagination";
import useUiListing from "../stores/useUiListing";

const JobsPage = () => {
  const { jobdata } = useDateStore();
  const { index, numOfItems } = usePagination();
  const { listType } = useUiListing();
  const toShow = jobdata.slice(index, numOfItems + index);

  const nofPages = jobdata.length / numOfItems;
  console.log(nofPages);
  return (
    <div className="lg:w-[70%] mx-auto mb-20">
      <h1 className="text-4xl font-semibold mx-auto w-fit my-10">
        Browse Jobs
      </h1>

      <JobFilter />
      <UiListing />
      <div
        className={`${
          listType == "card"
            ? "grid mx-4 lg:mx-0 md:grid-cols-2 lg:mx:0  lg:grid-cols-3 gap-3 "
            : "flex-col"
        } mb-5 space-y-2`}
      >
        {toShow.map((job) => (
          <JobsCard key={job.uuid} job={job} />
        ))}
      </div>
      <JobIndex len={toShow.length} nOfPages={Math.round(nofPages) + 1} />
    </div>
  );
};

export default JobsPage;
