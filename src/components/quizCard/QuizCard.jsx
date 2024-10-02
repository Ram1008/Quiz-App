import './QuizCard.scss';
import { useNavigate } from 'react-router-dom'; 

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate(); 

  const startQuiz = () => {
    navigate(`/quiz/${quiz._id}`);
  };

  return (
    <main className="main-content">
      <div className="card">
        <h2>Topic: &nbsp;&nbsp;{quiz.topic}</h2>
        <p>Total Marks: &nbsp;&nbsp;{quiz.totalMarks}</p>
        <p>Total Duration: &nbsp;&nbsp;{quiz.totalDuration / 60} minutes</p>
        <p>Total Questions: &nbsp;&nbsp;{quiz.totalQuestions}</p>
        <p className="instructions">Instructions</p>
        <p>{quiz.instructions} <br /> Good Luck!</p>
        <button className="start-button" onClick={startQuiz}>Start Quiz</button>
      </div>
    </main>
  );
};

export default QuizCard;
