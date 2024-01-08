import { GamePage } from '../features/game';

import { RouteObject, useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const routes: RouteObject[] = [{ path: '/', element: <GamePage /> }];
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
