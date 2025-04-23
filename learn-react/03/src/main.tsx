import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// 리액트의 시작점
// Strict Mode: 개발 모드에서만 돌아가는 기능. 리액트는 개발 서버에서 컴포넌트를 로딩할 때 빠르게 두 번 렌더링 한다.
// 개발에 대한 안정성을 확보하기 위해 두 번 렌더링 하는 것. 첫번째 렌더링은 안정성 확인용. 두번째 렌더링은 정식 렌더링
