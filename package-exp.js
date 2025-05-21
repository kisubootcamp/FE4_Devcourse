/*
  1. 리액트 프로젝트 생성

  1.1 CRA(Create React App) 사용
  1.1.2 CRA 명령어
  1.1.2.1 npx create-react-app [폴더명]
  1.1.2.2 npx create-react-app . // 현재 폴더에 생성
  1.1.3 오늘날 더 이상 사용하면 안 됨.

  1.2 Vite 사용
  1.2.1 Vite 명령어
  1.2.1.1 npm create vite@latest [폴더명]
  1.2.1.2 npm create vite@latest . // 현재 폴더에 생성
  1.2.1.2.1 npm을 사용해서 vite@latest 패키지의 최신 버전을 설치하고,
  vite@latest 패키지의 최신 버전으로 프로젝트를 생성함.
  1.2.1.3 Vanilla, React, Vue, Preact, Lit, Svelte 중 선택
  1.2.1.4 React -> React + TypeScript, React + TypeScript + SWC,
  React + JavaScript, React + JavaScript + SWC 중 선택, React Router v7

  1.2.1.3 npm install
  1.2.1.4 npm run dev

  1.3 보일러 플레이트(boilerplate)
  1.3.1 반복적이고 기본적으로 필요한 코드나 설정 파일들을 빠르게 생성해주는 템플릿
  1.3.1.1 CRA(오늘날 사용x), Vite(가장 많이 사용, 우리가 사용한 것), Next.js, Remix, Gatsby 등

  1.4 Vite
  1.4.1 ESBuild (트랜스 컴파일러 + 사전 종속성 번들링) -> Go(컴퓨터 레벨에 가장 근접한 언어) 기반으로 만들어져서 굉장히 속도가 빠름.
  1.4.1.1 개발 모드에서 node_modules 폴더에 있는 패키지들의 종속성을 사전 번들링 하기 위해서 사용함.

  1.4.2 RollUp (번들링) -> JavaScript -> 배포하기 전에 코드 최적화에 초점
  1.4.2.1 배포 시에 라이브러리나 모듈들을 번들링 하기 위해서 사용함.
  1.4.2.2 트리쉐이킹, 청크 최적화

  1.4.3 SWC - Speed Web Compiler (트랜스 컴파일러) -> Rust(컴퓨터 레벨에 근접한 언어)
  1.4.3.1 타입스크립트나 JSX를 자바스크립트로 빠르게 트랜스 컴파일 하기 위해서 사용함.

  -> RollDown 도구를 개발하는 중... (ESBuild와 RollUp의 장점만 섞어서 개발 중인 차세대 번들링 도구)
*/
