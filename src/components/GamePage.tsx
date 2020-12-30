import React from 'react';
import { useGamesContext } from '../contexts/GamesContext';

function GamePage() {
  const ctx = useGamesContext();

  return (
    <div>
      GamePage (Context)
      {ctx?.games.map((game) => (
        <p key={game.id}>Game: {game.name}</p>
      ))}
    </div>
  );
}

export default GamePage;
