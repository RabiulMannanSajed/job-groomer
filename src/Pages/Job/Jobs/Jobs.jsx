import { useEffect, useState } from "react";
import JobsCard from "../JobsCard/JobsCard";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobSearch, setJobSearch] = useState([]);
  const [filteredItem, setFilterItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/office")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  // this is for search
  useEffect(() => {
    fetch("http://localhost:5000/office")
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
  return (
    <div>
      <div className="flex justify-evenly bg-[#64748b] p-5">
        <div className="text-center text-xl text-white">
          <h1 className="text-xl font-bold">Internships</h1>
          <p>as per your preferences</p>
        </div>
        <div>
          <div className="navbar-end">
            <div className="flex">
              <div>
                <input
                  className="input input-bordered w-24 md:w-auto text-black"
                  type="text"
                  onBlur={handleSearch}
                  placeholder="Search by category"
                />
              </div>
              <div>
                <label htmlFor="my_modal_6" className="btn btn-sm ml-3 mt-3">
                  Search
                </label>
              </div>
            </div>

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
                        <Link
                          to={`/jobInfo/${item._id} `}
                          className="btn btn-warning mt-5"
                        >
                          See Details
                        </Link>
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
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
