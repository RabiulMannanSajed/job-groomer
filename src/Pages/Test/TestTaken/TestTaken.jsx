import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { unstable_HistoryRouter } from "react-router-dom";

// TODo// this is rest for rafi
const TestTaken = ({ examQues }) => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question or show results if it's the last question
    setCurrentQuestion((prevQuestion) =>
      prevQuestion < examQues.length - 1 ? prevQuestion + 1 : prevQuestion
    );

    // If it's the last question, show results
    if (currentQuestion === examQues.length - 1) {
      setShowResults(true);
    }
  };

  // Check if examQues array and current question are defined
  if (!examQues || !examQues[currentQuestion]) {
    return <div>Error: Invalid question data</div>;
  }

  return (
    <div className="text-center m-20">
      {showResults ? (
        <div>
          {score < 3 ? (
            <div>
              <p className="text-red-500 font-extrabold text-2xl">
                Not a good result !
              </p>
              <p>see those link</p>
            </div>
          ) : (
            <div>
              <p className="text-blue-400 font-extrabold text-2xl">
                Well Done !
              </p>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-blue-400 font-extrabold text-2xl text-center">
                    {" "}
                    Your score:
                  </th>
                  <th className="text-red-500 font-extrabold text-2xl text-center">
                    Wrong ANS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-2xl font-extrabold text-center">
                    Result
                  </td>
                  <td className="text-blue-400 font-extrabold text-2xl text-center">
                    {score}
                  </td>
                  <td className="text-red-500 font-extrabold text-2xl text-center">
                    {examQues.length - score}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* this is use to go back to the prev page **** */}
          <button className="btn btn-warning mt-4" onClick={() => navigate(-1)}>
            {" "}
            GO back
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold text-orange-600">
            {examQues[currentQuestion].question}
          </h1>
          <ul>
            {examQues[currentQuestion].options.map((option) => (
              <li
                className="mt-3 mr-3 bg-slate-400 rounded p-5"
                key={option.id}
                onClick={() => handleOptionClick(option.isCorrect)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestTaken;
