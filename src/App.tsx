import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./componants/Nav";

function App() {
  return (
    <div className="">
      <div className="bg-primary ">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
