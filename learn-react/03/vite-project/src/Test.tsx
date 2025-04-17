// 인라인 스타일은 HTML 태그의 style 속성을 사용해서 CSS 스타일을 지정하는 방식을 말합니다. 리액트는 자바스크립트를 기본으로 하는 문법이기 때문에 style 속성으로 CSS 속성을 지정할 때 몇 가지 규칙이 있다

// - style 속성에는 객체 형식의 값이 할당되어야 한다
// - font-size와 같은 케밥 케이스 형식의 속성은 카멜 케이스 형식(fontSize)로 작성해야 한다

const InlineStyle = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "30px",
          color: "#ed4848",
          textDecoration: "line-through",
        }}
      >
        Hello World!
      </h1>
    </div>
  );
};

export { InlineStyle };

//외부 스타일

// 외부 스타일은 별도의 CSS 파일에 CSS 코드를 작성하고, 리액트 컴포넌트 파일과 연결해서 사용하는 방법을 말한다
import "./Test.css";

export function ExternalStylesheet() {
  return (
    <>
      <div className="title">외부 스타일</div>
    </>
  );
}

// CSS Modules

// 모듈 방식을 사용해서 특정 컴포넌트에만 종속되는 CSS 코드를 작성하기 위한 방법입니다. 외부 스타일 방법과 비슷하지만, 파일명이 *.module.css라는 특징이 있다

import styles from "./Test.module.css";
export function cssModule() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello</h1>
        <p>Moudles CSS!</p>
      </div>
    </>
  );
}

// classnames : classnames 패키지는 클래스 이름을 조건부로 작성할 때 유용한 패키지

//css-in-js
// CSS-in-JS는 JavaScript 내에서 CSS 스타일을 작성하고 관리하는 기법을 의미한다. 이 방법은 전통적인 CSS 파일과는 다르게, 스타일을 JavaScript 코드 내에서 정의하고 컴포넌트와 함께 번들링하는 접근 방식이다. CSS-in-JS는 컴포넌트 기반 스타일링을 더 쉽게 하고, 스타일의 범위를 컴포넌트로 한정하며, 스타일 충돌을 방지하는 등의 이점을 제공한다.

// - Styled Components
// - Emotion
// - Vanilla Extract (zero run time)
// - Linaria (zero run time)
