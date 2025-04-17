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
- css 를 런타임에 동적으로 생성해서 적용하는 원리 -> 초기 로딩에대한 오버헤드가 크다.
  - styled-components 💅🏾
    - 컴포넌트 함수 외부에 styled-components 를 선언 한다.
    - 이렇게 선언한 템플릿을 태그드 리터럴 템플릿이라고 한다.
    - 선언한 태그드 리터럴 템플릿은 따로 분리하여 재사용이 가능하다.
  - emotion 👩‍🎤
    - styled-components 와 매우 흡사하며 직관적이지 않던 재사용시의 태그 사용 문제를 해결한 라이브러리
  - Vanilla Extract 🧁
    - 타입스크립트 지원 완벽
    - 제로 런타임 -> ts로 작성하지만 build 를 진행하면 정적으로 css 파일로 변환되어 진행된다.

3. tailwindcss 스타일링 방법

- 단독 유틸리티 퍼스트 CSS 라이브러리
- 모든 클래스 명을 외울 필요는 없다. 자주 사용하는건 자연스레 외워질거고 이외엔 직접 찾아서 써도 된다.
- 커스텀 value 를 적극 사용하자. ex) `w-[100px] bg-[#123123]`
- tailwind fold extenstion -> tailwind 로 작성된 class 를 자동으로 숨겨줌. 포커스 되어있다면 보여짐
- tailwind-merge -> 성격이 겹치는 유틸리티 클래스를 제거해준다.

4. 그 외

- 이미지 렌더링
  - public -> 정적 리소스 => 잘 변하지 않는 이미지들 (pavicon, robots.txt, 구글 애널리틱스 인증 파일 등등)
  - src/assets -> 동적 리소스 (대부분의 이미지를 여기에 넣어야 함)
- 폰트 적용
  - 이왕이면 구글 폰트 사용
  - 저작권으로 인한 문제가 생길 수 있음.
  - 그 회사가 라이센스를 가지고 있다면 상황은 달라지는데 뭐 크게 달라지진 않고 해당 폰트를 사용할 수 있음

## 버전

- Semantic Versioning -> Semver
- 0.0.0 이런식으로 표현
- 처음 자리 -> 메이저 업데이트 - Major
  - 기존 버전과 호환되지 않는 큰 변경 사항이 생겼을떄
- 두 번째 자리 -> 마이너 업데이트 -Mminor
  - 기능이 새롭게 추가되었지만, 기존과 호환이 가능할떄
- 세 번째 자리 -> 패치 (유지보수, 버그 수정 등) - Patch
  - 버그 수정 과 같은 자잘한 변경이 발생 했을때, 그리고 기존과 호환 매우 양호 할떄
