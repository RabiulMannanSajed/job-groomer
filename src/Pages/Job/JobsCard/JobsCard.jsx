import {
  faCalendarDay,
  faHourglass1,
  faLocationDot,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const JobsCard = ({ job }) => {
  const { user } = useContext(AuthContext);
  const {
    companyName,
    companyLogo,
    stipend,
    workFrom,
    jobTitle,
    experience,
    startDate,
    _id,
  } = job;
  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    console.log(comment);
    console.log(companyName);
    console.log(user?.email);
    const commentInfo = {
      comment: comment,
      commentOnComp: companyName,
      commentator: user?.email,
    };
    fetch(`http://localhost:5000/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("User created successfully");
        }
      });
    comment.value = "";
  };
  return (
    <div className="border-spacing-16 shadow-xl p-5 rounded">
      {/* here take the company name and the logo  */}
      <div className="flex justify-between mb-2 items-center ">
        <div>
          <h1 className="text-lg font-bold w font-sans">{jobTitle}</h1>
          <p className="font-sans  mt-3">{companyName}</p>
        </div>
        <div>
          <img src={companyLogo} className="w-20 h-12" alt="" />
        </div>
      </div>
      {/* 1st end  */}

      {/* this is for work from */}
      <div>
        <h1>
          <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
          {workFrom}
        </h1>
      </div>

      {/* this is  for $ start date EXPERIENCE  make them flex */}
      <div className="flex justify-between mt-5 mb-5">
        <div>
          <h2>
            <FontAwesomeIcon icon={faCalendarDay} className="mr-1" />
            Start Date
          </h2>
          <p> {startDate}</p>
        </div>
        <div>
          <h1>
            <FontAwesomeIcon icon={faMoneyBill1} className="mr-1" />
            CTC(ANNUAL)
          </h1>
          <p>{stipend}</p>
        </div>
        <div>
          <h1>
            {" "}
            <FontAwesomeIcon icon={faHourglass1} className="mr-1" />
            EXPERIENCE
          </h1>
          <p>{experience}</p>
        </div>
      </div>

      <Link to={`/jobInfo/${_id}`}>
        <button className="btn btn-warning sticky ">View Details</button>
      </Link>

      {/* this is for doing comment  */}
      <div>
        <form onSubmit={handleComment}>
          <label className="label">
            <span className="label-text font-bold text-xl">Comment </span>
          </label>
          <input
            type="name"
            placeholder="Comment "
            name="comment"
            className="input input-bordered"
            required
          />
          <div className="flex justify-between ">
            <div className=" mt-6">
              <input className="btn btn-warning" type="submit" value="→" />
            </div>
            <Link to={`/viewComment/${companyName}`}>
              <div className="mt-5">
                <div className="btn btn-info">view Comment </div>
              </div>
            </Link>
          </div>
        </form>
      </div>
      {/* this is for view comment */}
    </div>
  );
};

export default JobsCard;
