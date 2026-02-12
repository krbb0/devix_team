import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import './Calendar.css';

const Calendar = () => {
  const navigate = useNavigate();
  const [currentMonth] = useState(new Date(2025, 7)); // Août 2025

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  // Générer les jours du mois
  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    
    // Jours vides avant le début du mois
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Jours du mois avec état de streak (exemple: 12 jours consécutifs)
    for (let day = 1; day <= daysInMonth; day++) {
      const hasStreak = day >= 1 && day <= 12; // 12 premiers jours
      days.push({ day, hasStreak });
    }
    
    return days;
  };

  const days = getDaysInMonth();
  const monthName = currentMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="mobile-container">
      <div className="calendar-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ‹
        </button>
        <div style={{ width: '32px' }}></div>
      </div>

      <div className="calendar-content">
        {/* Streak info */}
        <div className="streak-info">
          <div className="streak-count">
            <span className="streak-number">12 DAYS</span>
            <span className="fire-icon">🔥</span>
          </div>
          <p className="streak-text">your current streak</p>
        </div>

        {/* Month navigation */}
        <div className="month-navigation">
          <button className="month-arrow">‹</button>
          <h2 className="month-title">{monthName}</h2>
          <button className="month-arrow">›</button>
        </div>

        {/* Calendar grid */}
        <div className="calendar-grid">
          {/* Days of week header */}
          {daysOfWeek.map(day => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {days.map((dayData, index) => (
            <div
              key={index}
              className={`calendar-day ${dayData ? 'active' : 'empty'}`}
            >
              {dayData && (
                <>
                  <span className="day-number">{dayData.day}</span>
                  {dayData.hasStreak && (
                    <div className="day-streak">🔥</div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Continue button */}
        <button 
          className="continue-button"
          onClick={() => navigate('/streaks/beginner')}
        >
          Continue
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Calendar;
