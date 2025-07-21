import { Link, useParams } from "react-router-dom";

const SingleJob = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div className="bg-blue-100 lg:px-40 pb-4 mx-auto h-[100vh]">
      <Link to="/" className="bg-white w-[100%] block py-2 font-semibold">
        Back to Job Listing
      </Link>
      <div className="flex my-10 gap-3">
        <div className=" h-fit space-y-3">
          <div className="bg-white rounded p-4 shadow-lg space-y-2">
            <h4 className="text-xs">Full Time</h4>
            <h1 className="font-semibold text-xl">Senior React Developer</h1>
            <h5 className="text-xs">Boston, MA</h5>
          </div>
          <div className=" bg-white rounded p-4 shadow-lg">
            <h4 className="text-sm font-semibold mb-3 ">Job Description</h4>
            <p className="text-sm font-medium indent-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              explicabo voluptatem, blanditiis voluptatum fugit eos similique
              odit quis, doloremque incidunt assumenda, inventore eveniet
              deserunt! Sapiente commodi suscipit dolor repellat ullam? Saepe
              maiores deleniti iste, voluptas aperiam ipsam quis nostrum porro
              aliquid
            </p>
            <h5 className="font-semibold text-primary mt-4">Salary</h5>
            <h5 className="text-xs font-semibold mt-2">$70k - $80k / Year</h5>
          </div>
        </div>
        <div className=" lg:w-[70%] space-y-3 ">
          <div className="bg-white rounded p-3 shadow-lg">
            <h3 className="font-semibold text-sm mb-3">Company Info</h3>
            <h2 className="mb-2">NewTek Solutions</h2>
            <p className="text-xs leading-4 indent-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              architecto soluta error modi mollitia porro incidunt animi beatae
              assumenda pariatur molestias voluptate excepturi, facilis
              obcaecati laborum corrupti ab illum unde!
            </p>
            <div className="border-b border-b-teal-400 my-4"></div>
            <h2 className="text-sm font-semibold">Contact Email:</h2>
            <h5 className="bg-primary/10 rounded py-1.5 mb-3 text-sm px-2">
              contact@teksolution.com
            </h5>
            <h2 className="text-sm font-semibold">Contact Phone</h2>
            <h5 className="bg-primary/10 rounded py-1.5 text-xs px-2">
              +123 456 789
            </h5>
          </div>
          <div className="bg-white p-3 shadow-lg rounded space-y-2">
            <h2 className="font-semibold">Mange Jobs</h2>
            <Link
              to={"/"}
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
