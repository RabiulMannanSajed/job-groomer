import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Jobs from "../Pages/Job/Jobs/Jobs";
import JobInfo from "../Pages/JobInfo/JobInfo/JobInfo";
import TakeTest from "../Pages/Test/TakeTest/TakeTest";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Apply from "../Pages/Apply/Apply";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PostAjob from "../Pages/PostAjob/PostAjob";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import ViewComment from "../Pages/ViewComment/ViewComment";
import AddTutorial from "../Pages/Dashboard/AddTutorial/AddTutorial";
import SeeTutorial from "../Pages/SeeTutorial/SeeTutorial";
import FewJobs from "../Pages/FewJobs/FewJobs/FewJobs";
import MakeQue from "../Pages/Dashboard/MakeQue/MakeQue";

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
        path: "/postAJob",
        element: <PostAjob></PostAjob>,
      },
      {
        path: "/fewJobs",
        element: <FewJobs></FewJobs>,
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
        path: "/apply/:jobName",
        element: <Apply></Apply>,
        loader: () => fetch("http://localhost:5000/office"),
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
      {
        path: "/viewComment/:companyName",
        element: <ViewComment></ViewComment>,
        loader: () => fetch("http://localhost:5000/talk"),
      },
      {
        path: "/seeTutorial/:jobName",
        element: <SeeTutorial></SeeTutorial>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "addTutorial",
        element: <AddTutorial></AddTutorial>,
      },
      {
        path: "makeQue",
        element: <MakeQue></MakeQue>,
      },
    ],
  },
]);
