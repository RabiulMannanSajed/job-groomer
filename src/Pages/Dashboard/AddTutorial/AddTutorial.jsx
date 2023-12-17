import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUser from "../../../hooks/useUser";

const AddTutorial = () => {
  const [name, setName] = useState([]);
  const { user } = useContext(AuthContext);
  const [users, refetch] = useUser();

  useEffect(() => {
    const uploaderName = users.find(
      (userEmail) => userEmail?.email == user?.email
    );
    setName(uploaderName);
    console.log(uploaderName);
  }, []);
  const [showVideo, setShowVideo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tutorial")
      .then((res) => res.json())
      .then((data) => {
        setShowVideo(data);
      });
  }, []);

  const [youtubeLink, setYoutubeLink] = useState("");

  const handleInputChange = (e) => {
    setYoutubeLink(e.target.value);
  };

  const handleFormSubmit = (e) => {
    const tutorialInfo = {
      youtubeLink: youtubeLink,
      upBy: name?.email,
      officeName: name?.officeName,
    };
    e.preventDefault();
    fetch("http://localhost:5000/tutorial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tutorialInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Video uploaded successfully");
        }
      })
      .catch((error) => {
        console.error("Error submitting YouTube link:", error);
      });

    console.log("Submitted YouTube link:", youtubeLink);
  };
  console.log(showVideo);
  refetch();
  const handleDelete = (sv) => {
    fetch(`http://localhost:5000/tutorial/${sv._id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Video delete");
        }
      });
  };
  return (
    <div className="App ml-5">
      <h2 className="mt-5 font-bold mb-5">Uploader video</h2>
      <div className="grid grid-cols-2 gap-4">
        {showVideo.map((sv) => (
          <div key={sv._id} className="mb-5 ">
            <a href={sv.youtubeLink} target="_blank" rel="noopener noreferrer">
              <video controls width="300" height="200" autoPlay muted loop>
                <source src={sv.youtubeLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
            <button onClick={() => handleDelete(sv)} className="btn btn-error">
              Delete
            </button>
          </div>
        ))}
      </div>

      <br />

      <h2>YouTube Link Input</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="youtubeLink">Enter YouTube Link:</label>
        <input
          type="text"
          id="youtubeLink"
          value={youtubeLink}
          onChange={handleInputChange}
          placeholder="https://www.youtube.com/watch?v=your_video_id"
        />
        <button type="submit" className="text-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
