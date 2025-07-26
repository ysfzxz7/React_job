import { useForm } from "react-hook-form";
import type z from "zod";
import { formSchema } from "../type";
import { zodResolver } from "@hookform/resolvers/zod";

const AddJob = () => {
  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onsubmit = (data: any) => {
    console.log("form data", data);
    // apeend the data into a formdata and send it using useQuery to the server
  };

  return (
    <div className="bg-amber-100 py-10 ">
      <form
        className="flex flex-col  rounded lg:w-[40%] mx-2 lg:mx-auto bg-white shadow-lg px-3 py-5 "
        onSubmit={handleSubmit(onsubmit)}
      >
        <h1 className="font-bold text-lg mb-3">Add Job</h1>
        <label htmlFor="type" className="input-label">
          Job Type
        </label>
        <select id="" className="input-base" {...register("jobType")}>
          <option value="Full Time">Full Time</option>
          <option value="Remote">Remote</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
        </select>
        <label htmlFor="type" className="input-label">
          Job Listing Name
        </label>
        <input
          {...register("jobTitle")}
          className="input-base "
          placeholder="Enter a Job title"
          type="text"
        />
        {errors.jobTitle && (
          <p className="error-style">{errors.jobTitle.message}</p>
        )}

        <label htmlFor="type" className="input-label">
          Job Description
        </label>
        <textarea
          {...register("jobDescription")}
          id="description"
          className="input-base"
          rows={5}
          placeholder="Enter job description ..."
        ></textarea>
        {errors.jobDescription && (
          <p className="error-style">{errors.jobDescription.message}</p>
        )}

        <label className="input-label" htmlFor="type">
          Salary
        </label>
        <div className=" flex justify-between">
          <div className="w-full flex">
            <h5 className="mt-1.5 text-sm font-semibold">From</h5>
            <input
              className="input-base mr-4 "
              {...register("jobMinSalary")}
              placeholder="Enter your salary"
              type="text"
            />
          </div>
          <div className="w-full flex items-start ">
            <h5 className="mt-1.5 text-sm font-semibold">To</h5>
            <input
              {...register("jobMaxSalary")}
              className="input-base   w-full"
              placeholder="Enter your salary"
              type="text"
            />
          </div>
        </div>

        <label className="input-label" htmlFor="type">
          Location
        </label>
        <input
          {...register("jobLocation")}
          className="input-base"
          placeholder="Enter your Location"
          type="text"
        />

        <h1 className="font-semibold mb-3">Company Info</h1>

        <label htmlFor="type" className="input-label">
          Company Name
        </label>
        <input
          {...register("companyName")}
          className="input-base"
          placeholder="Enter Company Name"
          type="text"
        />
        <label htmlFor="type" className="input-label">
          Company Description
        </label>
        <textarea
          {...register("companyDescription")}
          id="description"
          className="input-base"
          rows={5}
          placeholder="Enter compnay description ..."
        ></textarea>

        <label htmlFor="type" className="input-label">
          Company Email
        </label>
        <input
          {...register("companyEmail")}
          className="input-base"
          placeholder="Enter Company Email"
          type="text"
        />
        {errors.companyEmail && (
          <p className="error-style">{errors.companyEmail.message}</p>
        )}
        <label htmlFor="type" className="input-label">
          Company Phone
        </label>
        <input
          {...register("companyPhone")}
          className="input-base"
          placeholder="Enter Phone number +212 61 23456"
          type="text"
        />
        {errors.companyPhone && (
          <p className="error-style">{errors.companyPhone.message}</p>
        )}

        <div className="text-center gap-x-4 flex items-center justify-center mt-3">
          <button
            type="submit"
            className="bg-primary text-xs px-2 text-white font-semibold rounded py-1.5"
          >
            Add Job
          </button>
          <button className="bg-white text-xs text-primary font-semibold rounded py-1.5 hover:bg-amber-100 px-2 cursor-pointer">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
