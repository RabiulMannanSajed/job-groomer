import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUser from "../../../hooks/useUser";

const AddTutorial = () => {
  const [name, setName] = useState([]);
  const { user } = useContext(AuthContext);
  const [users] = useUser();

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

  const pdfFileName = "your_uploaded_pdf_filename.pdf"; // Replace with the actual filename

  const handleViewPDF = () => {
    window.open(`http://localhost:5000/pdf/${pdfFileName}`, "_blank");
  };
  const [file, setFile] = useState();
  const handleUpload = () => {
    const formData = new FormData();

    formData.append("file", file);
    axios
      .post("http://localhost:5000/upload", formData)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };
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
          Swal.fire("User created successfully");
        }
      })
      .catch((error) => {
        console.error("Error submitting YouTube link:", error);
      });

    console.log("Submitted YouTube link:", youtubeLink);
  };
  return (
    <div className="App ml-5">
      <div>
        <h2 className="mt-5 font-bold mb-5">Uploader video</h2>
        {showVideo.map((sv) => (
          <div key={sv._id} className="mb-5">
            <video controls width="300" height="200 " autoPlay muted loop>
              <source src={sv.youtubeLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      <h2>Upload You Pdf File </h2>
      <div>
        <h2>View PDF</h2>
        <button onClick={handleViewPDF}>View PDF</button>
      </div>

      <br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={handleUpload} className="btn btn-success">
        Upload
      </button>
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
