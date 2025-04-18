/*
1. 리액트 스타일링 방법
1.1 전통적인 방법으로 스타일링 하기
1.1.1 인라인 스타일
: style 속성에는 객체 형식의 값이 할당되어야 한다.
    export default function Header() {
    const style = { color: "red", textDecoration: "underline" };
        return (
            <>
            <header>
                <h1 style={style}>내 웹사이트</h1>
            </header>
            </>
        );
    }

1.1.2 글로벌(외부) 방법
: 전역으로 적용
: 어디에 import 하던지 화면에 랜더링되면 모든 컴포넌트에 적용 가능
-> 모든 컴포넌트에 영향을 준다.
-> 트리 형태로 연결됐으면 모두 영향을 받는다.
    (App.tsx)
    import "./App.css"; // css 불러오기
    export default function App () {
        return (
            <div>
            <h1 className="title">Hello World!</h1>
            </div>
        );
    };
    (App.css)
    .title {
    color: blue;
    text-decoration: underline;
    }

1.1.3 CSS 모듈(+ calssnames 패키지)
CSS Modul
: 특정 컴포넌트에만 종속되는 CSS 스타일 *.module.css 파일명
: 파일마다 클래스 이름을 고유하게 만들어서 암호화
classnames 패키지
: 조건부 클래스 이름
    import styles from "./Footer.module.css";
    import className from "classnames";
    import classNames from "classnames/bind"; // CSS 모듈과 함께 사용 시

    export default function Footer() {
    const cx = classNames.bind(styles);
    const isLoggedin = true;
    return (
        <>
        <footer>
            <h1 className={className("title")}>title</h1>
            // 리터럴템플릿으로 두 개 스타일 적용. red-color는 하이픈이 들어가서 [] 사용
            <p className={`${styles.underline} ${styles["red-color"]}`}></p>
            // isLoggedin = true이면 red-color 적용, underline은 무조건 적용
            <p className={cx({ "red-color": isLoggedin }, "underline")}></p>
        </footer>
        </>
    );
    }

1.2 CSS-IN-JS 방법으로 스타일링 하기
: CSS를 런타임에 동적으로 생성해서 적용하는 원리
: 화면에 랜더링되기 직전에(런타임에) 동적으로 스타일을 추가
1.2.1 styled-components
: 엄청 유행했던 라이브러리 -> 추천 x
    import styled from "styled-components";

    export const Title = styled.h1` // h1태그에 스타일 컴포넌트 생성
    font-size: 50px;              // 태그드 리터럴 템플릿 사용해서 css 적용
    color: red;
    `;

1.2.2 emotion
1.2.3 Vanilla Extract

1.3 TailwindCSS 방법으로 스타일링 하기
1.3.1 단독 유틸리티 퍼스트 CSS 라이브러리

1.4 그외
1.4.1 이미지 랜더링하기
1.4.2 폰트 적용하기 
*/
