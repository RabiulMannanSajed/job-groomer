import { NavLink, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  //   console.log("User", user?.email);

  const [isAdmin, setIsAdmin] = useState(false);

  const [users] = useUser();

  useEffect(() => {
    // Check if any user has the role of "admin"
    const userInDb = users.find((dbUser) => dbUser?.email === user?.email);
    if (userInDb || null) {
      setIsAdmin(userInDb.role === "admin");
    } else {
      setIsAdmin(false);
    }
  }, [user?.email, users]);
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full text-base-content bg-[#149fea7a]">
            {/* this is fro admin and normal user  */}
            {isAdmin ? (
              <>
                <li className="font-bold">
                  <NavLink to="/dashboard/adminHome"> Admin Home</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="/dashboard/addTutorial"> Add Tutorial</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="/dashboard/manageItems"> Manage Item</NavLink>
                </li>

                <li className="font-bold">
                  <NavLink to="/dashboard/allUsers"> All user</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="font-bold">
                  <NavLink to="/dashboard/userHome">User Home</NavLink>
                </li>{" "}
              </>
            )}

            <div className="divider"></div>
            <li className="font-bold">
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
