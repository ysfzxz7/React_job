import { create } from "zustand";
import jobsdata from "../data";
import type { jobsType } from "../type";

interface useDateStoreType {
  jobdata: jobsType[];
  typeFilter: (type: string) => void;
  locationFilter: (location: string) => void;
  keyWord: (word: string) => void;
}
const useDateStore = create<useDateStoreType>((set) => ({
  //all the data found
  jobdata: jobsdata,

  //to filter the data based on the type
  typeFilter: (type) =>
    set(() => ({ jobdata: jobsdata.filter((item) => item.jobtype == type) })),

  //to filter the data based on the location
  locationFilter: (location) =>
    set(() => ({
      jobdata: jobsdata.filter((item) => item.location == location),
    })),

  //to filter the data based on the keyword entered , todo soon
  keyWord: (word) =>
    set(() => ({
      jobdata: jobsdata.filter((item) => {
        return item.description.toLowerCase().includes(word.toLowerCase());
      }),
    })),
}));

export default useDateStore;
