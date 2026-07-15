import React from 'react';
import '../styles/SettingsScreen.css';

interface SettingsScreenProps {
  soundEnabled: boolean;
  onSoundChange: (enabled: boolean) => void;
  onClose: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({
  soundEnabled,
  onSoundChange,
  onClose,
}) => {
  return (
    <div className="settings-screen">
      <div className="animated-background">
        <div className="led-lights"></div>
      </div>

      <div className="settings-content">
        <h1 className="settings-title">SETTINGS</h1>

        <div className="settings-options">
          <div className="setting-item">
            <label className="setting-label">Sound Effects</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => onSoundChange(e.target.checked)}
                className="toggle-input"
              />
              <span className="toggle-slider"></span>
            </div>
            <span className="sound-status">
              {soundEnabled ? '🔊 ON' : '🔇 OFF'}
            </span>
          </div>
        </div>

        <div className="settings-info">
          <h3>About CAP OR DAP</h3>
          <p>Version 1.0</p>
          <p>Decky B. OutTakez Media Zone</p>
          <p>A TV Game Show Style Quiz Game</p>
        </div>

        <button className="btn btn-primary" onClick={onClose}>
          <span className="btn-icon">✓</span> BACK
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;