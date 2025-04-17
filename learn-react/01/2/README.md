## 인라인 스타일(Inline Style)

> HTML 태그의 style 속성을 사용해서 CSS 스타일을 지정하는 방법이다.

```jsx
export default function Header() {
  const style = { color: "red", textDecoration: "underline" };
  return (
    <header>
      <h1 style={{ backgroundColor: "red", color: "#fff" }}>내 웹사이트</h1>
      <p style={style}>내용</p>
    </header>
  );
}
```

- HTML의 인라인 스타일과는 다르게 스타일 속성에 객체 형태의 값을 할당해야한다.
- 기존 케밥 스타일(`background-color`)의 속성은 카멜 스타일(`backgroundColor`)로 변형해야 한다.
- 자바스크립트를 기본으로 하는 문법이기 때문에, 객체를 변수에 담아 속성 값으로 넣을 수 있다.

## 외부 스타일(External Stylesheet)

> 별도의 css 파일에 css 코드를 작성하고, 컴포넌트 파일에 import 해서 사용하는 방법이다.

<aside>
💡

css 파일을 어떤 컴포넌트에 import 해도, 애플리케이션 전체에 적용되기 때문에 main.tsx에 import하는 것이 가독성 및 유지보수에 용이하다.

</aside>

**globals.css**

```css
.title {
  color: blue;
  text-decoration: underline;
}

section p {
  padding: 10px 20px;
  border: 1px solid #d6d6d6;
  display: inline-block;
}
```

**main.tsx**

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./css/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

모든 컴포넌트에서

- `title` 클래스
- section 태그 안의 p 태그

해당하는 모든 태그가 스타일이 적용된다.

## CSS Modules

> 특정 컴포넌트에만 종속되는 CSS 코드를 작성하기 위한 방법이다.

- 파일명은 `*.module.css` 로 한다.
- 클래스명이 고유한 값으로 변환되기 때문에 클래스 이름이 중첩되는 것을 방지해준다.
- css에서 선택자는 오직 클래스만 사용할 수 있다.

**Footer.module.css**

```css
.underline {
  text-decoration: underline;
}

.red-color {
  color: red;
}
```

### CSS Modules만 사용할 경우

```tsx
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <p className={`${styles.underline} ${styles["red-color"]}`}>
        &copy; 2024 내 웹사이트. 모든 권리 보유.
      </p>
    </footer>
  );
}
```

![image.png](attachment:362825a6-6712-4feb-90c8-1c437b99e745:image.png)

- module.css 파일을 import하고 styles 객체를 받아와 이를 사용한다.
- 객체 안에는 `module.css` 에서 선언된 클래스명들이 고유한 값으로 변환되어 담겨 있다.
- 각 프로퍼티를 className 속성의 값으로 할당하면 스타일이 적용된다.
  - 만약 클래스명에 `-` 가 들어갈 경우, 괄호 표기법을 사용한다.
  - 한 태그에 두 개 이상의 클래스를 적용하고 싶은 경우, 템플릿 리터럴을 사용한다.

### classnames 라이브러리를 사용할 경우

조건부 스타일을 적용할 때 유용하다.

```tsx
import classNames from "classnames/bind";
import styles from "./Footer.module.css";

export default function Footer() {
  const cx = classNames.bind(styles);
  const isLoggedin = true;
  return (
    <footer>
      <p className={cx({ "red-color": isLoggedin }, "underline")}>
        &copy; 2024 내 웹사이트. 모든 권리 보유.
      </p>
    </footer>
  );
}
```

- 바인딩 함수를 이용하여 미리 styles 객체를 바인딩하고 사용한다.
- cx 함수에 매개변수로 클래스명을 주는 것만으로 적용할 수 있다.
- `{ "클래스명" : boolean }` 형태로 매개변수를 줄 경우
  - boolean 값이 true 일 경우 스타일을 적용하고, false일 경우 적용하지 않는다.
  - 이를 활용하여 조건부 스타일을 구현할 수 있다.

<aside>
💡

CSS Module을 활용하지 않아도, classnames를 사용할 수 있다.

```tsx
import className from "classnames";

export default function Footer() {
  return (
    <footer>
      <h1 className={className({ title: true })}>title</h1>
    </footer>
  );
}
```

</aside>
