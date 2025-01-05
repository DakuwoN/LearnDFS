'use client'

import React, { useState } from 'react';

// Sample player data
const players = [
  { id: 1, name: 'Player 1' },
  { id: 2, name: 'Player 2' },
  { id: 3, name: 'Player 3' },
  { id: 4, name: 'Player 4' },
  { id: 5, name: 'Player 5' },
];

const LineupEditor = () => {
  const [lineup1, setLineup1] = useState([]);
  const [lineup2, setLineup2] = useState([]);

  const togglePlayer = (player, lineupSetter, currentLineup) => {
    if (currentLineup.includes(player)) {
      lineupSetter(currentLineup.filter(p => p !== player));
    } else {
      lineupSetter([...currentLineup, player]);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Lineup 1</h2>
        <ul>
          {players.map(player => (
            <li key={player.id}>
              <button onClick={() => togglePlayer(player, setLineup1, lineup1)}>
                {lineup1.includes(player) ? 'Remove' : 'Add'} {player.name}
              </button>
            </li>
          ))}
        </ul>
        <h3>Selected Players:</h3>
        <ul>
          {lineup1.map(player => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Lineup 2</h2>
        <ul>
          {players.map(player => (
            <li key={player.id}>
              <button onClick={() => togglePlayer(player, setLineup2, lineup2)}>
                {lineup2.includes(player) ? 'Remove' : 'Add'} {player.name}
              </button>
            </li>
          ))}
        </ul>
        <h3>Selected Players:</h3>
        <ul>
          {lineup2.map(player => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LineupEditor;
