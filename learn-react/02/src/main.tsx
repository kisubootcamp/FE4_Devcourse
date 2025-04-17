import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 루트 컴포넌트는 단일 컴포넌트 */}
    <App />
  </StrictMode>
);
