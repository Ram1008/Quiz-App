import { useContext, useEffect, useState } from "react";
import { NavBar, Footer, QuestionCard } from "../components";
import quizContext from "../contexts/quiz/quizContext";
import { useNavigate } from "react-router-dom"; 

const Quiz = () => {
  const { quiz, getQuiz, submitQuiz } = useContext(quizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState();
  const navigate = useNavigate();

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (currentQuestion.type === "single choice") {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: value,
      }));
    } else if (currentQuestion.type === "multiple choice") {
      setAnswers((prev) => {
        const selectedAnswers = prev[currentQuestionIndex] || [];
        if (selectedAnswers.includes(value)) {
          return {
            ...prev,
            [currentQuestionIndex]: selectedAnswers.filter((ans) => ans !== value),
          };
        } else {
          return {
            ...prev,
            [currentQuestionIndex]: [...selectedAnswers, value],
          };
        }
      });
    } else if (currentQuestion.type === "short ans") {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: value,
      }));
    }
  };

  const onSubmit = () => {
    submitQuiz(quiz._id, answers);
    navigate(`/result/${quiz._id}`);
  };

  useEffect(() => {
    getQuiz();
  }, [getQuiz]);

  return (
    <>
      {quiz ? (
        <div className="app_container">
          <NavBar heading={quiz.topic} initialTimer={quiz.totalDuration} onSubmit={onSubmit} />
          <QuestionCard
            question={currentQuestion}
            handleNext={handleNext}
            handleBack={handleBack}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={quiz.questions.length}
            onChange={handleChange} 
          />
          <Footer />
        </div>
      ) : (
        <p>Loading Quiz...</p>
      )}
    </>
  );
};

export default Quiz;
