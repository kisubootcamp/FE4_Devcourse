/*
1. 리액트 스타일링 방법

1.1 전통적인 방법으로 스타일링 하기
1.1.1 인라인 스타일
1.1.2 글로벌(외부) 스타일 
1.1.3 CSS 모듈 (+ classnames 패키지)


1.2 CSS-IN-JS 방법으로 스타일링 하기

1.2.1 styled-components (많이 사용하고 있음)

1.2.2 emotion   (많이 사용하고 있음)
- 스타일드 컴포넌트와 비슷하게 구조를 유지하지만 단점을 상쇄하는 장치가 있음
- 스타일드 컴포넌트처럼도 쓸 수 있고
-  <h1
        className={css`
          color: red;
        `}>
        App Component
      </h1>
1.2.2.1 css 를 런타임에 생성, 동적으로 생성하여 렌더링
1.2.2.2 -> 초기 로딩에 대한 오버헤드가 큼(필요한 리소스가 크다, 상대적으로)


1.2.3 Vanilla Extract 
1.2.3.1 타입스크립트 지원 완벽 + 제로 런타임
1.2.3.2 컴파일 하는 과정에서 물리적으로 정적인 css 파일이 생성됨 -> 렌더링할때 css를 해석할 필요가 없음
- npm run build  (-> 정적인 css 파일 생성) / 이때 emotion 은 만들어지지 않음


1.3 TailwindCSS 방법으로 스타일링 하기
1.3.1 단독 유틸리티 퍼스트 CSS 라이브러리
- utility-first
- utility 모든 속성에 해당하는 값 하나하나에 해당하는, 1:1로 매칭하는 클래스
- 모든 css 속성과 모든 속성 값에 매칭되는 클래스 명이 존재.
- 그런 utility class 를 외워..
- 러닝커브가 높음 : 언제 다 외워? 
- 외우더라도 코드가 지저분해 짐
vs 
- 고된 작업이 아니다, 직관적이다 

1.3.2 공식문서에서 쉽게 속성을 찾을 수 있음
1.3.2.1 custom value 를 사용해서 속성명만 외워서 값은 [] 안에 지정 

twMerge 
1 매개변수로 전달된 클래스명을 하나로 합쳐주는 동작 (마치 classNames 처럼)
2 중복된 utility class 를 알아서 제거

import { twMerge } from "tailwind-merge";
export default function App() {
  const isLogIn = true;
  return (
    <>
      //  background-color: #ed4848 
      <h1
        className={twMerge(
          "text-3xl",
          "text-9xl",
          isLogIn && "text-rose-500 bg-amber-100"
        )}>
        Hello world!
      </h1>
    </>
  );
}



1.4 그외
1.4.1 이미지 렌더링하기
/public 
/assets/images 
import cat2 from "./assets/images/cat-5628953_640.jpg";

export default function App() {
  return (
    <>
      // public 폴더에 있는건 /... 으로 작성 -> 절대경로
      <img src="/cat-7833833_640.jpg" alt="cat" />
       //src 폴더 import , 상대경로
      <img src={cat2} alt="cat2" />
    </>
  );
}
NOTE public  -> 정적 리소스, 파비콘, robots,txt, 구글애널리틱스 인증 파일, 네이버 콘솔 인증파일
      src -> 동적 리소스, 대부분의 이미지는 src 에다 넣는 것이 좋다 
      번들링 -> 리소스를 최적화 (압축, 캐시)
      - 퍼블릭은 번들링의 대상이 되지 않음


1.4.2 폰트 적용하기 
html >head > link 
.css 에 폰트패밀리 
woff2 : woff 보다 더 좋은 확장자로 폰트 src 에서 먼저 적어주는 것이 좋음
woff 가 범용성은 더 좋음

// export default function App() {
//   return (
//     <>
//       <h1 className="noto-sans-kr text-3xl underline">App Component</h1>
//       <h1 className="noto-sans-kr text-3xl underline font-bold">
//         App Component
//       </h1>
//       <h1 className="chosungu">조선어쩌구</h1>
//       <h1 className="Jeju">제주 어쩌구</h1>
//     </>
//   );
// }
*/

/*
semantic versioning -> semver 
major, minor, patch (0,0,0)
major : 기존 버전과 호환되지 않는 큰 변경 사항이 생겼을 때
minor : 기능이 새롭게 추가되었지만 기존과 호환이 가능할 때
patch : 버그 수정과 같은 사소한 변경이 발생 했을 때, 기존과 호환이 매우 양호

ex.
react 18.3.2 -> 19.0.0 // major 번호 업데이트
*/

//
