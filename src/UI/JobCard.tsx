import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import type { jobsType } from "../type";
import { useRef } from "react";

interface childjob {
  job: jobsType;
}

const JobsCard: React.FC<childjob> = ({ job }) => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 5 }}
      animate={isView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" p-2  duration-300 shadow-xl rounded bg-white"
    >
      <h5 className="text-xs font-semibold">{job.jobtype}</h5>
      <h1 className="text-lg font-semibold mb-3"> {job.title}</h1>
      <p className="line-clamp-2 text-xs ">{job.description}</p>
      <h5 className="text-xs font-semibold text-primary mb-3">More</h5>
      <span className="text-sm font-semibold text-primary ">
        ${job.salary[0]}K - {job.salary[1]}K year
      </span>
      <div className="text-xs flex border-t  border-primary/20 pt-3 items-center justify-between">
        <span className="font-semibold">{job.location}</span>
        <Link
          to={`/jobs/${job.uuid}`}
          className="text-white bg-primary hover:bg-primary/90  font-medium rounded text-xs px-2 py-1.5   "
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default JobsCard;
