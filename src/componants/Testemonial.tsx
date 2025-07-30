import { useState } from "react";
import { review } from "../data";
import { MdArrowOutward } from "react-icons/md";

import TestemonialCard from "../UI/TestemonialCard";

const Testimonial = () => {
  const [x, setx] = useState(0);

  const handleNext = () => {
    if (x >= 900) {
      setx(0);
    } else {
      setx((prev) => prev + 100);
      console.log(x);
    }
  };
  return (
    <section className="my-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Developers Say
      </h2>
      <div className="">
        <div className="flex  p-2 overflow-hidden">
          {review.map((item) => (
            <div
              key={item.name}
              className={`w-full flex-shrink-0 px-2  transition-all duration-700 flex justify-center`}
              style={{
                transform: `translateX(-${x}%)`,
              }}
            >
              <TestemonialCard
                name={item.name}
                quote={item.quote}
                rating={item.rating}
                company={item.company}
                key={item.name}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className=" mx-auto bg-orange-400 flex rounded-full h-15 w-15   cursor-pointer  justify-center items-center"
        onClick={handleNext}
      >
        <MdArrowOutward size={28} className="font-thin" />
      </button>
    </section>
  );
};

export default Testimonial;
