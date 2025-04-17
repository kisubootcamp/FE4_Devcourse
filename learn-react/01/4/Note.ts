/*
1. 리액트 스타일링 방법

1.1 전통적인 방법으로 스타일링 하기
1.1.1 인라인 스타일
1.1.2 글로벌(외부) 스타일
1.1.3 CSS 모듈 (+classnames 패키지)

1.2 CSS-IN-JS 방법으로 스타일링 하기 
1.2.1 styled-components //0415

//0416
1.2.2 emotion
//styled component에서 지원하는 대부분을 지원함
//단, 태그명을 변수로 따로 할당하지 않고,
//import {css} from "@emotion/css"; 쓴 후 jsx에서 
// <h1 className={css`css내용`}>Hello world</h1> 형태로 사용

1.2.2.1 CSS 런타임에 생성한다.
1.2.2.2 초기 로딩에 대한 오버헤드가 커요. (필요한 리소스가 많다) (jsx 태그 내용이 뚱뚱해지니까)

1.2.3 Vanilla Extract (타입스크립트 + 제로 런타임) (정적)
//런타임 오버헤드 : 프로그램 실행 동안 추가 연산이나 자원 소비를 의미 (메모리,CPU 사용량 증가, 응답시간 지연)
//변수에 style{css내용} 저장 후 jsx에 그대로 {변수명}으로 대입
import {style} from "@vanilla-extract/css";
const h1Style=style({css내용})
=>styles.css.ts에 작성

import {h1Style} from "./css/styles.css.ts";
export default function App(){
    return(
        <div>
            <h1 className={h1style}>Hello world</h1>
        </div>
    )
}
=> app.tsx에 작성

=> vite.config.js에 vite 통합하는 플러그인 내용 작성
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
});

1.3 TailwindCSS 방법으로 스타일링 하기
//className에 작성
<button className="bg-red-500 text-white underline">버튼</button> 처럼 이미 만들어진 클래스 조합해서 사용
tailwind.css=> @import "tailwindcss";
index.css=> @import "./tailwind.css";
(index.css는 App.tsx에서 import하고 있음.)

1.3.1 단독 유틸리티 퍼스트 CSS 라이브러리
//유틸리티 클래스: 하나의 클래스가 하나의 스타일 역할만 하는 방식 (ex)text-red-500: 글자색 빨강)
// css파일 없이 각각의 클래스로 미리 만들어진 스타일의 모음
// 각 태그마다 설정해줘야함

1.3.2 twMerge
// Tailwind 클래스들 사이에서 중복되거나 충돌하는 속성 정리해주는 함수

import { twMerge } from "tailwind-merge";
export default function App() {
   const islogin = true;
   return (
     <>
       <h1
         className={twMerge(
           "text-3xl",
           "text-9xl",
           islogin && "text-rose-500 bg-amber-100"
         )}
       >
         Hello World!
       </h1>
     </>
   );
}

1.4 그외
1.4.1 이미지 렌더링하기
1.4.1.1 public 폴더 속 이미지
=>'/public 속 이미지 경로' 사용
//인라인
<img src="/public속 이미지 경로" alt="..."/>
<div style={{...background:`url('/public속 이미지 경로')`,}}></div>
//tailwind
<div className="... bg-[url('/public속 이미지 경로')]"></div>
//글로벌도 있었음 -> className과 연계

1.4.1.2 src 폴더 속 이미지
=> import a from "./src 폴더 속 이미지경로"; , <img src={a} alt="..."/>;
활용법은 public참고
                   
1.4.2 폰트 적용하기
1.4.2.1 구글폰트
@import url(폰트url)
body{
    font-family:
}

1.4.2.2 다운로드 받은 폰트 활용(눈누 사이트)
src/assets/fonts 속 다운받고,
src/css/fonts.css 파일에에
@font-face{
    font-family:사용할 폰트 이름
    src:url("폰트파일위치") //woff2먼저 불러오도록 배치
                          //woff: 웹용 폰트 파일 형식
} 
.폰트이름{
    font-family:폰트이름,
    font-weight,font-style등 추가적인 폰트 속성 설정
}

*/
