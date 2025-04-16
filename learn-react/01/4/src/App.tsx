import { css } from "@emotion/css";
import { hero } from "./css/styles.css";

export default function App() {
  return (
    <>
      <h1
        className={css`
          color: #ff33dd;
        `}
      >
        App Component
      </h1>
      {/* 고유한 클래스 값이 생긴다. */}
      <h1 className={hero}>Vanila Extract</h1>
    </>
  );
}
