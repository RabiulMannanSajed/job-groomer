import {
  faCalendarDay,
  faHourglass1,
  faLocationDot,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { AuthContext } from "../../../Provider/AuthProvider";
import useComment from "../../../hooks/useComment";

const FewJobsCard = ({ job }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [comments, setUserComments] = useState([]);
  const [comment] = useComment();
  useEffect(() => {
    const usersComment = comment.filter(
      (userComments) => userComments.commentOnComp == companyName
    );
    setUserComments(usersComment);
  }, [comment]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const { user } = useContext(AuthContext);
  const {
    companyName,
    stipend,
    workFrom,
    jobTitle,
    experience,
    startDate,
    _id,
  } = job;
  console.log("See the job", job);
  const handleComment = (event) => {
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
    fetch(`http://localhost:5000/talk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Commented");
        }
      });
  };
  return (
    <div className="border-spacing-16 shadow-xl p-5 rounded">
      {/* here take the company name and the logo  */}
      <div className="flex justify-between mb-2 items-center ">
        <div>
          <h1 className="text-lg font-bold w font-sans">{jobTitle}</h1>
          <p className="font-sans  mt-3">{companyName}</p>
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
        <button className="btn btn-warning sticky font-bold text-lg ">
          View Details
        </button>
      </Link>

      {/* this is for doing comment  */}
      {user && user?.email ? (
        <>
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
                  <input
                    className="btn btn-warning  font-bold text-lg"
                    type="submit"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="mt-5">
        <div onClick={openModal} className="btn btn-info font-bold text-lg">
          view Comment{" "}
        </div>
      </div>
      {/* this is for view comment */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Comment Modal"
      >
        <h2 className="text-xl font-bold mb-5">Comments</h2>
        {/* Loop through comments to display each one */}
        {comments.map((comment, index) => (
          <div key={index} className="mb-5">
            <p className="font-bold">Email: {comment.commentator}</p>
            <p className="font-bold">Comment: {comment.comment}</p>
          </div>
        ))}
        <button
          className="btn btn-info font-bold text-lg mt-5"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default FewJobsCard;
