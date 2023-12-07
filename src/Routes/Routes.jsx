import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Jobs from "../Pages/Job/Jobs/Jobs";
import JobInfo from "../Pages/JobInfo/JobInfo/JobInfo";
import TakeTest from "../Pages/Test/TakeTest/TakeTest";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Apply from "../Pages/Apply/Apply";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/apply",
        element: <Apply></Apply>,
      },
    ],
  },
]);
