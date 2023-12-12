import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import JobInfoCart from "../JobInfoCart/JobInfoCart";

const JobInfo = () => {
  const [dataOfJob, setDataOfJob] = useState([]);

  const { id } = useParams();

  const jobInfo = useLoaderData();

  useEffect(() => {
    const jobId = jobInfo.find((data) => data._id == id);
    setDataOfJob(jobId);
  }, [id, jobInfo]);
  return (
    <div>
      <JobInfoCart dataOfJob={dataOfJob} id={id}></JobInfoCart>
    </div>
  );
};

export default JobInfo;
