import { css } from "@emotion/css";
import { hero } from "./css/style.css";
export default function App() {
  return (
    <>
      <div
        className={css`
          color: red;
        `}
      >
        App Component
      </div>
      <h1 className={hero}>Vanilla Extract</h1>
    </>
  );
}
