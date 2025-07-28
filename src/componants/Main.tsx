import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="flex  justify-center lg:w-[70%] mx-2 md:mx-auto py-5 gap-5 -translate-y-20">
      <div className=" p-4 shadow rounded bg-red-100 w-full hover:bg-yellow-200 cursor-pointer transition-colors duration-500 ">
        <h1 className="text-xl font-semibold">For developers</h1>
        <h5 className="text-xs font-medium">
          Browse our react jobs and start your carreer today
        </h5>
        <Link
          to={"/jobs"}
          className="bg-black w-fit text-white p-2 text-xs block rounded mt-4"
        >
          Browse Jobs
        </Link>
      </div>
      <div className=" p-4 shadow rounded bg-blue-200  w-full transition-colors duration-500  cursor-pointer">
        <h1 className="text-xl font-semibold">For Employers</h1>
        <h5 className="text-xs font-medium">
          List your job to find the perfect developer for the role
        </h5>
        <Link
          to={"/addjob"}
          className="bg-primary w-fit text-white p-2 rounded mt-4 block text-xs"
        >
          Add Job
        </Link>
      </div>
    </main>
  );
};

export default Main;
