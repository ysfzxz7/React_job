import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex text-white justify-between items-center lg:mx-32 p-4 border-b">
      <h1 className="text-2xl font-bold">React Jobs</h1>
      <div className="flex gap-4 items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-black px-2 rounded py-1" : "bg-none"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive ? "bg-black px-2 rounded py-1" : "bg-none"
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to={"addJob"}
          className={({ isActive }) =>
            isActive ? "bg-black px-2 rounded py-1 " : "bg-none"
          }
        >
          Add Job
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
