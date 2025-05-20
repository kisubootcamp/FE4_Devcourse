# 리액트 스타일링 방법

## 전통적인 방법
### 인라인 스타일
- 컴포넌트 안에서 스타일을 작성하는 방법
```jsx
    const style = { color: "red", textDecoration="underline" };

    <h1 style={style}>
        인라인 스타일링
    </h1>
```

### 글로벌(외부) 스타일
- `.css` 파일을 만들어서 스타일을 작성하는 방법
- 모든 컴포넌트에 영향을 주기 때문에` 글로벌 스타일`이라고 한다.
```css
    h1 {
        color: red;
        text-decoration: underline;
    }
```
```jsx
    import "./index.css";
```

### CSS 모듈 (+ classnames 패키지)
- `.module.css` 파일을 만들어서 스타일을 작성하는 방법
- 특정 컴포넌트에만 스타일 적용 가능
- 반드시 `클래스 선택자`로만 작성해야 하며, 클래스를 암호화해 고유하게 만들어주는 원리이다.
```css
    .red-color {
        color: red;
    }
    .underline {
        text-decoration: underline;
    }
```
```jsx
    import styles from "./index.module.css";

    // 한개만 작성 시
    <p className={styles.underline}>underline</p>
    // 여러개 작성 시
    // - 기호가 붙은 것은 대괄호 연산자 사용
    <p className={`${styles.underline} ${styles["red-color"]}`}>red underline</p>
```

- **classNames 라이브러리 사용** : 스타일을 여러개 작성할 때 보다 짧고 편하게 작성할 수 있다.
```jsx
    import styles from "./index.module.css";
    import classNames from "classnames/bind"; // CSS 모듈과 함께 사용할 때
    import className from "classnames"; // CSS 모듈과 함께 사용하지 않을 때

    const cx = classNames.bind(styles);

    <p className={cx("red-color", "underline")}>red underline</p>
    <h1 className={className("title.???")}>title</h1>

    // 값의 참거짓 여부로 동적으로 스타일 적용 가능
    const isLoggedin = true;

    <p className={cx({"red-color": isLoggedin}, "underline")}>로그인</p>
```


## CSS-IN-JS
- CSS를 런타임에 동적으로 생성해서 적용하는 원리

### styled-components
- 추천하지 않음
```jsx
    // 태그드 리터럴 템플릿
    const Title = styled.h1 `
        font-size: 1.5rem;
        text-align: center;
        color: #bf4f74
    `

    <Title>Title</Title>
```

### emotion
### Vanilla Extract


## Tailwind CSS
### 단독 유틸리티 퍼스트 CSS 라이브러리


## 그 외
### 이미지 렌더링
### 폰트 적용