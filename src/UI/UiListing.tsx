import useUiListing from "../stores/useUiListing";
import { MdFormatListBulleted } from "react-icons/md";
import { PiCards } from "react-icons/pi";

const UiListing = () => {
  const { setCard, setList } = useUiListing();
  return (
    <div className="flex gap-2 justify-end mb-3">
      <PiCards onClick={setCard} className="text-2xl cursor-pointer" />
      <MdFormatListBulleted
        onClick={setList}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
};

export default UiListing;
