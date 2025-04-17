import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import "./css/fonts.css";

// Semantic  Versioning -> Semver
// Major.Minor.Patch
// Major => 기존 버전과 호환되지 않는 큰 병경 사항이 생겼을 때
// Minor -> 기능이 새롭게 추가 되었지만, 기존과 호환이 가능할 때
// Patch -> 버그 수정과 같은 사소한 변경이 발생했을 때, 그리고 기존과 호환이 매우 양호

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
