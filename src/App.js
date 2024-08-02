import React, { useState, useEffect } from 'react';
import GameStatus from './components/GameStatus';
import Character from './components/Character';
import ControlPanel from './components/ControlPanel';

import './App.css';

const App = () => {
  const [pointsA, setPointsA] = useState(1);
  const [pointsB, setPointsB] = useState(1);
  const [status, setStatus] = useState('Same point');

  const handleRace = () => {
    const random = Math.random();
    if (random < 0.5) {
      setPointsA(prev => prev + 1);
    } else {
      setPointsB(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setPointsA(1);
    setPointsB(1);
    setStatus('Same point');
  };

  useEffect(() => {
    if (pointsA > pointsB) {
      setStatus('A is winning');
    } else if (pointsB > pointsA) {
      setStatus('B is winning');
    } else {
      setStatus('Same point');
    }
  }, [pointsA, pointsB]);

  return (
    <div className="App">
      <GameStatus status={status} />
      <Character name="Character A" points={pointsA} />
      <Character name="Character B" points={pointsB} />
      <ControlPanel onRace={handleRace} onReset={handleReset} showReset={pointsA > 1 || pointsB > 1} />
    </div>
  );
};

export default App;
