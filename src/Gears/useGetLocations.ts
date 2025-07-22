import jobsdata from "../data";

export function useGetLocation() {
  const allLocations: Set<string> = new Set();
  for (let item of jobsdata) {
    allLocations.add(item.location);
  }

  return [...allLocations];
}
