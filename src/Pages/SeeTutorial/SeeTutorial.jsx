import React, { useEffect, useState } from "react";
import TutorialInfo from "../TutorialInfo/TutorialInfo";
import axios from "axios";
import ReactPlayer from "react-player";

const SeeTutorial = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tutorial");
        const videoData = response.data; // URL or video data
        if (typeof videoData === "string") {
          setVideoUrl(videoData);
        } else {
          const blob = new Blob([videoData]);
          setVideoUrl(window.URL.createObjectURL(blob));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <p>Uploaded by {}</p>
        {loading && <p>Loading...</p>}
        {videoUrl && <ReactPlayer url={videoUrl} controls />}
      </div>
    </div>
  );
};

export default SeeTutorial;
