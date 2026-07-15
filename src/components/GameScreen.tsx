import React, { useState, useEffect } from 'react';
import { questions, Question } from '../data/questions';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import Strikeometer from './Strikeometer';
import '../styles/GameScreen.css';
import { playSound } from '../lib/soundManager';
import { GameResult } from '../App';

interface GameScreenProps {
  onGameOver: (result: GameResult) => void;
  soundEnabled: boolean;
}

const GameScreen: React.FC<GameScreenProps> = ({ onGameOver, soundEnabled }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameQuestions] = useState(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  });

  const currentQuestion = gameQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === gameQuestions.length - 1;

  const handleAnswer = (answer: boolean) => {
    if (answered) return;

    const correct = answer === currentQuestion.answer;
    setAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 50);
      if (soundEnabled) playSound('correct');
    } else {
      setStrikes((prev) => prev + 1);
      if (soundEnabled) playSound('wrong');
    }
  };

  const handleTimeUp = () => {
    if (!answered) {
      setAnswered(true);
      setIsCorrect(false);
      setStrikes((prev) => prev + 1);
      if (soundEnabled) playSound('wrong');
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion || strikes >= 3) {
      const correctAnswers = Math.round((score / 50) * (10 / currentQuestionIndex + 1));
      const wrongAnswers = currentQuestionIndex + 1 - correctAnswers;
      const accuracy = ((score / (currentQuestionIndex + 1)) / 50) * 100;

      onGameOver({
        score,
        correctAnswers: Math.floor(score / 50),
        wrongAnswers: strikes,
        accuracy: Math.min(Math.round(accuracy), 100),
      });
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswered(false);
      setIsCorrect(null);
    }
  };

  useEffect(() => {
    if (answered) {
      const timer = setTimeout(handleNextQuestion, 2000);
      return () => clearTimeout(timer);
    }
  }, [answered]);

  useEffect(() => {
    if (strikes >= 3) {
      setTimeout(handleNextQuestion, 2000);
    }
  }, [strikes]);

  return (
    <div className="game-screen">
      <div className="animated-background">
        <div className="led-lights"></div>
      </div>

      <div className="game-header">
        <div className="question-counter">
          Question {currentQuestionIndex + 1} / 10
        </div>
        <div className="score-display">Score: {score}</div>
      </div>

      <div className="game-content">
        <div className="timer-container">
          <Timer
            isActive={!answered}
            onTimeUp={handleTimeUp}
            key={currentQuestionIndex}
          />
        </div>

        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          answered={answered}
          isCorrect={isCorrect}
        />
      </div>

      <div className="game-footer">
        <Strikeometer strikes={strikes} />
      </div>
    </div>
  );
};

export default GameScreen;