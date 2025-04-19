//컴포넌트 css 스타일링
//1. 리액트 스타일링 방법

// 1.1 전통적인 방법으로 스타일링 하기
// 1.1.1 인라인 스타일
// 객체 형태로 표현
//<h1 style={{
// fontSize: "30px",
// color: "#ed4848",
// textDecoration: "line-through",
// }}></h1>

// 1.1.2 글로벌(외부) 스타일
//외부 css파일에 css코드 작성 후 리액트 컴포넌트 파일(.tsx)과 연결하여 사용
//어떤 파일에서 import하든 연결되어있는 모든 파일에 css가 적용됨
//App.tsx
// import "./App.css";
// export default function App () {
//   return (
//     <div>
//       <h1 className="title">Hello World!</h1>
//     </div>
//   );
// };

//App.css
// .title {
//     font-size: 30px;
//     color: #ed4848;
//     text-decoration: line-through;
//   }

// 1.1.3 CSS 모듈 (+classnames 패키지)
//App.module.css와 classnames/bind 파일을 같이 import하면
//태그 속성 이름을 조건부로 합칠 수 있음 => 그 이름에 따른 css 속성들을 사용할지말지 결정 가능

//App.module.css
// .container {
//     border: 1px solid red;
//     padding: 1rem;
//   }

//   .container .title {
//     font-size: 1.5rem;
//     font-weight: bold;
//     text-decoration: underline;
//   }

//   .container p {
//     color: green;
//   }

//App.tsx
// import styles from "./App.module.css";
// import classNamess from "classnames";
// import classNames from "classnames/bind";
// export default function App () {
//   const isItalic = true;
//   const isColorRed = false;
//   const cx = classNames.bind(styles);
//   return (
//     <>
//       <div className={cx("container")}>
//         <h1 className={cx("title", { "text-red": isColorRed })}>Hello</h1>
//         <p className={classNamess("line-through", { italic: isItalic })}>
//           Moudles CSS!
//         </p>
//       </div>
//     </>
//   );
// };

//App.css
// .container {
//     border: 1px solid red;
//     padding: 1rem;
//   }

//   .container .title {
//     font-size: 1.5rem;
//     font-weight: bold;
//     text-decoration: underline;
//   }

//   .container p {
//     color: green;
//   }

//   .text-red {
//     color: red;
//   }

//   :global .line-through {
//     text-decoration: line-through;
//   }
//   :global .italic {
//     font-style: italic;
//   }

// 1.2 CSS-IN-JS 방법으로 스타일링 하기
// CSS를 런타임에 동적으로 생성해서 적용하는 원리
// 1.2.1 styled-components //0415
// 변수에 styled.태그명`css내용`(백틱) 을 할당한 후(태그드 리터럴 템플릿)
// export default function 안에 jsx 내용에서 <변수명>으로 사용

//import styled from "styled-components";
// const HelloWorld = styled.h1`
// font-size: 30px;
// color: #ed4848;
// text-decoration: line-through;
// &:hover{
//   color:blue;
// }
// `;

// export default function App () {
// return (
//   <div>
//     <HelloWorld>Hello, World!</HelloWorld>
//   </div>
// );
// };

//예문에서
//&:hover의 &은 현재 위치(나자신)를 의미
// 03/src/App.tsx에서 $primary에서 $는 HTML 태그에 전달되지 않게 막아주는 prefix
