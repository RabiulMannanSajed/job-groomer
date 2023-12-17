import { Link } from "react-router-dom";
import logo from "../../assets/img/jobentryLogo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  // this is for logOut
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Successfully logOut");
      })
      .catch((error) => console.log(error));
  };

  const navbarItem = (
    <>
      <li className="text-green-500 hover:text-black text-xl">
        <Link to="/">Home </Link>
      </li>
      <li className="text-green-500 hover:text-black text-xl">
        <Link to="/about">About</Link>
      </li>
      {user ? (
        // if user then it work
        <>
          <li className="text-green-500 hover:text-black text-xl">
            <Link to="/dashboard/userHome">See more Info</Link>
          </li>
        </>
      ) : (
        /* if user not this time don't show  */
        <></>
      )}
      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-active btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          {" "}
          <li className="text-green-500 hover:text-black text-xl">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
      <li className="text-green-500 hover:text-black text-xl">
        <Link to="/seeTutorial">See Tutorial </Link>
      </li>{" "}
    </>
  );
  return (
    <div className="navbar bg-opacity-30 bg-slate-500 h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItem}
          </ul>
        </div>
        <img src={logo} className="w-1/4" alt="" />

        <label>
          <small className="font-bold text-orange-600">JOB ENTRY</small>
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarItem}</ul>
      </div>
    </div>
  );
};

export default NavBar;
