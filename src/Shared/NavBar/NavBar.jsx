import { Link } from "react-router-dom";
import logo from "../../assets/img/jobentryLogo.png";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [jobSearch, setJobSearch] = useState([]);
  const [filteredItem, setFilterItem] = useState([]);

  useEffect(() => {
    fetch("office.json")
      .then((res) => res.json())
      .then((data) => setJobSearch(data));
  }, []);

  const handleSearch = (event) => {
    const searchJob = event.target.value;
    if (searchJob) {
      const filtered = jobSearch.filter((job) => job.jobName === searchJob);
      setFilterItem(filtered);
    } else {
      setFilterItem([]);
    }
  };

  const navbarItem = (
    <>
      <li className="text-green-500 hover:text-black text-xl">
        <Link to="/">Home </Link>
      </li>
      <li className="text-green-500 hover:text-black text-xl">
        <Link to="/about">About</Link>
      </li>
      <li className="text-green-500 hover:text-black text-xl">
        <Link>jobs</Link>
      </li>
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

      <div className="navbar-end">
        <div>
          <input
            className="input input-bordered w-24 md:w-auto text-black"
            type="text"
            onBlur={handleSearch}
            placeholder="Search by category"
          />
        </div>
        <label htmlFor="my_modal_6" className="btn btn-sm">
          Search
        </label>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <div className="grid grid-cols-2 gap-5">
              {/* condition ? true : false */}
              {filteredItem.length > 0 ? (
                filteredItem.map((item) => (
                  <div key={item._id}>
                    <p className="text-black text-amber-500 text-xl">
                      {item.companyName}
                    </p>

                    <p className="text-black"> {item.jobTitle}</p>
                  </div>
                ))
              ) : (
                <p className="text-red-500 ">No items found.</p>
              )}
            </div>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn bg-orange-500">
                Close
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-success rounded-0 py-4 px-lg-5 d-none d-lg-block">
          APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default NavBar;
