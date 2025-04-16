import { css } from "@emotion/css";
import { hero } from "./css/styled.css";

export default function App() {
  return (
    <>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: yellow;
          }
        `}
      >
        Hover to change color.
      </div>
      <h1 className={hero}>Vanila Extract</h1>
    </>
  );
}
