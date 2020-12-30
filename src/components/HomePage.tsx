import React from 'react';
import { GamesContextConsumer } from '../contexts/GamesContext';

function HomePage() {
  return (
    <div>
      HomePage (Consumer)
      <GamesContextConsumer>
        {(ctx) =>
          ctx?.games.map((game) => <p key={game.id}>Game: {game.name}</p>)
        }
      </GamesContextConsumer>
    </div>
  );
}

export default HomePage;
