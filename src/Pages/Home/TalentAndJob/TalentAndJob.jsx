import { Link } from "react-router-dom";

const TalentAndJob = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <Link to="/postAJob">
            <button className="btn btn-success text-xl mr-3">
              Search A Job
            </button>
          </Link>
        </div>
        <div>
          <Link to="/postAJob">
            <button className="btn btn-success text-xl mr-3">
              Find A Talent
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default TalentAndJob;
