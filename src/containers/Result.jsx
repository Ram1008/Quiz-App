import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import quizContext from '../contexts/quiz/quizContext';
import { NavBar } from '../components';
import ResultsDashboard from '../components/resultsDashboard/ResultsDashboard';

const Result = () => {
  const { id } = useParams(); 
  const { quiz, answers, getQuiz } = useContext(quizContext);
  const [results, setResults] = useState({ correctCount: 0, wrongCount: 0, marksObtained: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await getQuiz(id);
      setLoading(false);
    };
    fetchData();
  }, [id, getQuiz]);

  useEffect(() => {
    if (quiz && answers) {
      calculateResults();
    }
  }, [quiz]);

  const calculateResults = () => {
    let correctCount = 0;
    let wrongCount = 0;
    let marksObtained = 0;  // Change this from totalMarksObtained to marksObtained
  
    quiz.questions.forEach((question, index) => {
      const correctAnswer = question.answer;
      const candidateAnswer = answers[index];
      const questionType = question.type;
  
      if (questionType === 'single choice' || questionType === 'short ans') {
        if (candidateAnswer === correctAnswer) {
          correctCount++;
          marksObtained = marksObtained + question.marks;  // Update here
        } else {
          wrongCount++;
        }
      } else if (questionType === 'multiple choice') {
        if (Array.isArray(candidateAnswer) && Array.isArray(correctAnswer)) {
          const sortedCorrect = correctAnswer.sort();
          const sortedCandidate = candidateAnswer.sort();
          const isCorrect = sortedCorrect.length === sortedCandidate.length &&
                            sortedCorrect.every((ans, i) => ans === sortedCandidate[i]);
          if (isCorrect) {
            correctCount++;
            marksObtained = marksObtained + question.marks;  // Update here
          } else {
            wrongCount++;
          }
        } else {
          wrongCount++;
        }
      }
    });
    setResults({ correctCount, wrongCount, marksObtained });  // Fix here
  };
  
  

  return (
    <div className="result-dashboard">
        {loading? <p>Loading Results...</p> :
        <>
          <NavBar heading='Hello Ram' />
             <ResultsDashboard results={results} quiz={quiz} answers={answers}/>
          </>}
    </div>
  );
};

export default Result;
