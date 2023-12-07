import { useEffect, useState } from "react";

const Search = () => {
  const [postValue, setPostValue] = useState("");
  const [loactionValue, setLocationValue] = useState("");
  const [jobInfo, setJobInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/office")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.location);
      });
  }, []);
  const handelLocation = (event) => {
    setLocationValue(event);
  };
  const handlePost = (event) => {
    setPostValue(event);
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-orange-300">
        <div className="p-5">
          <input
            type="text"
            placeholder="Post"
            className="input input-bordered input-success input-md w-full max-w-xs p-4"
            onBlur={handlePost}
          />
        </div>
        <div className="p-5">
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered input-success input-md w-full max-w-xs p-4"
            onBlur={handelLocation}
          />
        </div>
        <div>
          <button className="btn btn-neutral hover:bg-orange-300 hover:text-black ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
