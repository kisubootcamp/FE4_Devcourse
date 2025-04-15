/*
1. 리액트 스타일링 방법

1.1 전통적인 방법으로 스타일링 ---------    NOTE
1.1.1 인라인 스타일
export default function Header() {
  const style = { color: "red", textDecoration: "underLine" };
  return (
    <>
      <header>
        <h1 style={style}>내 웹사이트</h1>
      </header>
    </>
  );
}

1.1.2 글로벌(외부) 스타일 ------------ NOTE
(파일 생성 ex: app.css)
.title {
color: purple;
text-decoration: underline;
}

(-> App.tsx)
import "./App.css";

component 상관없이 import가 된 부분에서 import 가 있는 다른 컴포넌트의 파일에도 적용 -> 같은 컴포넌트 트리 안에 있으면 다 영향을 받음


// 예시코드
import Header from "./components/AssignHeader.tsx";
import Nav from "./components/AssignNav.tsx";
import Main from "./components/AssignMain.tsx";
import Footer from "./components/AssignFooter.tsx";

export default function App() {
  return (
    <>
      <h1 className="title">TEST</h1>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}




// CHECK react folder structure




1.1.3 CSS 모듈 (+classnames 패키지) -------------NOTE
특정 컴포넌트에 종속되는 스타일을 작성할 수 있음
- 파일명.module.css 
- 컴포넌트에 클래스 속성으로 넣어줘야함

//클래스 네임스 패키지 -------------CHECK
##1
import styles from "./Footer.module.css";
import classNames from "classnames/bind";

export default function Footer() {
  const isLoggedIn = false; // true, false 값에 따라 classnames 를 이용해서 동적으로 스타일 추가 
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <p className={cx({ "red-color": isLoggedIn }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}

##2
import styles from "./Footer.module.css";
import className from "classnames";
import classNames from "classnames/bind"; // css 모듈방식과 함께 사용할때

export default function Footer() {
  const isLoggedIn = false; // true, false 값에 따라 classnames 를 이용해서 동적으로 스타일 추가
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <h1 className={className({ title: true })}>title</h1>
        <p className={cx({ "red-color": isLoggedIn }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}


1.2 CSS-IN-JS 로 스타일링을 하는 방법   -------------NOTE
자바스크립트 파일 안에서 css를 작성하는 방법 
한때 유행했던 방법 

1.2.1 styled-components 
 - 김기수 강사님은 식별자의 이름을 보고 한번에 식별하지 못하기 때문에 사용하는 것을 좋아하지 않음
1.2.2 emotion
1.2.3 Vanilla Extract 

1.3 Tailwind CSS 로 스타일리을 하는 방법
1.3.1 단독 유틸리티 퍼스트 CSS 라이브러리

1.4 그외

1.4.1 이미지 렌더링

1.4.2 폰트 적용
*/
