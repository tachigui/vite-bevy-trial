import { ReactNode, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/vite-bevy-trial/'}>
        {children}
      </BrowserRouter>
    </StrictMode>
  );
};
