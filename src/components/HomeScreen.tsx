import React from 'react';
import '../styles/HomeScreen.css';

interface HomeScreenProps {
  onPlayGame: () => void;
  onSettings: () => void;
  soundEnabled: boolean;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  onPlayGame,
  onSettings,
  soundEnabled,
}) => {
  return (
    <div className="home-screen">
      <div className="animated-background">
        <div className="led-lights"></div>
        <div className="spotlight spotlight-left"></div>
        <div className="spotlight spotlight-right"></div>
      </div>

      <div className="studio-lighting"></div>

      <div className="home-content">
        <div className="logo-container">
          <h1 className="game-title">CAP OR DAP</h1>
          <div className="branding">Decky B. OutTakez Media Zone</div>
        </div>

        <div className="button-container">
          <button className="btn btn-primary" onClick={onPlayGame}>
            <span className="btn-icon">▶️</span> PLAY NOW
          </button>

          <button className="btn btn-secondary">
            <span className="btn-icon">❓</span> HOW TO PLAY
          </button>

          <button className="btn btn-settings" onClick={onSettings}>
            <span className="btn-icon">⚙️</span> SETTINGS
          </button>
        </div>

        <div className="footer-info">
          <p>Version 1.0 - {soundEnabled ? '🔊 Sound ON' : '🔇 Sound OFF'}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;