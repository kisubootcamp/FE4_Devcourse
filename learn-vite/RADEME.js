/*
1. 리액트 프로젝트 생성
1.1 CRA(Create React App) 사용
1.1.2 CRA 명령어
1.1.2.1 npx create-react-app [폴더명]
1.1.2.1 npx create-react-app . // 현재폴더 생성

Vite 사용
Vite 명령어
npm create vite@latest [폴더명]
npm create vite@latest . // 현재폴더 생성
npm을 사용해서 vite@latest 패키지의 최신 버전을 설치하고.
vite@latest 패키지의 최선 버전으로 프로젝트를 생성한다.
Vanilla, React, Vue, Preact, Lit, Svelte 중 선택
React -> 
    React + TypeScript, React + TypeScript + SWC,
    React + JavaScript, React + JavaScript + SWC 중 선택,
    React Router v7

    npm install
    npm run dev
    o

보일러 플레이트(boilerplate)
반복적이고 기본적으로 필요한 코드나 설정 파일들을 빠르게 생성해주는 템플릿
CRA, Vite, Next.JS, Remix, Gatsby 등

Vite
ESBuild
개발 모드에서 node_moudels 폴더에 있는 패키지들의 종속성을 사전 번들링 하기 위해 사용
go랭귀지라 속도는 빠름 최적화가 약함

RollIUp
배포시에 라이브러리나 모듈들을 번들링 하기 위해 사용
js속도가 느린데 트래쉬해킹 최적화가 안정

SWC - (Speed Web Compiler)
타입스크립트나 JSX를 자바스크립트로 빠르게 트랜스 컴파일 하기 위해 사용

*/