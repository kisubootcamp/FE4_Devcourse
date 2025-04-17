/*

1. 리액트 스타일링 방법

1.1 전통적인 방법
	1.1.1 인라인 스타일
	1.1.2 글로벌(외부) 스타일
	1.1.3 CSS 모듈 (+ classnames 패키지)

1.2 CSS-IN-JS 스타일링
	1.2.1 styled-components
	1.2.2 emotion
	1.2.3 Vanilla Extract

1.3 TailwindCSS
	1.3.1 단독 유틸리티 퍼스트 CSS 라이브러리

1.4 그외
	1.4.1 이미지 렌더링하기
		1.4.1.1 public -> favicon, robots.txt, 구글 애널리틱스 인증파일, 네이버 콘솔 인증파일
		1.4.1.2 src -> 대부분의 이미지는 src 폴더에 넣는 게 좋다.
		1.4.1.3 번들링: 리소스 최적화 (압축, 캐시) -> 번들링 과정에서 src 폴더 내용물 최적화
	1.4.2 폰트 적용하기




컴포넌트 트리 <- DOM 트리와 유사한 구조
컴포넌트 트리는 형제/자손/조상 개념이 없음, 부모/자식만 존재
컴포넌트 트리의 시발점 = 루트 컴포넌트
루트 컴포넌트는 단일 컴포넌트인 것을 권장

글로벌 스타일은 최상위 루트, 즉 main.tsx에 작성하는 것이 일반적인듯

특정 컴포넌트에만 영향을 미치는 CSS? -> CSS 모듈 사용
CSS 모듈 방식은 className에서만 사용 가능

styled-components, emoticon -> CSS를 런타임에 생성
-> 초기 로딩에 대한 오버헤드가 큼
Vanilla Extract -> (타입스크립트 완벽지원 + 제로 런타임)
-> styled-components, emoticon의 단점 개선


public -> 정적 리소스

*/
