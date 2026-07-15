import React from 'react';
import { Question } from '../data/questions';
import '../styles/QuestionCard.css';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: boolean) => void;
  answered: boolean;
  isCorrect: boolean | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  answered,
  isCorrect,
}) => {
  return (
    <div className="question-card">
      <div className="question-text">{question.question}</div>
      <div className="category-tag">{question.category}</div>

      {answered && (
        <div
          className={`answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`}
        >
          <div className="feedback-message">
            {isCorrect ? (
              <>
                <span className="feedback-emoji">👊🏾</span>
                <span className="feedback-text">DAP!</span>
                <span className="points-earned">+50</span>
              </>
            ) : (
              <>
                <span className="feedback-emoji">🧢</span>
                <span className="feedback-text">CAP!</span>
                <span className="strike-text">❌ STRIKE</span>
              </>
            )}
          </div>
          {question.explanation && (
            <div className="explanation">{question.explanation}</div>
          )}
        </div>
      )}

      {!answered && (
        <div className="answer-buttons">
          <button
            className="answer-btn cap-btn"
            onClick={() => onAnswer(false)}
            disabled={answered}
          >
            <span className="answer-emoji">🧢</span>
            <span className="answer-text">CAP</span>
          </button>
          <button
            className="answer-btn dap-btn"
            onClick={() => onAnswer(true)}
            disabled={answered}
          >
            <span className="answer-emoji">👊🏾</span>
            <span className="answer-text">DAP</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;