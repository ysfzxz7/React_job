import Hero from "../componants/Hero";
import Jobs from "../componants/Jobs";
import Main from "../componants/Main";
import OurServices from "../componants/OurServices";

const Index = () => {
  return (
    <>
      <Hero />
      <div className="bg-primary/5">
        <Main />
        <Jobs />
      </div>
      <OurServices />
    </>
  );
};

export default Index;
