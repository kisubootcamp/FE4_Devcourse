import { css } from "@emotion/css";
import { blueText } from "./css/emotion.style";
import { hero } from "./css/styles.css";

export default function App() {
  return (
    <>
      <h1
        className={css`
          color: red;
        `}
      >
        {/* CSS-in-JS 방식 */}
        {/*호출하면 Emotion이 유니크한 클래스명을 만들어서 리턴해줌 */}
        App Component
      </h1>
      <h2 className={blueText}>Emotion ts</h2>
      {/* emotion은 ts로 분리해도 런타임에 스타일이 생성됨 */}
      <h1 className={hero}>Vanilla Extract</h1>
      <h1 className={hero}>Vanilla Extract</h1>
      {/* 같은걸 적용해도 같은 클래스 이름 생성 */}
    </>
  );
}
// emotion은 ts파일로 분리해도 런타임에 스타일이 생성되는 이유는,
// -> JS 로직 기반으로 스타일을 동적으로 처리하는 게 핵심아러서
// -> JS 변수나 조건문에 따라 동적으로 스타일을 바꾸려고 하는거라,
// 정적으로 CSS 만들어 내는 방식과는 안맞음.
//  “런타임 기반 CSS-in-JS” 철학으로 만들어짐.
