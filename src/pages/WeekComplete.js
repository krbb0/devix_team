import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WeekComplete.css';

const WeekComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container week-complete-container">
      <div className="week-complete-content">
        {/* Confettis décoratifs */}
        <div className="confetti-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ['#FF6B35', '#F7931E', '#FDC830', '#4ECDC4', '#44A08D'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </div>

        {/* Trophée principal */}
        <div className="trophy-celebration">
          <div className="trophy-large">🏆</div>
        </div>

        {/* Message */}
        <div className="celebration-message">
          <h1 className="celebration-title">You finished the week!</h1>
          <p className="celebration-subtitle">
            Take a moment to rest and<br />celebrate your progress
          </p>
        </div>

        {/* Calendrier miniature */}
        <div className="mini-calendar">
          <div className="calendar-row">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
              <div key={day} className="mini-day">
                <span className="mini-day-label">{day}</span>
                <div className="mini-day-dot completed">
                  <span className="fire-small">🔥</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton Continue */}
        <button 
          className="continue-celebration"
          onClick={() => navigate('/calendar')}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WeekComplete;
