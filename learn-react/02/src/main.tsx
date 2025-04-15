import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css"; // main.tsx에서 작성하는 것이 일반적. 왜? 관리하기 쉬우려고
// 연속으로 참조가 되어 global.css까지 불러와진다
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// export default로 내보내는 것은 내가 지정한 이름으로 받을 수 있지만 받는 파일 이름과 같게 하는 것이 문법적 관례
// folder structure: 리소스 폴더 구조
// 모나지 않게(예측 범위 안에서) 쓸 수 있는 나만의 구조를 연구해 보자
// react folder structure
