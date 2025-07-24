import useDateStore from "../stores/useDataStore";

const KeyWordFilter = () => {
  const { keyWord } = useDateStore();
  return (
    <div>
      search
      <input
        onChange={(e) => keyWord(e.target.value)}
        type="text"
        className="input-base"
      />
    </div>
  );
};

export default KeyWordFilter;
