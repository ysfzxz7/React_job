import recruitment from "../assets/job-seeker.png";
import devlopment from "../assets/computer-engineer.png";
import branding from "../assets/public-relation.png";

const OurServices = () => {
  return (
    <div className="mx-10 p-5">
      <h1 className="text-lg font-bold">Our services</h1>
      <div className="grid lg:grid-cols-3  gap-5 ">
        <div className="shadow-lg relative p-5 group cursor-pointer rounded flex flex-col items-center gap-2 overflow-hidden  ">
          <div className="bg-yellow-400 translate-y-[100%] group-hover:-translate-y-0 w-[100%] h-[100%] absolute top-0 rounded -z-1 transition-all duration-1000 "></div>
          <img src={recruitment} className="max-w-[100%] w-30" alt="" />
          <h1 className="font-bold text-xl">
            Tech Talent Sourcing & Headhunting
          </h1>
          <p className="text-sm indent-2 text-justify">
            Struggling to find niche developers? Our specialized headhunting
            service targets passive candidates with the exact skills your
            company needs. We handpick professionals from our global network and
            deliver curated shortlists.
          </p>

          <h3 className="text-xs">
            <span className="font-semibold">Ideal For: </span>Startups, tech
            Companies needing rare or senior-level tech talent.
          </h3>
        </div>
        <div className="shadow-lg relative p-5 group cursor-pointer rounded flex flex-col items-center gap-2 overflow-hidden  ">
          <div className="bg-yellow-400 translate-y-[100%] group-hover:-translate-y-0 w-[100%] h-[100%] absolute top-0 rounded -z-1 transition-all duration-1000 "></div>
          <img src={devlopment} className="max-w-[100%] w-30" alt="" />
          <h1 className="font-bold text-xl">Premium Developer Recruitment</h1>
          <p className="text-sm indent-2 text-justify">
            We connect top-tier companies with highly skilled developers across
            various domains (web, mobile, AI, blockchain, and more). Our
            advanced matching algorithm and expert vetting process ensure you
            hire the best talent quickly and efficiently.
          </p>

          <h3 className="text-xs">
            <span className="font-semibold">Ideal For: </span>Startups, tech
            firms, and enterprises looking for elite developers.
          </h3>
        </div>
        <div className="shadow-lg relative p-5 group cursor-pointer rounded flex flex-col items-center gap-2 overflow-hidden  ">
          <div className="bg-yellow-400 translate-y-[100%] group-hover:-translate-y-0 w-[100%] h-[100%] absolute top-0 rounded -z-1 transition-all duration-1000 "></div>
          <img src={branding} className="max-w-[100%] w-30" alt="" />
          <h1 className="font-bold text-xl">
            Employer Branding & Job Promotion
          </h1>
          <p className="text-sm indent-2 text-justify">
            Stand out in a competitive job market with our employer branding and
            job promotion packages. We amplify your job postings across our
            platform, social media, and developer communities to attract the
            right candidates.
          </p>

          <h3 className="text-xs">
            <span className="font-semibold">Ideal For: </span>Startups, tech
            Startups and scale-ups looking to boost their hiring reach.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
