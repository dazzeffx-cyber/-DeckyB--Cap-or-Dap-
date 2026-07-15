import React from 'react';
import '../styles/Strikeometer.css';

interface StrikeometerProps {
  strikes: number;
}

const Strikeometer: React.FC<StrikeometerProps> = ({ strikes }) => {
  return (
    <div className="strikeometer">
      <div className="strikes-label">Strikes</div>
      <div className="strikes-container">
        {[1, 2, 3].map((num) => (
          <div key={num} className={`strike ${strikes >= num ? 'active' : ''}`}>
            ❌
          </div>
        ))}
      </div>
      {strikes >= 3 && <div className="game-over-badge">GAME OVER</div>}
    </div>
  );
};

export default Strikeometer;