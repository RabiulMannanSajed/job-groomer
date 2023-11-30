import { useEffect, useState } from "react";
import "./TakeTask.css";
import { useLoaderData, useParams } from "react-router-dom";
import TestTaken from "../TestTaken/TestTaken";
const TakeTest = () => {
  // set those match que
  const [examQues, setExamQues] = useState([]);
  const { jobName } = useParams();
  // lodaing from router
  const que = useLoaderData();
  useEffect(() => {
    const ques = que.filter((data) => data.category == jobName);
    setExamQues(ques);
    console.log(ques);
  }, []);

  return (
    <div>
      <TestTaken examQues={examQues}></TestTaken>
    </div>
  );
};

export default TakeTest;
