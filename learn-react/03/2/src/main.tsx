import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
//strictmode는 개발모드에서만 돌아감
//=>개발모드에서는 컴포넌트 렌더링할때 빠르게 2번 렌더링하도록 함
//에러발생할지 빠르게 1번 로딩후 문제 없으면 제거후 정식적으로 로딩함
//main.tsx는 진입점 역할만 할 뿐 컴포넌트가 아님
//return jsx가 x
