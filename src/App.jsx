import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Quiz from './containers/Quiz';
import Result from './containers/Result';
import './App.scss';
import QuizState from './contexts/quiz/QuizStates';

const App = () => {
  return (
    <Router>
      <QuizState>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/quiz/:id" element={<Quiz/>} />
            <Route path="/result/:id" element={<Result/>} />
        </Routes>
      </QuizState>
    </Router>
  );
};

export default App;
