import { useState } from 'react';
import './QuestionCard.scss';

const QuestionCard = ({ question, handleNext, handleBack, currentQuestionIndex, totalQuestions, onChange }) => {
  
  const renderQuestionInput = () => {
    if (question.type === "single choice") {
      return question.options.map((option, index) => (
        <div key={index}>
          <label>
            <input type="radio" name="answer" value={option} onChange={onChange} /> {option}
          </label>
        </div>
      ));
    }

    if (question.type === "multiple choice") {
      return question.options.map((option, index) => (
        <div key={index}>
          <label>
            <input type="checkbox" name="answer" value={option} onChange={onChange} /> {option}
          </label>
        </div>
      ));
    }

    if (question.type === "short ans") {
      return (
        <textarea
          name="answer"
          rows="5"
          placeholder="Type your answer here..."
          onChange={onChange}
        ></textarea>
      );
    }
  };

  return (
    <main className="question-container">
      <div>
        <div className='questionGrp'>
            <h3>{question.question}&nbsp;&nbsp; <span>{question.type}</span></h3>
            <p> Marks&nbsp;&nbsp;{question.marks}</p>
        </div>
        <div className="options-container">{renderQuestionInput()}</div>
      </div>

      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={currentQuestionIndex === 0}>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === totalQuestions - 1}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default QuestionCard;
