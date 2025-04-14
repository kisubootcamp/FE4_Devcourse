import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';  설명할땐 이 파일을 삭제함ㅋㅋ
import App from './App.tsx'; // tsx : 그 안에 jsx (JavaScript Xml) 문법이 사용되었다는뜻. z
// render : 렌더링하는 문법
createRoot(document.getElementById('sucoding')!).render(
  // ! : 널 아님 보장 연산자
  // 좀 더 엄격하게 문법을 검사하는 부분
  <StrictMode>
    <App />
  </StrictMode>
);
