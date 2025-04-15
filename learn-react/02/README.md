# 리액트 스타일링 방법

1. 전통적인 방법으로 스타일링 하는 방법

- 인라인 스타일 -> Header.tsx 예시
- 글로벌(외부) 스타일 -> 외부 css 파일 생성 => App.css 파일
  - 글로벌로 선언시 모든 컴포넌트에서 영향을 받는다. 자식 컴포넌트에서 선언해도 부모 컴포넌트까지 영향을 받는다.
  - 그래서 보통 main.tsx 에 추가 한다. - 초기 프로젝트 셋팅 파일에서도 main.css는 main.tsx 에서 import 한다.
  - global 로 css 를 작성해야 하면 css/index.css 파일에 스타일을 추가해준다. 그 이후 main.tsx 에 import 한다.
- CSS 모듈 (+ classnames 패키지)
  - [컴포넌트명].module.css 으로 파일을 만들어주고 해당 컴포넌트로 연결한다. 이후 객체처럼 사용한다. -> 예시파일 (Footer.tsx, Footer.module.css)
  - 넣어야할 클래스가 여러개라면 템플릿 리터럴로 연결한다.
  - 스네이크 케이스로 만든 클래스명은 style["스네이크-케이스"] 이런식으로 적용한다.
  - classnames - 예시 파일 (Footer.tsx)
    - module 방식으로 만든 css 를 해당 라이브러리에 추가해준다. `const cx = classNames.bind(styles);`
    - 그리고 사용할 클래스를 추가해준다. `className={cx("underline", "red-color")}`
    - 매개변수로 객체를 전달하여 boolean 값을 같이 전달한다면 false 값일 경우 해당 클래스명은 추가되지 않는다. `classNames({ foo: true }, { bar: flase }); // => 'foo'`

2. CSS-in-JS 스타일링

- 자바스크립트 안에서 css 를 작성하는 방법
- css 를 런타임에 동적으로 생성해서 적용하는 원리
  - styled-components
    - 컴포넌트 함수 외부에 styled-components 를 선언 한다.
    - 이렇게 선언한 템플릿을 태그드 리터럴 템플릿이라고 한다.
    - 선언한 태그드 리터럴 템플릿은 따로 분리하여 재사용이 가능하다.
    -
  - emotion
  - Vanilla Extract

3. tailwindcss 스타일링 방법

- 단독 유틸리티 퍼스트 CSS 라이브러리

4. 그 외

- 이미지 렌더링
- 폰트 적용
