import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// !는 널아님 보장 연산자임
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
