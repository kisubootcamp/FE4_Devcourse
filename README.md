# FE4_Devcourse

PR을 제출할 때는  
[FE5_아무개] 2025MMDD*01*과제제출  
[FE5_아무개] 2025MMDD*02*과제제출  
식으로 제목을 작성합니다.

# 리액트 수업 복습 노트 (25/04/14)

## 리액트 cra(= create-react-app) 설치 방법 / 이제 안 쓰지만 알아두기!

1. learn-react/cra 폴더 생성 후 cra 폴더로 이동
2. npx create-react-app . -> 뭐 묻는게 있다면 y
   (로컬에 설치되어 있는걸 바탕으로 다운하는데, 없다면 서버에서 가져온다)
3. npm run start

## 🌟🌟🌟리액트 vite 설치 방법🌟🌟🌟

1. learn-react/vite 폴더 생성 후 vite 폴더로 이동
2. npm create vite@latest .
   (react -> typescript 선택)
3. npm install
4. npm run dev

💡 vite 설치에서 typescript 를 선택한다는 건 ESBuild + RollUp 을 사용한단 뜻

## ✅ 리액트 개발 환경 개념 정리

### React 를 사용하는 이유

1. 강력한 커뮤니티 : 국내외 사용자 많음 ➡️ 자료, 튜토리얼, 라이브러리 풍부
2. 광범위한 생태계 : 상태 관리(Redux, MobX), 스타일링(스타일컴포넌트, CSS모듈), 라우팅
3. 모바일 앱 확장성 : React Native를 통해 모바일 앱 개발도 가능
4. 컴포넌트 기반 개발 : UI를 작고, 독립적인 단위로 쪼개어 재사용성 및 유지보수성 향상

### DOM과 가상DOM

DOM : 웹 페이지의 구조를 객체 트리로 표현
가상 DOM(Virtual DOM) : 기존 DOM을 메모리에 복제하여 변경 사항만 비교 후 실제 DOM에 반영
가상 DOM의 장점 : DOM조작 최소화 ➡️ 성능 향상

### 보일러 플레이트 (Boilerplate)

반복적이고 기본적으로 필요한 코드나 설정 파일들을 빠르게 생성해주는 템플릿
리액트 프로젝트에서는 CRA, Vite, Next.js, Remix, Gatsby 등이 대표적인 보일러플레이트 도구이다.
개발 초기 세팅을 빠르게 시작할 수 있도록 도와준다.

## ✅ 빌드 도구 & 번들러

### 1. 바벨 (Babel)

서로 다른 언어를 통일하려다 실패한 '바벨탑'에서 유래한 이름
JSX등 최신 문법을 브라우저가 이해할 수 있도록 변환해주는 트랜스 파일러이다.

- JSX를 일반 Javascript 로 변환해주기 때문에 리액트에서 JSX사용이 가능하다.
- ES6+ 문법을 구형 브라우저에서도 사용할 수 있게 변환해준다.
- 코드 변환 과정 : 파싱 ➡️ 변환 ➡️ 출력

### 2. 웹팩 (Webpack)

여러 개의 자바스크립트 파일 및 모듈들을 하나로 묶어주는 모듈 번들러

- 의존성 그래프를 분석해 실제로 사용하는 코드만 추려냄 (트리 쉐이킹)
- 결과적으로 빌드 성능 향상, 파일 용량 축소, 최적화
- CSS, 이미지, 폰트 등 다양한 자산도 함께 처리 가능

### 3. Vite

웹팩보다 빠르고 간편한 차세대 프론트엔드 빌드 도구!

- 개발 서버 구동 속도가 빠르다 (ESM 기반 + 사전 번들링)
- React 와 궁합이 매우 좋다!
- 내부적으로 ESBuild 를 사용해 번들링 속도 향상

### 4. 관련 도구

| 도구        | 역할                       | 특징 및 사용 목적                                         |
| ----------- | -------------------------- | --------------------------------------------------------- |
| **ESBuild** | 트랜스파일러 + 사전 번들러 | Go 언어로 작성됨, 매우 빠름, Vite 내부 사용               |
| **Rollup**  | 번들러                     | 트리 쉐이킹, 청크 최적화, 라이브러리 번들링에 적합        |
| **SWC**     | 트랜스파일러               | Rust로 작성, 바벨 대체 가능, Next.js에서 권장             |
| **Babel**   | 트랜스파일러               | JSX, TS 등을 브라우저가 이해할 수 있도록 변환 (기존 방식) |

### 정리

- 리액트 프로젝트에서는 다양한 최신 문법과 자산들이 사용됨
- 바벨, SWC, ESBuild 등의 트랜스파일러를 사용해 최신 문법을 브라우저 호환 코드로 변환
- 웹팩, 롤업, Vite 등을 사용해 여러 모듈을 효율적으로 묶어 최적화된 번들 생성
- 상황에 따라 도구를 조합해서 더 빠르고 효율적인 개발 환경 구성 가능

💡 청크 최적화 : 관련된 코드를 잘게 나누어 필요한 부분만 로딩 ➡️ 성능 향상

## ✅ 모듈 시스템

### 1. CommonJS (CJS)

- require, module.exports 사용
- Node.js의 기본 모듈 시스템
- 동기 방식
- 브라우저에서 직접 사용 불가 ➡️ Vite/Webpack 같은 도구로 변환 필요!

### 2. UMD (Universal Module Definition)

- 다양한 환경 (Node, AMD, 브라우저 등)에서 모두 동작 가능
- 라이브러리 배포 시 주로 사용

### 3. ESM (ES Modules)

- import/export 사용
- 최신 표준 모듈 시스템
- 브라우저와 Node.js에서 모두 지원
- 비동기 로딩 가능, 트리 쉐이킹 지원
- Vite/React 는 기본적으로 ESM 사용

💡 왜 변환이 필요할까?
브라우저는 기본적으로 ESM만 인식한다.
CJS/UMD 라이브러리를 사용하려면 ESM으로 변환이 필요하다.
이 과정을 바벨, 웹팩, 롤업 같은 도구들이 처리한다.

💡import가 많은 이유? ESM 방식은 필요한 모듈을 파일 단위로 불러오기 때문

#### VS Code 관련 팁

특정 폴더를 VSCode에서 여는 법

```
cd 폴더경로
code .
```

## ✅ 프로젝트 폴더 구조 & 주요 파일 설명 (React Vite 기준)

#### 0. Root 디렉토리 - 프로젝트 최상단

#### 1. gitignore

git으로 버전 관리하지 않을 파일/폴더를 명시
해당 부분 따로 추가

```
# Custom ignore
.env
.env.*
package-lock.json
```

#### 2. package.json

프로젝트의 메타 정보와 의존성 관리

- name, version : 프로젝트 이름과 버전
- scripts : 실행 가능한 명령어(npm run dev 가 여기있음)
- dependencies : 실제 앱에 필요한 패키지
- devDependencies : 개발 도구 및 라이브러리

#### 3. vite.config.ts

Vite 설정 파일
플러그인, 별칭, 환경 변수 등 다양한 설정 가능

#### 4. eslint.config 또는 .eslintrc

코드 스타일 및 문법 오류를 체크하기 위한 ESLint 설정 파일

#### 5. tsconfig.json (Typescript 사용 시)

Typescript 컴파일러 설정 파일
경로 파일, Strict 모드 등 타입 관련 설정 가능

#### 6. index.html

앱의 기본 HTML 템플릿
Vite는 이 파일을 기반으로 앱을 빌드
div#root 와 같은 React 앱의 마운트 지점 포함

#### 7. src/ (소스폴더)

애플리케이션의 모든 개발 작업이 이곳에서 이루어짐

- assets/ : 이미지, 폰트 등의 정적 자산 저장 폴더
- App.css : App 컴포넌트의 스타일을 정의하는 CSS 파일
- App.jsx/App.tsx : 메인 애플리케이션 컴포넌트 파일. React 컴포넌트 구조의 시작점
- main.jsx/main.tsx : 애플리케이션의 진입점 파일. ReactDOM을 사용하여 App 컴포넌트를 html에 렌더링

#### 8. public

빌드 과정에서 그대로 복사되는 정적 파일 보관소
보통 index.html, 파비콘 등을 포함
/public/image.png ➡️ 브라우저에서는 /image.png 로 접근 가능

#### 9. node_modules/

npm install 로 설치된 모든 의존성 모듈
프로젝트 실행에 필수지만 Git으로 관리하지 않음
.gitignore에 기본적으로 포함되어 있음

## ✅ React `npm run dev` 실행 시 동작 순서

#### 1. Vite 개발 서버 실행

- Vite가 vite.config.ts 를 기반으로 빠르게 개발용 서버 실행
- index.html 을 읽고 시작점 파일 (main.tsx 또는 main.jsx)을 찾아 실행

#### 2. index.html 처리

- 최상단 템플릿 역할
- `<div id="root"></div>` 이 부분이 React 앱이 마운트 될 위치

#### 3. main.tsx 실행

- `ReactDOM.createRoot(document.getElementById('root'))`로 App 컴포넌트를 마운트
- 이때 root ID가 일치하지 않으면 화면이 나타나지 않음  
  예시: root 부분의 `id="tt"`으로 바꿨다면 `createRoot(document.getElementById('tt'))`로 함께 수정해야 함

#### 4. App.tsx 렌더링

- App 컴포넌트가 실행되며 전체 UI 구조가 시작됨
- 이후 각 하위 컴포넌트가 트리 구조로 렌더링 됨

## ✅ React 디렉토리 관련 주의할 점❗

#### 건드리지말 것(건드리면 피곤)

- `package-lock.json` : 패키지 버전 잠금 정보. 삭제하거나 수정하면 재현성이 깨짐
- `node_modules/` : 설치된 의존성 모음. 직접 수정x

### React 컴포넌트 작성 방법

#### 1. 함수형 컴포넌트 (권장)

React 16.8 이후 도입된 Hook 기반 개발의 중심
useState, useEffect 등 사용가능

#### 2. 클래스형 컴포넌트 (구버전, 비추)

state/라이프 사이클 관리용으로 사용
현재는 레거시 코드에서만 사용된다.

## ✅ 자주 사용하는 설정 및 팁

### 1. ES7+ React/Redux/React-Native snippets 확장 설치

rfc 입력 시 함수형 컴포넌트 자동 생성

### 2. 설정 변경 방법

2-1) 설정 > 확장 > ES7+ Snippets : "Import React on top" 체크 해제
2-2) 코드 스니펫 커스터마이즈 : 설정 > 코드 조각 > typescriptreact 선택 후 아래 내용 추가

```
{
  "Function Component": {
    "prefix": "rfc",
    "body": [
      "export default function ${1:$TM_FILENAME_BASE}($2) {",
      "  return (",
      "    <>",
      "      <h1>${1:$TM_FILENAME_BASE} Component</h1>",
      "    </>",
      "  );",
      "}"
    ],
    "description": "Create a function component"
  }
}
```

#### 💡 불필요한 파일 정리(프로젝트 초기 셋업 시)

App.css, index.css, assets/ 폴더 등 사용하지 않는 기본 템플릿 파일들은 제거

#### 💡 용어 정리

레거시 코드 : 유지보수는 되지만 오래된 방식으로 작성된 코드
번들링 : 여러 파일을 하나의 파일로 묶어 브라우저가 빠르게 읽을 수 있게 만드는 과정

# 리액트 수업 복습 노트 (25/04/15)

## ✅ JSX?

JavaScript + XML 확장 문법
HTML과 유사하지만, 내부적으로는 React.createElement()로 변환됨

#### JSX와 HTML 차이점

1. 하나의 루트 요소로 반환 : 컴포넌트는 반드시 하나의 최상위 요소만 반환해야 한다.
2. 모든 태그 닫기 : `<img />` 처럼 닫기
3. 속성명 : HTML에서의 class가 JSX에서는 className (for → htmlFor)
4. 표현식 사용 : JavaScript 표현식은 { } 안에서 사용 ex) `{name}`
5. 인라인 스타일 : 문자열이 아닌 객체로 작성 ex) `style={{color:"red"}}`
6. 주석 : JSX 내부에서는 `{/* 이렇게 */}`

## ✅ 빈 태그(Fragments)

#### 방법1. `<React.Fragment></React.Fragment>`

- React.Fragment는 `import React from 'react'` 가 필요함

```
import React from "react";
export default function Example() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Paragraph</p>
    </React.Fragment>
  );
}

```

#### 방법2. shorthand (<> </>) - React 17 이상

- 빈 태그는 `<React.Fragment>` 의 축약형
- 빈 태그는 import가 따로 필요하지 않다.

```
export default function Example() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}
```

### 💡 HMR (Hot Module Replacement)

- 개발 중 변경한 코드만 빠르게 갱신해주는 기능
- 전체 페이지를 새로고침하지 않고도 변경사항을 반영
- 상태(state) 유지 가능해서 매우 효율적임
- Vite 는 기본적으로 HMR 기능을 지원함

## ✅ React Component

### React Component 작성 규칙

- 컴포넌트는 JSX를 반환하는 함수로 작성
- 보통 함수 선언문을 사용 `function ComponentName() {}`
- 파일 단위로 분리하여 `src/components/` 폴더에 정리  
  (`App.tsx`만 루트에 위치)
- 컴포넌트 이름은 대문자로 시작해야 React 요소로 인식
- 👍 VSCode 에서 `ctrl + Space` 로 자동 import 가능

### Component 생성 및 선언 방식 예시

```
// components/Footer.tsx
export default function Footer() {
  return (
    <footer>
      <p>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
    </footer>
  );
}
```

```
// App.tsx
import Footer from "./components/Footer";
```

## ✅ React 스타일링 방법

1. 전톡적인 방법으로 스타일링
2. CSS-in-JS 스타일링
3. tailwind.css 스타일링
4. 그 외

### 전통적인 방법으로 스타일링

##### 1. 인라인 스타일

`<h1 style={{ color: "red", textDecoration: "underline" }}>제목</h1>`

##### 2. 글로벌 스타일

- 💡전역으로 적용되므로 모든 컴포넌트에 영향이 간다.

```
/* App.css */
.title {
  color: violet;
  text-decoration: underline;
}
```

```
import "./App.css";
<h1 className="title">제목</h1>
```

##### 3. CSS 모듈 (.module.css)

- 모듈 방식을 사용해서 특정 컴포넌트에만 종속되는 CSS코드를 작성하는 방법이다.
- 파일명이 .module.css 라는게 특징
- 모듈 방식에서 클래스 이름이 red-color 처럼 카멜 케이스가 아닐때는 아래처럼 넣어주고,
  두 개 이상의 클래스를 넣어 줄 때도 아래처럼 넣어주기

```
/* Footer.module.css */
.red-color {
  color: red;
}
.underline {
  text-decoration: underline;
}
```

```
import styles from "./Footer.module.css";
<p className={`${styles["red-color"]} ${styles.underline}`}>텍스트</p>
```

##### 3-1. classnames 패키지

- 조건부 클래스 조합에 유용한 패키지다.
- CSS모듈과 함께 사용할 때 bind를 사용

###### classnames 패키지 사용하는 방법

터미널에 `npm install classnames` 입력해서 패키지 다운

###### CSS 모듈 + bind

```
import classNames from "classnames/bind";
import styles from "./Footer.module.css";

const cx = classNames.bind(styles);
<p className={cx("red-color", "underline")}>텍스트</p>
```

### CSS-in-JS

##### 1. Styled-Components

- 실제 CSS 문법 그대로 사용
- 컴포넌트 단위 스타일 관리
- 클래스 중복 방지 (자동으로 클래스 네임 생성해줘서)
- props 기반 조건부 스타일링 가능
  ⚠️ 런타임에서 스타일이 생성되므로 성능에 영향 줄 수 있음

##### 스타일 컴포넌트 사용하는 방법

1. vscode 터미널에서 `npm install styled-components` 입력해서 스타일 컴포넌트 다운
2. tsx 적용

```
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  text-decoration: underline;
`;

<Title>제목</Title>
```
