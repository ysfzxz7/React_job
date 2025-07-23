import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import JobsPage from "./pages/JobsPage";
import SingleJob from "./pages/SingleJob";
import AddJob from "./pages/AddJob";
import NotFound from "./UI/NotFound";
import EditJob from "./pages/EditJob";

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
      {
        path: "edit/:id",
        element: <EditJob />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
