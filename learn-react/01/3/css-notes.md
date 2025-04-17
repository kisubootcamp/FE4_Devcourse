## 1. 전통적인 방법으로 스타일링 하기

### 1.1.1 인라인 스타일

> 사용 방식: style 속성에 객체 형태로 스타일 지정

```tsx
<div style={{ color: "red", fontSize: "16px" }}>Text</div>
```

`장점`

- 컴포넌트 내부에서 빠르게 스타일 지정 가능
- 자바스크립트 로직과 스타일을 직접 연결 가능 <br/>

`단점`

- 복잡한 스타일링에는 비효율적
- CSS 기능 중 가상 선택자(:hover, :focus)나 미디어 쿼리 사용 불가
- 유지보수 어려움

### 1.1.2 글로벌(외부) 스타일

> .css 파일을 만들어 import './파일명.css'로 적용

```css
.title {
  color: blue;
}
```

```tsx
import "./App.css";
function App() {
  return <h1 className="title">Hello</h1>;
}
```

`장점`

- CSS의 모든 기능 사용 가능 (미디어 쿼리, 애니메이션 등)
- 브라우저 친화적, 범용적 사용
  <br/>

`단점`

- 클래스명이 전역(global)이라 충돌 가능성 있음
- 컴포넌트 단위 스타일 분리가 어려움

### 1.1.3 CSS 모듈

> .module.css 파일을 사용하고 import로 클래스 참조

```css
/* styles.module.css */
.title {
  background-color: gray;
}
```

```css
import styles from './styles.module.css';

<div className={styles.title}>Box</div>
```

`장점`

- 클래스명이 자동으로 고유화되어 전역 충돌 없음
- 전통적인 CSS 작성 방식 그대로 사용 가능
  <br/>

`단점`

- 조건부 스타일링은 classnames 패키지나 수동 조작 필요
- JS와 스타일이 분리되어 있음

## classNames 라이브러리
> classnames 패키지는 여러 개의 CSS 클래스를 하나의 문자열로 합쳐주는 유틸리티 함수. 조건부로 클래스를 적용하거나 CSS 모듈과 함께 사용할 때 가독성을 높이고 코드를 간결하게 만들어줌.
- 기본적으로 classnames 함수는 문자열을 받아서 공백으로 구분된 클래스 문자열을 만들어준다.

ex) cx("a", "b") → "a b"

- 조건부 클래스를 적용할 수 있다. 객체 형태로 전달하면 값이 true인 클래스만 포함된다.

ex) cx("box", { active: isActive, hidden: !isActive }) → isActive가 true면 "box active", false면 "box hidden"

CSS 모듈을 사용할 경우, 클래스 이름에 하이픈(-)이 포함되어 있을 때 점 표기법(styles.className)을 쓸 수 없고, 대괄호 표기법(styles["class-name"])을 사용해야 함. 이때 classnames/bind를 활용하면 이를 더 깔끔하게 처리할 수 있음.

classnames/bind를 import하고 스타일 객체를 bind하면, 해당 스타일 모듈 내의 키를 문자열로 전달하는 것만으로 자동으로 클래스가 매핑됨.
```tsx
import styles from "./Component.module.css"
import classNames from "classnames/bind"
const cx = classNames.bind(styles)
```

ex) <br/>
cx("underline", "red-color") → 자동으로 styles["underline"], styles["red-color"]가 적용된 결과를 반환.

조건부 클래스도 함께 적용 가능.<br/>
ex) cx("box", { active: isActive }) → isActive가 true일 때만 "active" 클래스가 추가된다.

`정리하면 classnames는 조건에 따라 클래스 적용이 필요한 경우, 그리고 CSS 모듈을 사용할 때 클래스 이름을 깔끔하게 처리할 수 있도록 도와주는 유용한 도구`

## 1.2 CSS-IN-JS 방법으로 스타일링 하기

## 1.2.1 styled-components

> 컴포넌트 기반 스타일 정의, JS 안에서 CSS 작성

```tsx
import styled from 'styled-components';
const Button = styled.button`
    background: blue;
    color: white;
    padding: 10px;
  `;

function App() {
    return <Button>Click Me</Button>
  }

```
`장점`
- 컴포넌트 단위로 스타일을 캡슐화할 수 있어 유지보수 용이
- 자바스크립트 로직과 스타일을 함께 작성할 수 있음
- 조건부 스타일링, props 기반 스타일링 쉬움

```tsx
const Button = styled.button`  background: ${(props) => (props.primary ? 'blue' : 'gray')};`;
```
`단점`
- 런타임 성능 이슈 (스타일 생성 시 비용 발생)
- 번들 크기 증가 가능성
- RSC(React Server Components) 등 최신 React 기술과 충돌 발생 가능 (의 이유로 styled component 유지보수 모드 들어감)

`` 최근 생태계 흐름은 tailwind 등 유틸리티 기반으로 이동 중``

