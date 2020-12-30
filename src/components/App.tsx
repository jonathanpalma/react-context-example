import React from 'react';
import GamesContext from '../contexts/GamesContext';
import GameDetailPage from './GameDetailPage';
import GamePage from './GamePage';
import HomePage from './HomePage';
import NotWorkingPage from './NotWorkingPage';

function App() {
  const [state, setState] = React.useState({
    games: [{ id: '1', name: 'DK' }],
  });
  return (
    <div>
      <GamesContext.Provider value={state}>
        <div>
          Context
          <GameDetailPage />
          <GamePage />
          <HomePage />
        </div>
      </GamesContext.Provider>
      <button
        onClick={() => {
          setState({
            games: [
              { id: '1', name: 'DK' },
              { id: '2', name: 'COD' },
            ],
          });
        }}
      >
        Click me!
      </button>
      <NotWorkingPage />
    </div>
  );
}

export default App;
