### TS를 사용하기 위한 초기 세팅

1. npm init -y
   : 기본값으로 npm 초기화
   : 질문 없이 자동으로 package.json 생성

2. npm install typescript --save-dev
   : 개발용으로 설치

3. npx tsc --init
   : TS 설정 파일 tsconfig.json 생성하는 명령어

### TS 파일을 JS로 변환(컴파일)

1. node ./node_modules/typescript/bin/tsc index.ts
   : 비효율

2. npx tsc [파일경로]
   : (ex) npx tsc src/01/index.ts
   : tsc -> TypeScript Compiler / .ts 파일을 .js 파일로 변환(컴파일)해주는 도구
   : 터미널에서 해당 폴더로 cd 해서 들어간 상태라면, npx tsc만 쳐도 된다.

### TS 배우기 전 알아야 할 JS 문법

1. 템플릿 문자열 -> 백틱(`) 기호로 정의
2. 화살표 함수
3. 구조분해할당(비구조화 할당) -> 배열 구조분해, 객체 구조분해
4. 계산된 속성 -> 객체의 키를 변수로 치환
5. 스프레드 연산자
