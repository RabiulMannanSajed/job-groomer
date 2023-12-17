import { useState } from "react";
import Swal from "sweetalert2";

const MakeQue = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    { id: 0, text: "", isCorrect: false },
    { id: 1, text: "", isCorrect: false },
    { id: 2, text: "", isCorrect: false },
    { id: 3, text: "", isCorrect: false },
  ]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (id, event) => {
    const updatedOptions = [...options];
    updatedOptions[id].text = event.target.value;
    setOptions(updatedOptions);
  };

  const handleIsCorrectChange = (id, event) => {
    const updatedOptions = [...options];
    updatedOptions[id].isCorrect = event.target.checked;
    setOptions(updatedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      category,
      question,
      options,
    };
    // send data to the data base
    fetch("http://localhost:5000/ques", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Question is  successfully added");
        }
      });
    console.log({ category, question, options });
  };

  return (
    <div className="m-5">
      <h2 className="text-xl text-gray-600 font-bold mb-10 text-center">
        This is make Question to Exam
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="text-xl font-bold mb-5">
          Category:
          <input
            className="input input-bordered ml-5"
            type="text"
            value={category}
            onChange={handleCategoryChange}
          />
        </label>
        <br />
        <label className="text-xl font-bold mt-5">
          Question:
          <textarea
            className="input input-bordered ml-5"
            value={question}
            onChange={handleQuestionChange}
          />
        </label>
        <br />
        {options.map((option) => (
          <div key={option.id} className="mt-5">
            <label className="text-xl font-bold">
              Option {option.id}:
              <input
                type="text"
                className="input input-bordered ml-5"
                value={option.text}
                onChange={(event) => handleOptionChange(option.id, event)}
              />
            </label>
            <label className="ml-5 font-semibold">
              Is Correct :
              <input
                type="checkbox"
                checked={option.isCorrect}
                onChange={(event) => handleIsCorrectChange(option.id, event)}
              />
            </label>
            <br />
          </div>
        ))}
        <br />
        <button className="btn bg-orange-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeQue;
