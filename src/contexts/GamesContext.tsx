import React, { useContext } from 'react';

type Game = {
  id: string;
  name: string;
};

export type GamesContextState = {
  games: Game[];
};

// Context
const GamesContext = React.createContext<GamesContextState | null>(null);

// Hook
export function useGamesContext() {
  const ctx = useContext(GamesContext);
  if (!ctx)
    throw new Error(
      'Components using GamesContext should be rendered within GamesContext.Provider'
    );
  return ctx;
}

// Provider

// Consumer (Render Props)
type GamesContextConsumerProps = {
  children: (gamesContext: GamesContextState) => any;
};

export function GamesContextConsumer({ children }: GamesContextConsumerProps) {
  const ctx = useGamesContext();
  return children(ctx);
}

// Consumer (HOC)*

export default GamesContext;
