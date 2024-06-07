import React from "react";

const QuestionPage = ({ onNext }) => {
  const question = "Would you like to play a game?";
  return (
    <div className="question-page">
      <h1>{question}</h1>
      <button onClick={onNext}>Yes, of course!</button>
    </div>
  );
};

export default QuestionPage;
