const Nav = () => {
  return (
    <div className="flex text-white justify-between items-center lg:mx-32 p-4 border-b">
      <h1 className="text-2xl font-bold">React Jobs</h1>
      <div className="flex gap-4 items-center">
        <h1 className="cursor-pointer bg-black rounded px-2 py-1">Home</h1>
        <h1 className="cursor-pointer ">Jobs</h1>
        <h1 className="cursor-pointer ">Add Job</h1>
      </div>
    </div>
  );
};

export default Nav;
