import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './Achievements.css';

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      id: 'activity',
      title: 'Activité physique',
      subtitle: 'Entre in your first course',
      icon: '🏃',
      bgColor: '#4A90E2',
      locked: false
    },
    {
      id: 'pill-reminder',
      title: 'PILL REMINDER',
      subtitle: 'Complete quest',
      icon: '💊',
      bgColor: '#34C759',
      locked: false
    },
    {
      id: 'drinking-water',
      title: 'Drinking water',
      subtitle: 'Complete quest',
      icon: '💧',
      bgColor: '#5BA3F5',
      locked: false
    },
    {
      id: 'magician',
      title: 'Magician Badge',
      subtitle: 'Complete quest',
      icon: '🎩',
      bgColor: '#AF52DE',
      locked: false
    },
    {
      id: 'current-streak',
      title: 'your current streak',
      subtitle: 'Complete quest',
      icon: '🔥',
      bgColor: '#FF9500',
      locked: false
    },
    {
      id: 'scholar',
      title: 'Scholar Badge',
      subtitle: 'Enter in your first course',
      icon: '🎓',
      bgColor: '#FFD60A',
      locked: false
    }
  ];

  return (
    <div className="mobile-container">
      <div className="achievements-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ‹
        </button>
        <h1 className="page-title">Achievements</h1>
        <div style={{ width: '32px' }}></div>
      </div>

      <div className="achievements-content">
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="achievement-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/achievements/${achievement.id}`)}
            >
              <div 
                className="achievement-icon"
                style={{ backgroundColor: achievement.bgColor }}
              >
                <span className="icon-emoji">{achievement.icon}</span>
              </div>
              <div className="achievement-info">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-subtitle">{achievement.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Achievements;
