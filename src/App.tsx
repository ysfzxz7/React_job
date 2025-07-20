import "./App.css";
import Hero from "./componants/Hero";
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
    </div>
  );
}

export default App;
