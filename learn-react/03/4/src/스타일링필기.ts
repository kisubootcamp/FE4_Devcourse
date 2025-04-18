/*
1. 리액트 스타일링 방법

1.1 전통적인 방법으로 스타일링 하기
1.1.1 인라인 스타일
1.1.2 글로벌(외부) 스타일 
1.1.3 CSS 모듈 (+ classnames 패키지)

1.2 CSS-IN-JS 방법으로 스타일링 하기
1.2.1 styled-components ㅏ
: 스타일이 적용되어있는 변수를 컴포넌트처럼 활용하는 방법


1.2.2 emotion 
설치방법)
npm i @emotion/css 
className={css``}
초기 로딩에 대한 오버헤드가 크다

1.2.3 Vanilla Extract 
타입스크립트 지원이 완벽하다
제로 런타임
npm install @vanilla-extract/css

vite와 통합하는 방법
npm install @vanilla-extract/vite-plugin

********
vite.config.ts 수정

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
})
********
npm run build : dist 폴더 생성

1.3 TailwindCSS 방법으로 스타일링 하기
npm install tailwindcss @tailwindcss/vite

https://tailwindcss.com/docs/installation/using-vite

설치하고, vite.config.ts 파일도 수정해줘야함
검색 기능 이용하고,
커스텀 밸류 만 외우면 된다

**** tailwind merge
tailwind 버전 클래스 네임?
설치방법
npm i tailwind-merge



1.3.1 단독 유틸리티 퍼스트 CSS 라이브러리

1.4 그외
1.4.1 이미지 렌더링하기
1.4.2 폰트 적용하기 

*/

// styled Component, emotion, vanilla extract는 유지보수 할 정도, 아예 낯설지 않게, 대충 기본정도만 알고
// 하나만 집중한다면 Tailwind 만 파라
