import { ReactNode, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>{children}</BrowserRouter>
    </StrictMode>
  );
};
