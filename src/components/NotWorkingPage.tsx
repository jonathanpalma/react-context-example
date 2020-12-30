import React from 'react';
import GamesContext from '../contexts/GamesContext';

function NotWorkingPage() {
  return (
    <div>
      This shouldn't be displayed
      <GamesContext.Consumer>
        {(ctx) => {
          console.log({ ctx });
          return <p>null</p>;
        }}
      </GamesContext.Consumer>
    </div>
  );
}

export default NotWorkingPage;
