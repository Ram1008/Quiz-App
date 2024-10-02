import { useState, useEffect } from 'react';
import './NavBar.scss';
import { IoIosAlarm } from "react-icons/io";

const NavBar = ({ heading, initialTimer = null, onSubmit= null }) => {
  const [timer, setTimer] = useState(initialTimer);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      
      return () => clearInterval(interval);
    }
    else if(onSubmit){
      onSubmit();
    }
  }, [timer]);

  return (
    <nav className="navbar">
      <div className="logo">{heading}</div>
      {timer !== null && (
        <>
          <div className="timer">
          <IoIosAlarm />{formatTime(timer)}
          </div>
          <button className="submitQuiz" onClick={onSubmit}>
            Submit Quiz
          </button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
