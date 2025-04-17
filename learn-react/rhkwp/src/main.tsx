import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppSign from "./AppSign.tsx";
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <AppSign />
  </StrictMode>
);
