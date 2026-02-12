import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import Achievements from './pages/Achievements';
import AchievementDetail from './pages/AchievementDetail';
import Streaks from './pages/Streaks';
import Calendar from './pages/Calendar';
import LogicPuzzle from './pages/LogicPuzzle';
import LevelComplete from './pages/LevelComplete';
import WeekComplete from './pages/WeekComplete';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/achievements" replace />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements/:id" element={<AchievementDetail />} />
          <Route path="/streaks/:type" element={<Streaks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/logic-puzzle" element={<LogicPuzzle />} />
          <Route path="/level-complete" element={<LevelComplete />} />
          <Route path="/week-complete" element={<WeekComplete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
