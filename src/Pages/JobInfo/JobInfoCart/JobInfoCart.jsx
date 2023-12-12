import {
  faCalendarDay,
  faHourglass1,
  faLocationDot,
  faMoneyBill1,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JobInfoCart.css";
import OfficeLocation from "../../../Shared/OfficeLocation/OfficeLocation";
import { Link } from "react-router-dom";

const JobInfoCart = ({ dataOfJob, id }) => {
  console.log("job ID", id);
  const {
    companyName,
    companyLogo,
    location,
    jobTitle,
    duration,
    stipend,
    startDate,
    experience,
    workFrom,
    skill,
    whoApply,
    jobName,
  } = dataOfJob;
  const locValue = location;
  console.log(locValue);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center m-5">{jobTitle}</h1>
      <div className="p-5">
        {/* for name and logo */}
        <div className="flex justify-between ">
          <div className="font-semibold">
            <h1 className="mt-3 mb-3">{jobTitle}</h1>
            <p>{companyName}</p>
          </div>
          <div>
            <img src={companyLogo} alt="" />
          </div>
        </div>
        <p className="mt-3  font-semibold">
          {" "}
          <FontAwesomeIcon icon={faLocationDot} className="mr-1  " />
          {workFrom}
        </p>

        {/* this is  for $ start date EXPERIENCE  make them flex */}
        <div className="flex justify-between mt-5 mb-5 w-3/4">
          <div>
            <h2 className="font-semibold mb-1 text-slate-950">
              <FontAwesomeIcon icon={faPlayCircle} className="mr-1" />
              Start Date
            </h2>
            <p className="font-semibold text-gray-600">{startDate}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1 text-slate-950">
              {" "}
              <FontAwesomeIcon icon={faMoneyBill1} className="mr-1" />
              CTC(ANNUAL)
            </h2>
            <p className="font-semibold text-gray-600">$ {stipend}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1 text-slate-950">
              {" "}
              <FontAwesomeIcon icon={faCalendarDay} className="mr-1" />
              DURATION
            </h2>
            <p className="font-semibold text-gray-600">$ {duration}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1 text-slate-950">
              {" "}
              <FontAwesomeIcon icon={faHourglass1} className="mr-1" />
              EXPERIENCE
            </h2>
            <p className="font-semibold text-gray-600">{experience}</p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-1 text-slate-950">
            Skill(s) required
          </h2>

          <div>
            {Array.isArray(skill) && skill.length > 0 ? (
              <div className="flex justify-between w-2/4 gap-1 m-3 font-semibold text-gray-600">
                {skill.map((s, index) => (
                  <div key={index}>{s}</div>
                ))}
              </div>
            ) : (
              <p>No skills specified</p>
            )}
          </div>
        </div>

        {/* part of how can apply  */}
        <div>
          <h2 className="font-semibold mb-1 text-slate-950">Who Can Apply</h2>
          {Array.isArray(whoApply) && whoApply.length > 0 ? (
            <div className="w-3/4 m-3 font-semibold text-gray-600">
              {whoApply.map((s, index) => (
                <div key={index} className="mt-3">
                  {index + 1}. {s}
                </div>
              ))}{" "}
            </div>
          ) : (
            <p>No skills specified</p>
          )}
        </div>
        <Link to={`/takeTest/${jobName}?id=${id}`}>
          <div className="items-center btn btn-neutral">Take a test </div>
        </Link>
      </div>
      <OfficeLocation locValue={locValue}></OfficeLocation>
    </div>
  );
};

export default JobInfoCart;
