import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";

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
        element: <h1>Hello id</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);
