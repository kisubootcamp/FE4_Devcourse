// 리액트를 사용하는 이유
// 1. 가장 인기 있는 프레임워크 -> 강력한 커뮤니티
// 2. 가상돔 (Virtual Dom)
// -> DOM은 트리구조이며 일부를 변경하면 그 일부와 연결될 모든 DOM을 업데이트한다.
// 그래서 트리가 깊을 수록 구성 요소의 변경에 대한 작업 비용이 많이 들어간다.
// 가상돔은 기존의 돔을 그대로 복사해 내부 메모이에 저장. 변경사항이 생기면 복사한 DOM을 사용히여 변경사항을 처리.
// 최종적으로 변경된 부분만 업데이트하기 때문에 DOM 구성 요소의 변경에 대한 작업 비용이 낮고 효율적이다.
// 3. 강력한 컴포넌트 -> 구성요소를 작은 단위로 분할해서 재사용 가능하게 독립적인 코드로 작성

// 바벨  (파싱 -> 변환 -> 출력)
// -> 서로 다른 언어규약으로 작성된 파일을 웹 브라우저가 이해 할 수 있는 형태의 파일로 변환해주는 개발 툴
// 리액트도 바벨을 사용하며 독자적인 포맷 JSX -> JS로 일괄적으로 변환. (바벨이 있기 때문에 리액트에서 JSX를 사용할 수 있는 것)

// 웹 팩 (모듈 번들러)
// -> 여러개의 자바스크립트 모듈을 하나의 파일로 묶어주는 역할. 이때 실제 코드에서 사용하는 것들만 자동으로 추려서 묶어주기 때문에
// 빌드 속도,성능에 많은 영향을 준다.

// Vite
// -> 웹팩이 1세대면 Vite는 2세대 빌드 도구 웹팩보다 빠른 속도가 장점

// 리액트는 바벨의 역할을 하는 도구들 (esbuild, swc등)과 웹팩의 역할을 하는 도구들 (rollup)을 함께 사용합니다.
// 여러개의 에셋파일, JSX, ES6문법을 사용하기 때문에 웹팩을 사용하여 모듈 번들링을 잡아주고 ES6로 작성된 코드를 바벨로 변환해주면
// 어떤 환경에서도 문제 없이 동작하는 일관된 코드를 작성할 수 있다.

// SWC - (Speed Web Compiler)
//  타입스크립트나 JSX를 자바스크립트로 빠르게 트랜스 컴파일 하기 위해서 사용합니다.

// RollUp
//  배포시에 라이브러리나 모듈들을 번들링 하기 위해서 사용한다.

//-----------------------------------------------------------------------------------------//

// 컴포넌트
// 함수에서 JSX를 반환하면 그게 컴포넌트다.

// JSX -> Javscript XML (확징문법)
//JSX는 HTML과 유사하다. (시맨틱 태그, 폼태그)
//1.하나의 루트 요소를 반환해야 한다. <> -> 빈태그
//2. 모든 태그는 닫아줘야한다.
//3. 모든 태그의 속성은 카멜케이스로 작성해야 한다.
//3.1 예약된 속성명은 쓸 수 없음, class className
//4. 표현식을 출력할 수 있다. -> 중괄호
//5. 인라인스타일은 객체로 표현해야 한다.
//6. 주석
export function ex1() {
  return (
    <>
      <h1>10 + 20 = {10 + 20}</h1>
      <h1 style={{ color: "red", fontSize: "50px" }}>App Component</h1>
      <br />
      <label className="red" htmlFor="uname">
        userId
      </label>
      <input id="uname" type="text" readOnly />
    </>
  );
}

// 1 리액트 스타일링 방법
// 1.1 전통적인 방법으로 스타일링 하는 방법
// 1.1.1 인라인 스타일
<h1 style={{ color: "red", textDecoration: "underline" }}></h1>;
//변수 사용
const style = { color: "blue", fontSize: "18px" };
<h1 style={style}></h1>;

// 1.1.2 글로벌(외부) 스타일
// import "./App.css"; => 트리 컴포넌트로 연결이 되어 있느냐가 중요,, 트리 컴포넌트로 연결 되어 있다면 영향을 받게 되어 있다.
<p className="title">글로벌 스타일</p>;

// 1.1.1 CSS 모듈 (+ classnames 패키지)
// npm install classnames
import className from "classnames"; //css 모듈과 함께 사용하지 않을때
import classNames from "classnames/bind"; //외부 라이브러리 bind css 모듈과 함께 쓰고 싶을때
import styles from "../css/Footer.module.css";

export function ClassNamesFunc() {
  const isLoggedin = false;
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        {/* 모듈*/}
        <p className={`${styles.underline} ${styles["red-color"]}`}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx("red-color", "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        {/* 특정 조건일때 스타일 적용 가능 */}
        <p className={cx({ "red-color": isLoggedin }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={className({ title: true })}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}

// 1.2 CSS-IN-JS로 방법으로 스타일링 하는 방법
// 💅 npm install styled-components
import styled from "styled-components";
export function StylesFunc() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
  `;

  return (
    <>
      <Title>App</Title>
    </>
  );
}

// 1.2.1 styled-components
