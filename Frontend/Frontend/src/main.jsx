import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Statistic from "./Components/Statistic/Statistic";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import App from "./App";
import JobDetails from "./Components/JobDetails/JobDetails";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FAQPage from "./Components/FAQ/Faq";
import Userdetails from "./Components/Profile/Profile";
import Subscribe from "./Components/Subscribe/Subscribe";
import Switch from "./Components/Switch/Switch";
import Adlogin from "./Components/Admin/AdLogin";
import Update from "./Components/Admin/Update";
import Jobs from "./Components/JobSection/Jobs";
import Userprofile from "./Components/Profile/UProfile";
import EditDeleteJob from "./Components/JobSection/EDJobs";
import ParentComponent from "./Components/JobSection/EDJobs";
import Contact from "./Components/Contact/Contact";
import AccountReviews from "./Components/Contact/AccReview";
import JobForm from "./Components/JobSection/JobForm";
import ShowJob from "./Components/JobSection/ShowJob";
// import MainComponent from "./MainC";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Switch />
      },
      
      {
        path: "/a",
        element: <Jobs />
      },
      {
        path: "/update",
        element: <ParentComponent />
      },
      // {
      //   path: "/update",
      //   element: <JobForm />
      // },
      {
        path: "/adlogin",
        element: <Adlogin/>
      },
      {
        path: "/up",
        element: <Update/>
      },
      {
        path: "/show",
        element: <ShowJob/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/accreview",
        element: <AccountReviews/>
      },
      
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch('/category.json'),
      },

      {
        path: "statistic",
        element: <Statistic/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
      {
        path: "subscribe",
        element: <Subscribe/>,
      },
   
      {
        path: "appliedjobs",
        element: <AppliedJobs/>,
      },
      {
        path: "profile",
        element: <Userdetails/>,
      },
      {
        path: "uprofile",
        element: <Userprofile/>,
      },
      {
        path: "details",
        element: <JobDetails/>,
      },
      {
        path: "faq",
        element: <FAQPage/>,
      },
      {
        path: "details/:id",
        element: <JobDetails />,
        loader: () => fetch('/company.json'),
        // loader: ({ params }) => fetch(`company.json/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);