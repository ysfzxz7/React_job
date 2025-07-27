import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./componants/Nav";
import Notification from "./UI/Notification";

function App() {
  return (
    <div className="">
      <div className="bg-primary ">
        <Nav />
      </div>
      <Outlet />
      <Notification />
    </div>
  );
}

export default App;
