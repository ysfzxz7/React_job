import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import JobsPage from "./pages/JobsPage";

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
        element: <h1>with id</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);
