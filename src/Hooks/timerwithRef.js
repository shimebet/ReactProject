import React, { useEffect, useRef, useState } from 'react';

function TimerWithRef() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
      fontFamily: 'Arial, sans-serif',
    },
    timerDisplay: {
      fontSize: '3rem',
      color: '#fff',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1.2rem',
      color: '#ff7e5f',
      background: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s ease, color 0.3s ease',
      margin: '5px',
    },
    buttonHover: {
      background: '#ff7e5f',
      color: '#fff',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.timerDisplay}>Timer - {timer}</div>
      <button 
        style={styles.button}
        onMouseEnter={(e) => e.target.style.background = styles.buttonHover.background}
        onMouseLeave={(e) => e.target.style.background = styles.button.background}
        onClick={startTimer}
      >
        Start Timer
      </button>
      <button 
        style={styles.button}
        onMouseEnter={(e) => e.target.style.background = styles.buttonHover.background}
        onMouseLeave={(e) => e.target.style.background = styles.button.background}
        onClick={stopTimer}
      >
        Stop Timer
      </button>
    </div>
  );
}

export default TimerWithRef;
