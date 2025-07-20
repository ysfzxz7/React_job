const JobsCard = () => {
  return (
    <div className=" p-2 shadow-xl rounded bg-white">
      <h5 className="text-xs font-semibold">Full-Time</h5>
      <h1 className="text-lg font-semibold mb-3"> Senior React Developer</h1>
      <p className="line-clamp-2 text-xs ">
        We are loking Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quod earum nesciunt nemo atque veniam numquam amet iure labore quasi
        sequi molestiae repellat temporibus quia quam porro obcaecati veritatis,
        ad sint.
      </p>
      <h5 className="text-xs font-semibold text-primary mb-3">More</h5>
      <span className="text-sm font-semibold text-primary ">
        $70K - 80K year
      </span>
      <div className="text-xs flex border-t  border-primary/20 pt-3 items-center justify-between">
        <span className="font-semibold">Biston, MA</span>
        <span className="text-white bg-primary hover:bg-primary/90  font-medium rounded text-xs px-2 py-1.5   ">
          Read More
        </span>
      </div>
    </div>
  );
};

export default JobsCard;
