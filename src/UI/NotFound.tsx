import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-fit px-30 py-10 mx-auto shadow-lg mt-20 text-center">
      <FaTriangleExclamation className="w-fit mx-auto text-6xl text-yellow-400" />
      <h1 className="text-4xl font-semibold my-2">404 Not Found</h1>
      <h5 className="mx-auto text-center ">No Job Matched</h5>
      <Link
        to={"/jobs"}
        className="text-sm bg-primary w-fit  text-white px-2 py-1 rounded mx-auto block mt-10"
      >
        return back
      </Link>
    </div>
  );
};

export default NotFound;
