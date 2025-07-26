import usePagination from "../stores/usePagination";
interface jobIndexProps {
  len: number;
  nOfPages: number;
}

const JobIndex: React.FC<jobIndexProps> = ({ len, nOfPages }) => {
  const { next, back, page, numOfItems } = usePagination();
  console.log(len, numOfItems);
  return (
    <div className="flex  gap-x-3 justify-end">
      <button
        onClick={back}
        className={` ${
          page == 1 && "hidden"
        } bg-black text-white px-3 rounded text-xs cursor-pointer`}
      >
        back
      </button>
      <h5 className="border  rounded px-3">
        {page}/{nOfPages}
      </h5>
      <button
        onClick={next}
        className={`${
          len < numOfItems && "hidden"
        } bg-black text-white px-3 rounded text-xs cursor-pointer`}
      >
        next
      </button>
    </div>
  );
};

export default JobIndex;
