import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import JobsPage from "./pages/JobsPage";
import SingleJob from "./pages/SingleJob";

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
