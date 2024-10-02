import { useState } from 'react';
import quizContext from './quizContext';
import {QuizData} from '../../constants/quizConstants';

const QuizState = (props) => {
  const [quiz, setQuiz] = useState();
  const [answers, setAnswers] = useState();

  const getQuiz =(quizId) => {

    //make API call here to get quiz using quizId

    setQuiz(QuizData);
  };

  // const getAnswers =(quizId) => {

  //   //make API call here to get correct answers to the quiz using quizId

  //   setAnswers(Answers);
  // };

  const submitQuiz = (quizId, answers)=>{
    //make API call here to submit answers to the quiz using quizId
  setAnswers(answers);
  }

  

  return (
    <quizContext.Provider value={{ quiz, answers, getQuiz, submitQuiz}}>
      {props.children}
    </quizContext.Provider>
  );
};

export default QuizState;
