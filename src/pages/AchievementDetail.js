import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './AchievementDetail.css';

const AchievementDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const achievementData = {
    'pill-reminder': {
      title: 'Earn "PILL REMINDER" badge',
      icon: '💊',
      bgColor: '#34C759',
      progress: {
        completed: 2,
        total: 2,
        percentage: 100
      },
      lessons: {
        completed: 2,
        total: 3
      },
      xp: {
        earned: 500,
        total: 500
      }
    }
  };

  const data = achievementData[id] || achievementData['pill-reminder'];

  const streaks = [
    { days: 7, label: 'Streak 7 days', description: 'Completed 7days earning 7 days', locked: false },
    { days: 30, label: 'Streak 30 days', description: 'Completed 7days earning 30 days', locked: false },
    { days: 60, label: 'Streak 60 days', description: 'Completed 7days earning 60 days', locked: false },
    { days: 90, label: 'Streak 90 days', description: 'Completed 7days earning 90 days', locked: false }
  ];

  return (
    <div className="mobile-container">
      <div className="achievement-detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ‹
        </button>
        <h1 className="page-title">Achievements</h1>
        <div style={{ width: '32px' }}></div>
      </div>

      <div className="achievement-detail-content">
        {/* Badge principal */}
        <div className="main-badge-section">
          <div 
            className="main-badge"
            style={{ backgroundColor: data.bgColor }}
          >
            <span className="badge-icon">{data.icon}</span>
          </div>
          <h2 className="badge-title">{data.title}</h2>

          {/* Progress bars */}
          <div className="progress-section">
            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-label">Complete 2</span>
                <span className="progress-value">{data.progress.completed}/{data.progress.total}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${data.progress.percentage}%`,
                    backgroundColor: data.bgColor 
                  }}
                >
                  <span className="checkmark">✓</span>
                </div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-label">Complete 2 lessons</span>
                <span className="progress-value">{data.lessons.completed}/{data.lessons.total}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill orange"
                  style={{ width: `${(data.lessons.completed / data.lessons.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span className="progress-label">Earn 500 XP</span>
                <span className="progress-value">{data.xp.earned} xp / {data.xp.total} xp</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill yellow"
                  style={{ width: `${(data.xp.earned / data.xp.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des activités */}
        <div className="activities-list">
          {['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'].map((level, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon">🎮</div>
              <div className="activity-info">
                <span className="activity-name">{level}</span>
                <span className="activity-date">Tap to complete first level</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default AchievementDetail;
