/*

1. 리액스 스타일링 방법

1.1 전통적인 방법으로 스타일링 하기

1.1.1 인라인 스타일 (HeaderEx에)
  - style 사용해서, 객체 형태로 내가 지정하고 싶은 css 속성과 값을 입력 (속성명에 dash(-) 기호 있다면 카멜 케이스로)

1.1.2 글로벌 스타일 (별도의 css 파일)
  - 왜 외부가 아닌 글로벌이라고 함?
    화면에 렌더링되는 어떤 컴포넌트든 css import 구문 위치와 관계 없이, import 구문이 적혀진 파일이 화면에 렌더링되기만 한다면,
    해당 화면에 렌더링되는 모든 컴포넌트는 해당 css의 영향을 받음 (적용가능함)
    -> 그럼 import를 App.tsx가 아닌, main.tsx에 렌더링한 컴포넌트(Header.tsx)에 해도 다른 컴포넌트에서 해당 css 사용 가능?
        (App.tsx를 불러오는 main.tsx에서 or 루트 컴포넌트가 아닌 일반 컴포넌트에서)
  - 루트 컴포넌트가 n개일 수는 있지만, 권장하는건 루트 컴포넌트가 단일 컴포넌트로 유지하는 것. (그래야 컴포넌트를 관리하기가 쉬움)
  - 컴포넌트 내부에서 css 적용 시키면 클래스가 같더라도 다른 태그에 영향을 안 끼치나요? -> 끼침
  - import 위치가 상관 없다면, 어디에 import하는게 좋은가?
    -> mian.tsx 파일에 하는게 일반적임

1.1.3 CSS 모듈 (+ classnames 패키지)
  - css 모듈
    - 만약 특정 컴포넌트에만 영향을 주고 싶다면? -> CSS 모듈
    - 특정 컴포넌트에만 종속되는 스타일
    - id 선택자, tag 선택자 등을 사용하면 정상적으로 동작하지 않을 수 있음
    - class를 난독화(암호화)해서 고유하게 지정해줌
  - classnames
    - npm i classnames 입력해서 설치 -> package.json "dependencies > classnames" 확인해서 설치 확인
    - class 이름 적절히 조합 가능
    - 특정 값이 true/false 일 때 적용할 스타일을 쉽게 설정 가
    - global css 스타일에서도 사용 가능 (CSS 모듈과 함께 사용해야만 하는것 ❌)


1.2 CSS-IN-JS 방법으로 스타일링 하기
  - CSS-IN-JS ? javascript 파일 안에서 css 작성하는 방법으로,
    한 때 react에서 굉장히 유행했기 때문에 많은 방법이 있다


1.2.1 styled-components 💅🏾 
  - 공식 홈페이지에서 나온 방법으로 설치하면 됨
    - npm install styled-components 입력해 설치 후
    - package.json -> "dependencies > styled-components" 설치 확인

1.2.2 emotion
  - CSS를 런타임에 생성한다.
  - 초기 로딩에 대한 오버헤드가 크다


1.2.3 Vanilla Extract (CSS-IN-TS)
  - 타입스크립트 완벽 호환 + 제로 런타임
  - 설치 (@vanilla-extract/css, @vanilla-extract/vite-plugin)
    - install : npm install @vanilla-extract/css
    - vite integration : (npm install --save-dev @vanilla-extract/vite-plugin)
  - 태그에 종속되는 스타일은 아님
  - npm run build
    - build 과정에서 정적인 css 파일로 생성됨



1.3 TailwindCSS 방법으로 스타일링 하기
  - dependency에 설치됨 -> 배포할 때도 필요
  - 비친화적인 입장
    - 러닝 커브가 높음 (모든 css 속성과 매칭되는 클래스값을 외워야해서)
    - 클래스 속성의 값이 길어져서 html을 보기가 어렵다 (코드가 지저분해진다)
  - 친화적인 입장
    - css 속성 외우는거? 고단한거 아니다. 클래스명이 직관적이라 (허무맹랑하지 x)
    - 

1.3.1 단독 유틸리티 퍼스트 CSS 라이브러리

1.4 그 외
1.4.1 이미지 랜더링하기
1.4.1.1 public -> 정적 리소스 (파비곤, robots.txt, 구글 애널리틱스 인증 파일, 네이버 콘솔 인증 파일) (/로 가져옴)
1.4.1.2 src -> 동적 리소스 (대부분의 이미지는 src 폴더에 넣는게 좋다 !) (./로 가져옴)
  - 번들링 대상 -> 이점? 리소스를 최적화 해준다.(압축, 캐시)

1.4.2 폰트 적용하기

(자주 사용하는거만 이 정도지, 사실 10개도 더 넘는다...)

⭐️ react folder structure

*/

/*
  semantic Versioning -> Semver

  Major.Minor.Patch

  Major -> 기존 버전과 호환되지 않는 큰 변경 사항이 생겼을 때
  Minor -> 기능이 새롭게 추가되었지만, 기존과 호환이 가능할 때
  Patch -> 버그 수정과 같은 사소한 변경이 발생했을 때, 기존과 호환이 매우 양호
*/

/*
utility - first; 👀 11:10 경
하나의 CSS 속성과 매칭되는 ....? 
css 속성과 값이 1:1로 매칭되는 클래스...?
css 속성과 값이 1:1로 매칭되어있는 유틸리티 클래스가 존재한다 ! 관건은 이걸 외우는거 !
*/

/*
  tailwind-merge
    - tailwind에서 사용하는 classnames 패키지
    - npm i tailwind-merge
    - 매개변수로 전달된 클래스를 하나의 완성된 문자열로 합쳐줌 (classname처럼)
    - 중복된 유틸리티 클래스를 알아서 제거해줌
*/

/* 
  tailwind 기반으로 react application 초기 세팅
  
*/
