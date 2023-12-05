import { useEffect, useState } from "react";
import "./TakeTask.css";
import { useLoaderData, useParams } from "react-router-dom";
import TestTaken from "../TestTaken/TestTaken";
const TakeTest = () => {
  // set those match que
  const [examQues, setExamQues] = useState([]);
  const { jobName } = useParams(); // this is taking then job name u clicked
  // lodaing from router
  const que = useLoaderData(); // this is  taken an api name que.json
  // if job name is == to our que.json (category) then show those que for exam
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
