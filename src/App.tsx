import "./App.css";
import Hero from "./componants/Hero";
import Jobs from "./componants/Jobs";
import Main from "./componants/Main";
import Nav from "./componants/Nav";

function App() {
  return (
    <div className="">
      <div className="bg-primary ">
        <Nav />
        <Hero />
      </div>
      <Main />
      <div className="bg-primary/5">
        <Jobs />
      </div>
    </div>
  );
}

export default App;
