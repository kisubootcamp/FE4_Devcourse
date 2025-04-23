import { css } from "@emotion/css";
//styled component에서 지원하는 대부분을 지원함
//단, 태그를 명확히 명시
import { hero } from "./css/styles.css"; //자바스크립트 표현식(변수 불러오기)
//끝에 확장자 ts는 생략가능
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
      <h1 className={hero}>Vanilla Extract</h1>
    </>
  );
}
