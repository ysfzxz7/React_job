import jobsdata from "../data";
import type { jobsType } from "../type";

export function useFilter(typeFilter: string): jobsType[] {
  const newData = jobsdata.filter((item) => {
    return item.jobtype == typeFilter;
  });

  return newData;
}
