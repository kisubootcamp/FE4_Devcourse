import { style } from "@vanilla-extract/css";
// import {style} 을 치면 자동완성 됨
// 여기서 @vanilla-extract/css에 style이 있다는 걸 알수있음.
// 공식문서

export const hero = style({
  backgroundColor: "red",
  color: "White",
  padding: "1rem",
});

// CSS를 .css.ts 파일처럼 TS 코드로 작성하게 도와주는 라이브러리
// 이렇게 ts 파일에 작성하면 런타임이 아니라 빌드 타임에 CSS 파일로 변환된다.
