import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Home from "./Components/Home/Home";
// import ErrorPage from "./Components/ErrorPage/ErrorPage";
// import Statistic from "./Components/Statistic/Statistic";
// import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
// import Blog from "./Components/Blog/Blog";
import App from "./App";
// import JobDetails from "./Components/JobDetails/JobDetails";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch('/category.json'),
      },

      // {
      //   path: "statistic",
      //   element: <Statistic/>,
      // },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
   
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);