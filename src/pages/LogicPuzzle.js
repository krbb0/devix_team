import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './LogicPuzzle.css';

const LogicPuzzle = () => {
  const navigate = useNavigate();
  const [score, ] = useState(400);
  const [level, ] = useState(11);
  const [selectedItems, setSelectedItems] = useState([]);
  
  // Générer la grille de puzzle (4x4)
  const puzzleItems = [
    { id: 1, type: 'cloud', emoji: '☁️' },
    { id: 2, type: 'bolt', emoji: '⚡' },
    { id: 3, type: 'cloud', emoji: '☁️' },
    { id: 4, type: 'bolt', emoji: '⚡' },
    { id: 5, type: 'cloud', emoji: '☁️' },
    { id: 6, type: 'bolt', emoji: '⚡' },
    { id: 7, type: 'fire', emoji: '🔥' },
    { id: 8, type: 'fire', emoji: '🔥' },
    { id: 9, type: 'fire', emoji: '🔥' },
    { id: 10, type: 'water', emoji: '💧' },
    { id: 11, type: 'water', emoji: '💧' },
    { id: 12, type: 'water', emoji: '💧' }
  ];

  const targetItems = [
    { type: 'water', emoji: '💧' },
    { type: 'cloud', emoji: '☁️' },
    { type: 'bolt', emoji: '⚡' },
    { type: 'fire', emoji: '🔥' }
  ];

  const handleItemClick = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else if (selectedItems.length < 3) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    // Vérifier si 3 items du même type sont sélectionnés
    if (selectedItems.length === 3) {
      const allSameType = selectedItems.every(item => item.type === selectedItems[0].type);
      if (allSameType) {
        setTimeout(() => {
          setSelectedItems([]);
          // Simulation de complétion après quelques matchs
          setTimeout(() => {
            navigate('/level-complete');
          }, 1000);
        }, 500);
      }
    }
  }, [selectedItems, navigate]);

  return (
    <div className="mobile-container puzzle-container">
      <div className="puzzle-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ‹
        </button>
        <h1 className="puzzle-title">Logic Puzzle</h1>
        <div style={{ width: '32px' }}></div>
      </div>

      <div className="puzzle-content">
        {/* Score et niveau */}
        <div className="puzzle-info">
          <div className="info-badge">
            <span className="info-label">Level {level}</span>
            <span className="info-icon">🎯</span>
          </div>
          <div className="info-badge score">
            <span className="info-icon">⭐</span>
            <span className="info-label">{score}</span>
          </div>
        </div>

        {/* Grille de puzzle */}
        <div className="puzzle-grid">
          {puzzleItems.map((item, index) => (
            <div
              key={item.id}
              className={`puzzle-item ${selectedItems.find(i => i.id === item.id) ? 'selected' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => handleItemClick(item)}
            >
              <span className="puzzle-emoji">{item.emoji}</span>
            </div>
          ))}
        </div>

        {/* Objectifs */}
        <div className="puzzle-targets">
          {targetItems.map((item, index) => (
            <div key={index} className="target-item">
              <div className="target-circle">
                <span className="target-emoji">{item.emoji}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default LogicPuzzle;
