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
    setUserComments(usersComment);
  }, [comment, companyName]);

  return (
    <div>
      <h2>User Feed Back and Que</h2>

      {/* Loop through comments to display each one */}
      {comments.map((comment, index) => (
        <div key={index}>
          <p>User Name: {comment.commentator}</p>
          <p>Comment: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewComment;
