/*

  1. 리액트 프로젝트 생성
  ➡️ 1.1 CRA(Create React App) 사용
  1.1.2 CRA 명령어
  1.1.2.1 npx create-react-app [폴더명]
  1.1.2.2 npx create-react-app . // 현재 폴더에 생성
  1.1.2.3 npx create-react-app my-app // 이 명령어가 들어간 위치를 기준으로 my-app 폴더 생성, 거기에 설치
  1.1.3 사용하면 안된다

  ➡️ 1.2 Vite 사용
  1.2.1 Vite 명령어
  1.2.1.1 npm creat vite@latest [폴더명]
  1.2.1.2 npm creat vite@latest .      // npm 이라는 도구를 이용해서, 생성해라, vite라는 도구의 최신 버전을
  1.2.1.2.1 npm을 사용해서 vite@latest 패키지의 최신 버전을 설치하고, vite@latest의 최신 버전으로 프로젝트를 생성한다.
  1.2.1.3 Vanilla, React, Vue, Preact, Lit, Svelte 중 선택
  1.2.1.4 React 선택 -> React + TypeScript, React + TypeScript + SWC, JavaScript, JavaScript + SWC, React Router v7 중 선택
  1.2.1.3 npm install
  1.2.1.4 npm run dev -> 프로젝트 구동

  ➡️ 1.3 보일러 플레이트(boilerplate)
  1.3.1 반복적이고 기본적으로 필요한 코드나 설정 파일들을 빠르게 생성해주는 템플릿
  1.3.1 CRA, Vite, Next.JS, Remix, Gatsby 등 (현재는 Vite를 가장 많이 사용)

  라이브러리 vs 프레임워크
  - 라이브러리 : 내가 필요한 재료를 전부 사와서 요리하는 것, 내가 필요한 것 다 가져와서 설치해서 사용
  - 프레임워크 : 밀키트, 재료 따로 준비 필요 x, 보통 필요한게 내장돼있음 ( 자유도 떨어짐 )
  - React는 라이브러리 (공식사이트), 하지만 사실 양쪽 모두 애매함
  - Vue는 프레임워크(공식사이트)

  ➡️ 1.4 Vite가 사용하는 도구
  ⭐️ 1.4.1 ESBuild (트랜스 컴파일러 역할 + 사전 종속성 번들링)
    - Go 랭귀지로 작성됨 (Go, 컴퓨터 레벨에 가장 근접한 언어) -> 속도 빠름 (사전 번들링 시간 빠름)
  1.4.1.1 개발 모드에서 node_modules 폴더에 있는 패키지들의 종속성을 사전 번들링 하기 위해서 사용 
    - node 패키지의 대부분의 패키지가 CJS, UMD로 설치되어 있는데, 이런 패키지가 웹 브라우저에서 돌아가게 하려면
      ESM으로 변환돼야 함 (웹 브라우저는 ESM만 실행할 수 있어서) -> 이 역할을 하는게 ESBuilt
    - 사전 종속성 번들링 : 웹 브라우저에 어떤 내용을 보여주기 전에, 초기에 설치되어 있는 node_modules 폴더의 패키지 중
      CJS, UMD 방식으로 된 걸 ESM 방식으로 변환시키는 것
  1.4.1.2 트랜스 컴파일러 역할
    - typescript, jsx 등 서로 다른 언어로 작성된 것을 웹 브라우저가 이해하기 쉬운 언어인
      html, css, javascript로 변환해주는 역할
  1.4.1.3 장점 : Go 랭귀지 사용으로 속도 빠름
  1.4.1.4 단점 : 번들링 기능이 취약함 (번들링을 해주긴 하지만, 배포할 때 사용할만큼 성능이 뛰어나지는 않음)

  ⭐️ 1.4.2 RollUp (번들링, JavaScript)
  1.4.2.1 배포시에 라이브러리나 모듈을 번들링 하기 위해 사용
  1.4.2.2 트리쉐이킹, 청크 최적화
    - 청크 최적화 : 관련되어진 코드를 잘게잘게 스크립팅 하는 것 
    - 트리쉐이킹 : 사용하지 않는 코드를 제거
  1.4.2.3 특징
    - JavaScript로 작성됨
    - 배포 전 최적화 (코드의 압축, 최적화, 쓰지 않는 코드를 덜어내는) 역할

  ⭐️ 1.4.3 SWC - (Speed Web Compiler, 트랜스 컴파일러, Rust)
  1.4.3.1 TypeScript나 JSX를 JavaScript로 빠르게 트랜스 컴파일 하기 위해 사용
  1.4.3.2 특징
    - 컴퓨터 레벨에 근접한 언어인 Rust로 작성됨
    - JavaScript로 작성하지 않았기 때문에 트랜스 컴파일을 빠른 속도로 처리해준다는 장점을 가짐
    - Next.JS는 기본적으로 SWC 탑재함 (ESBuild 안씀, 웹팩과 SWC를 주력으로 사용, 왜 rollup 안씀? -> Vite 안써서)

  React 설치 옵션
  - TypeScript : ESBuild + RollUp
  - TypeScript + SWC : RollUp + SWC 
    - 그럼 아예 ESBuild 사용 X ?? -> NOPE 같이 사용함

  👀 강사님이 SWC를 지양하는게 좋다고 판단하신 이유
  1. 에반 유가 SWC를 곱게 바라보지 않는 듯하게 한 연설
  2. Vite에서 React19를 공식적으로 추가했을 때, SWC에 대한 지원이 미약했던 점

*/
