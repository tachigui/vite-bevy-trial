import { AppProvider } from './provider/index.tsx';
import { AppRoutes } from './routes/index.tsx';

import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <AppRoutes />
  </AppProvider>,
);
