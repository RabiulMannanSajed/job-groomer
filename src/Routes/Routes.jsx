import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Jobs from "../Pages/Job/Jobs/Jobs";
import JobInfo from "../Pages/JobInfo/JobInfo/JobInfo";
import TakeTest from "../Pages/Test/TakeTest/TakeTest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/jobInfo/:id",
        element: <JobInfo></JobInfo>,
        loader: () => fetch("http://localhost:5000/office"),
      },
      {
        path: "/takeTest/:jobName",
        element: <TakeTest></TakeTest>,
        loader: () => fetch("http://localhost:5000/ques"),
      },
    ],
  },
]);
