import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './Streaks.css';

const Streaks = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const streakData = {
    beginner: {
      title: 'The first stage',
      subtitle: 'Beginner stage',
      color: '#5BA3F5',
      gradient: 'linear-gradient(135deg, #5BA3F5 0%, #4A90E2 100%)',
      emoji: '🎯'
    },
    elementary: {
      title: 'The Second stage',
      subtitle: 'Elementary stage',
      color: '#FF9500',
      gradient: 'linear-gradient(135deg, #FFB340 0%, #FF9500 100%)',
      emoji: '⭐'
    },
    intermediate: {
      title: 'The third stage',
      subtitle: 'Intermediate stage',
      color: '#34C759',
      gradient: 'linear-gradient(135deg, #5DD685 0%, #34C759 100%)',
      emoji: '🚀'
    },
    pre_intermediate: {
      title: 'The fourth stage',
      subtitle: 'Pre intermediate stage',
      color: '#FF2D92',
      gradient: 'linear-gradient(135deg, #FF2D92 0%, #D61876 100%)',
      emoji: '💎'
    },
    first_stage: {
      title: 'The first stage',
      subtitle: 'frequency stage',
      color: '#AF52DE',
      gradient: 'linear-gradient(135deg, #C670E8 0%, #AF52DE 100%)',
      emoji: '🔮'
    }
  };

  const currentData = streakData[type] || streakData.beginner;

  // Générer 10 niveaux (certains débloqués, d'autres verrouillés)
  const levels = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    locked: i > 3 // Les 4 premiers sont débloqués
  }));

  return (
    <div className="mobile-container">
      <div className="streak-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ‹
        </button>
        <div style={{ width: '32px' }}></div>
      </div>

      <div className="streak-content">
        {/* Header avec titre du stage */}
        <div 
          className="streak-banner"
          style={{ background: currentData.gradient }}
        >
          <div className="banner-emoji">{currentData.emoji}</div>
          <div className="banner-text">
            <h2 className="banner-title">{currentData.title}</h2>
            <p className="banner-subtitle">{currentData.subtitle}</p>
          </div>
        </div>

        {/* Grille de niveaux */}
        <div className="levels-grid">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className={`level-node ${level.locked ? 'locked' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => !level.locked && navigate('/logic-puzzle')}
            >
              <div className="level-circle">
                {level.locked ? (
                  <span className="lock-icon">🔒</span>
                ) : (
                  <span className="level-number">{level.id}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Start */}
        <button 
          className="start-button"
          style={{ backgroundColor: currentData.color }}
          onClick={() => navigate('/logic-puzzle')}
        >
          <span className="start-icon">▶</span>
          <span className="start-text">START</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Streaks;
