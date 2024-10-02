import { useContext, useEffect } from "react";
import { NavBar, QuizCard, Footer } from "../components";
import quizContext from "../contexts/quiz/quizContext";

const Home = () => {
  const { quiz, getQuiz } = useContext(quizContext);

  useEffect(() => {
    getQuiz();
  }, [getQuiz]);

  return (
    <div className="app_container">
      <NavBar heading="Hello Ram" />
      {quiz ? <QuizCard quiz={quiz} /> : <p>Loading Quiz...</p>}
      <Footer />
    </div>
  );
};

export default Home;
