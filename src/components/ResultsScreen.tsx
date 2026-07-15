import React from 'react';
import { GameResult } from '../App';
import '../styles/ResultsScreen.css';

interface ResultsScreenProps {
  result: GameResult;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  result,
  onPlayAgain,
  onGoHome,
}) => {
  const getPerformanceMessage = (accuracy: number) => {
    if (accuracy >= 90) return '🔥 LEGENDARY! 🔥';
    if (accuracy >= 80) return '⭐ IMPRESSIVE! ⭐';
    if (accuracy >= 70) return '👍 GOOD GAME!';
    if (accuracy >= 60) return '📈 NOT BAD!';
    return '💪 KEEP PRACTICING!';
  };

  return (
    <div className="results-screen">
      <div className="animated-background">
        <div className="led-lights"></div>
        <div className="spotlight spotlight-left"></div>
        <div className="spotlight spotlight-right"></div>
      </div>

      <div className="results-content">
        <h1 className="results-title">GAME OVER</h1>

        <div className="performance-badge">
          {getPerformanceMessage(result.accuracy)}
        </div>

        <div className="results-stats">
          <div className="stat-box">
            <div className="stat-label">Final Score</div>
            <div className="stat-value">{result.score}</div>
          </div>

          <div className="stat-box">
            <div className="stat-label">Correct Answers</div>
            <div className="stat-value green">{result.correctAnswers}</div>
          </div>

          <div className="stat-box">
            <div className="stat-label">Wrong Answers</div>
            <div className="stat-value red">{result.wrongAnswers}</div>
          </div>

          <div className="stat-box">
            <div className="stat-label">Accuracy</div>
            <div className="stat-value blue">{result.accuracy}%</div>
          </div>
        </div>

        <div className="results-buttons">
          <button className="btn btn-primary" onClick={onPlayAgain}>
            <span className="btn-icon">▶️</span> PLAY AGAIN
          </button>
          <button className="btn btn-secondary" onClick={onGoHome}>
            <span className="btn-icon">🏠</span> HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;