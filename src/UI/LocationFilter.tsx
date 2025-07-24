import { useGetLocation } from "../Gears/useGetLocations";
import useDateStore from "../stores/useDataStore";

const LocationFilter = () => {
  const allLocation = useGetLocation();
  const { locationFilter } = useDateStore();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    locationFilter(e.target.value);
  };
  return (
    <div className="flex items-center">
      <h4 className="input-label">Location</h4>
      <select
        className="input-base"
        name="Location"
        onChange={handleChange}
        id=""
      >
        {allLocation?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationFilter;
