import useTutorial from "../../hooks/useTutorial";

const SeeTutorial = () => {
  const [tutorial] = useTutorial();
  return (
    <div>
      <p className="text-center font-bold text-xl bg-slate-700 text-white p-5 mb-5">
        Uploaded Tutorial
      </p>
      <div className="grid grid-cols-2 place-items-center">
        {tutorial.map((tutorialVideo) => (
          <div key={tutorialVideo._id} className="mb-5 ">
            <a
              href={tutorialVideo.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <video controls width="300" height="200" autoPlay muted loop>
                <source src={tutorialVideo.youtubeLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeTutorial;
