import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css"; // 어디에 import하든 상관없이, 렌더링만 되면 다른 컴포넌트 파일에서도 영향을 받음

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
