import { z } from "zod";

export type jobsType = {
  uuid: string;
  jobtype: string;
  title: string;
  location: string;
  description: string;
  salary: number[];
  companyName: string;
  companyDesc: string;
  Email: string;
  phone: string;
};

export const formSchema = z.object({
  jobType: z.enum(["Full Time", "Remote", "Part Time", "Internship"]),
  jobTitle: z
    .string("Job Title must be a string")
    .min(4, "Job title must be more than 3 letters"),
  jobDescription: z
    .string("This filed is required")
    .min(30, "Job description must be more than 30 letter"),
  jobMinSalary: z.number("Min salary must be a number"),
  jobMaxSalary: z.number("Min salary must be a number"),
  jobLocation: z.string(),
  companyName: z
    .string()
    .max(30, "Company Name must be min than 30 charachter"),
  companyDescription: z
    .string()
    .min(30, "Company description must be more than 30 letter"),
  companyEmail: z.email("Enter a valid email"),
  companyPhone: z.string().min(10, "Enter a valid number"),
});

export type reviewType = {
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  quote: string;
};
