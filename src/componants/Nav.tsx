import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex text-white justify-between items-center lg:mx-32 p-4 border-b">
      <h1 className="text-2xl font-bold">React Jobs</h1>
      <div className="flex gap-4 items-center">
        <Link to={"/"} className=" bg-black rounded px-2 py-1">
          Home
        </Link>
        <Link to="/jobs" className=" ">
          Jobs
        </Link>
        <h1 className="cursor-pointer ">Add Job</h1>
      </div>
    </div>
  );
};

export default Nav;
