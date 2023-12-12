import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useComment from "../../hooks/useComment";

const ViewComment = () => {
  const [comments, setUserComments] = useState([]);
  const { companyName } = useParams();
  const [comment] = useComment();
  useEffect(() => {
    const usersComment = comment.filter(
      (userComments) => userComments.commentOnComp == companyName
    );
    // setUserComments(usersComment);
    // console.log(comments);
  }, []);

  return (
    <div>
      <h2>User Feed Back and Que</h2>
      <p>User Name:{comments.commentator}</p>
      <p>Comment: {comments.comment}</p>
    </div>
  );
};

export default ViewComment;
