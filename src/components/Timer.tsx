import React, { useState, useEffect } from 'react';
import '../styles/Timer.css';

interface TimerProps {
  isActive: boolean;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ isActive, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeUp]);

  useEffect(() => {
    setTimeLeft(5);
  }, [isActive]);

  const isWarning = timeLeft <= 2;

  return (
    <div className={`timer ${isWarning ? 'warning' : ''}`}>
      <div className="timer-display">{timeLeft}</div>
      <div className="timer-bar">
        <div
          className="timer-fill"
          style={{ width: `${(timeLeft / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;