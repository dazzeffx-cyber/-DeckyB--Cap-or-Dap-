import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';
import SettingsScreen from './components/SettingsScreen';
import './styles/App.css';

type GameState = 'home' | 'game' | 'results' | 'settings';

export interface GameResult {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  accuracy: number;
}

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('home');
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handlePlayGame = () => {
    setGameState('game');
  };

  const handleGameOver = (result: GameResult) => {
    setGameResult(result);
    setGameState('results');
  };

  const handlePlayAgain = () => {
    setGameResult(null);
    setGameState('game');
  };

  const handleGoHome = () => {
    setGameResult(null);
    setGameState('home');
  };

  const handleOpenSettings = () => {
    setGameState('settings');
  };

  const handleCloseSettings = () => {
    setGameState('home');
  };

  return (
    <div className="app">
      {gameState === 'home' && (
        <HomeScreen
          onPlayGame={handlePlayGame}
          onSettings={handleOpenSettings}
          soundEnabled={soundEnabled}
        />
      )}
      {gameState === 'game' && (
        <GameScreen
          onGameOver={handleGameOver}
          soundEnabled={soundEnabled}
        />
      )}
      {gameState === 'results' && gameResult && (
        <ResultsScreen
          result={gameResult}
          onPlayAgain={handlePlayAgain}
          onGoHome={handleGoHome}
        />
      )}
      {gameState === 'settings' && (
        <SettingsScreen
          soundEnabled={soundEnabled}
          onSoundChange={setSoundEnabled}
          onClose={handleCloseSettings}
        />
      )}
    </div>
  );
};

export default App;