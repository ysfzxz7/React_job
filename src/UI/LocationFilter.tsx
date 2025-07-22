import { useGetLocation } from "../Gears/useGetLocations";

const LocationFilter = () => {
  const allLocation = useGetLocation();

  return (
    <div className="flex items-center">
      <h1>Location</h1>
      <select className="input-base" name="Location" id="">
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
