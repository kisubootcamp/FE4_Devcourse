import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// tailwind.css -> index.css -> main.tsx
import './css/index.css';
import Value from './value';
import Form from './form';
import CheckBox from './CheckBox';
import Form1 from './form1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Form1 />
  </StrictMode>
);
