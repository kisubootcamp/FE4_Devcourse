/*

1. 리액트 프로젝트 생성
1.1 CRA(Create React App)사용
1.2 CRA 명령어
1.1.2.1 npx create-react-app [폴더명]
1.1.2.2 npx create-react-app . // 현재 폴더에 생성
1.1.3 cra 사용하면 안된다


1.2 Vite 사용
1.2.1 vite 명령어
1.2.1.1 npm create vite@latest [폴더명]
1.2.1.2 npm create vite@latest . // 현재 폴더에 생성
1.2.1.2.1 npm을 사용해서 vite@latest 패키지의 최신 버전을 설치하고, 
vite@latest  패키지의 최신 버전으로 프로젝트를 생성한다.
1.2.1.3 Vanillia, React, Vue, Preact, Lit, Svelte 중 선택 (뭘 사용할지 선택)
1.2.1.4 React -> React + TypeSCript, React + TypeScript + SWC, Javascript, Javascript + SWC 중 선택, React Router v7

1.2.1.3 npm install
1.2.1.4 npm run dev 


react app 을 만들 때 일관적이고 빠르게 설정을 잡아주기 위해 사용
     보일러 플레이트

 1.3 보일러 플레이트(boilerplate)
 1.3.1 반복적이고 기본적으로 필요한 코드나 설정 파일들을 빠르게 생성해주는 템플릿(라이브러리)
 1.3.2 CRA, Vite, Next.JS, Remix, Gatsby 등 (CRA 는 사용중지)
 

 1.4 Vite ( 아래 3가지 도구들 사용) - 웹브라우저에서 사용자들이 빠르게 사용할 수 있도록 하는 것에 초점

 1.4.1 ESBuild (Go language, 컴퓨터 레벨에 가장 근접한 언어, 속도가 굉장히 빠름, 번들링에 대한 기능 취약-배포할 정도가 안됨)
 1.4.1.1 개발모드에서 node_moudels 폴더에 있는 패키지들의 종속성을 사전 번들링하기 위해 사용 (트랜스 컴파일러 + 사전 종속성 번들링)
 
 1.4.2 RollUp (번들링, JavaScript) - 배포 전 코드에 대한 압축 및 최적화, 트리쉐이킹 
 1.4.2.1 배포시에 라이브러리나 모듈들을 번들링하기 위해서 사용한다
 1.4.2.2 트리쉐이킹(사용하지 않는 코드 없애줌), 청크 최적화(관련되어 있는 코드를 잘게잘게 쪼개서 ..) <-ESBuild 는 없음

 1.4.3 SWC - (Speed Web Compiler, 트랜스 컴파일러, Rust Language)
 1.4.3.1 타입스크립트나 JSX를 Javscript로 빠르게 트랜스 컴파일 하기 위해서 사용


 ->RollDown 도구 개발중(에반뉴 개발자) : ESBuild + RollUp 장점만 섞어서 개발
*/
