import { Link } from "react-router-dom";
import useOffice from "../../../hooks/useOffice";
import FewJobsCard from "../FewJobsCard/FewJobsCard";

const FewJobs = () => {
  const [office] = useOffice();

  console.log(office.length);
  const jobsToDisplay = office.slice(0, 6);
  console.log("Only 6 data show", jobsToDisplay);

  return (
    <div>
      <div className="text-center text-xl ">
        <h1 className="text-xl font-bold">Internships</h1>
        <p>as per your preferences</p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {jobsToDisplay.map((job) => (
          <FewJobsCard key={job._id} job={job}></FewJobsCard>
        ))}
      </div>

      <Link to="/jobs">
        <div className="btn bg-[#fb923c] m-5 font-bold text-lg">
          See All Jobs
        </div>
      </Link>
    </div>
  );
};

export default FewJobs;
