import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import JobsPage from "./pages/JobsPage";
import SingleJob from "./pages/SingleJob";
import AddJob from "./pages/AddJob";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
        index: true,
      },
      {
        path: "/jobs",
        element: <JobsPage />,
        errorElement: <div>Something wrong happend</div>,
      },
      {
        path: "addJob",
        element: <AddJob />,
      },
      {
        path: "jobs/:id",
        element: <SingleJob />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);
