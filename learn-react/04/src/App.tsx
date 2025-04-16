import { css } from "@emotion/css";
import { hero } from "./css/style.css";

export default function App() {
  return (
    <>
      className=
      {css`
        color: red;
      `}
      App Componenet
      <h1 className={hero}>Vanilla Extract</h1>
    </>
  );
}
