const TestTaken = ({ examQues }) => {
  //   const { question, options } = examQues;
  //   console.log(question);
  return (
    <div>
      {examQues.map((que, index) => (
        <div key={index}>
          <h1>{que.question}</h1>
        </div>
      ))}
    </div>
  );
};

export default TestTaken;
