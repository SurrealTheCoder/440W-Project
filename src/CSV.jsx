import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BaseDesign = () => {
  const Ref = useRef(null);
  const navigate = useNavigate();
  const [timer, setTimer] = useState('00')

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60)
    return {
      total, seconds
    };
  }

  const startTimer = (e) => {
    let {total, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {
    setTimer('05');

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 5);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(() => {
    if (timer === "01") {
      navigate("/Input");
    }
  }, [timer]);

  return (
    <div className="App">
      <header className="App-header">
        <img src='./logo-no-background.png' className="App-logo" alt="logo" />
        <p>Welcome to the CSV Compiler. Here, you are able to select a user specified amount of CSV files, and you will recieve one neatly formatted, compiled CSV file.</p>
        <p>This section of the website is developed entirely with React, React Router, and Python.</p>
        <p>This page will continue to the compiler in {timer} seconds.</p>
      </header>
    </div>
  );
};

export default BaseDesign;