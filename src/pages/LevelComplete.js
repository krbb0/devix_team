import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LevelComplete.css';

const LevelComplete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animation des étoiles
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      setTimeout(() => {
        star.classList.add('animate');
      }, index * 200);
    });
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content level-complete">
        <div className="trophy-container">
          <div className="trophy-glow"></div>
          <div className="trophy">🏆</div>
        </div>

        <h1 className="modal-title">Good Job!</h1>

        <div className="stars-container">
          <div className="star">⭐</div>
          <div className="star">⭐</div>
          <div className="star">⭐</div>
        </div>

        <div className="modal-actions">
          <button 
            className="modal-button secondary"
            onClick={() => navigate('/logic-puzzle')}
          >
            ✕
          </button>
          <button 
            className="modal-button primary"
            onClick={() => navigate('/streaks/beginner')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelComplete;
