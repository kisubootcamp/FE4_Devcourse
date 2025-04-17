import { css } from "@emotion/css";
//css-in-js
export default function Emotion() {
  return (
    <>
      <div
        className={css`
          color: red;
          font-weight: bold;
          font-size: 100px;
        `}
      >
        Emotion css
      </div>
    </>
  );
}
