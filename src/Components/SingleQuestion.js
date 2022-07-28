import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="single-question">
      <div className="question-div">
        <p>{question}?</p>
        <div className="btn-container">
          <button className="btn" onClick={() => toggleAnswer()}>
            {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      </div>
      <h3>{showAnswer ? answer : <p></p>}</h3>
    </div>
  );
};

export default SingleQuestion;
