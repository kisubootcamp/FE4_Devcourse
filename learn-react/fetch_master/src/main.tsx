import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/practice/movies-suspense/Error.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
// errorboundary는 use훅에서 발생한 에러도 캐치할 수 있다. 렌더링 과정에서 일어난 에러로 캐치하기 때문
