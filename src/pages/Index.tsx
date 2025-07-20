import Hero from "../componants/Hero";
import Jobs from "../componants/Jobs";
import Main from "../componants/Main";

const Index = () => {
  return (
    <>
      <Hero />
      <Main />
      <div className="bg-primary/5">
        <Jobs />
      </div>
    </>
  );
};

export default Index;
