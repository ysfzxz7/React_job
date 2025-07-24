import useDateStore from "../stores/useDataStore";

const KeyWordFilter = () => {
  const { keyWord } = useDateStore();
  return (
    <div className="flex items-center">
      <h4 className="input-label">Search</h4>
      <input
        onChange={(e) => keyWord(e.target.value)}
        type="text"
        className="input-base"
      />
    </div>
  );
};

export default KeyWordFilter;
