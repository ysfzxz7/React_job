import Hero from "../componants/Hero";
import Jobs from "../componants/Jobs";
import Main from "../componants/Main";
import OurServices from "../componants/OurServices";
import Testemonial from "../componants/Testemonial";

const Index = () => {
  return (
    <>
      <Hero />
      <div className="bg-primary/5">
        <Main />
        <Jobs />
      </div>
      <OurServices />
      <Testemonial />
    </>
  );
};

export default Index;
