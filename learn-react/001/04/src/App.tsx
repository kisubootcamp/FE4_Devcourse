import { css } from "@emotion/css";
import { container } from "./css/styles.css.ts";

export default function App() {
  return (
    <>
      <h1
        className={css`
          color: red;
        `}
      >
        App Component
      </h1>
      <h1 className={container}>Vanilla Extract</h1>
    </>
  );
}
