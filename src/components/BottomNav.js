import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: '🏠', path: '/achievements', label: 'Home' },
    { icon: '📊', path: '/calendar', label: 'Stats' },
    { icon: '🎮', path: '/logic-puzzle', label: 'Play' },
    { icon: '🏆', path: '/achievements', label: 'Rewards' },
    { icon: '👤', path: '/achievements', label: 'Profile' }
  ];

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <div className="bottom-nav">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <span className="nav-icon">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
