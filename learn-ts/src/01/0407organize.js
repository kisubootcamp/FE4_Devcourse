// 타입 스크립트 초기 세팅
// 1. npm init -y : package.json 초기화
// 2. npm install typescript --save-dev : 개발모드로 typescript 설치 -> package.json 파일에서 확인 가능
// 3. node ./node_modules/typescript/bin/tsc --init : 타입 스크립트 초기화
// 3. npx tsc --init : tsconfig.json 생성 (tsconfig 내용은 강사님 자료 참고)
// 4. npx tsc : typescript compile ( ts 파일 -> js 파일로 변환 과정 )
// 5. npm install ts-node : ts-node 설치

// ✅ ts-node : type script 코드를 실시간으로 변환해서 실행하는 도구

// 🤔 트랜스 컴파일
// 기본적으로 웹 브라우저는 html, css, js 파일만 읽을 수 있다
// -> TS 파일들은 실행되려면 JS 파일로 바뀌어야 한다
// -> 같은 계열의 언어 사이에서 변환하는 작업 = 트랜스 컴파일

// 🤔 트랜스 컴파일러
// 트랜스 컴파일 작업을 수행하는 도구
// 1. tsc : ts -> js
// 2. babel 최신js -> 구js
// 3. vue compiler : Vue SFC -> js

// ------------------------------------------------------------------ //
// 타입 스크립트 공부 전 자바스크립트 살짝 복습

// 템플릿 문자열 : 백틱(`) 기호로 문자열 안에 변수나 표현식을 쉽게 삽입하여 표현
const j_name = "지은";
const message = `안녕하세요 백틱 연습하는 ${j_name} 입니다`;
console.log(message); // 안녕하세요 백틱 연습하는 지은 입니다

// 템플릿 문자열 장점 : 다중 줄 문자열 - 일반 문자열에서는 \n 으로 줄바꿈해야했지만, 템플릿 문자열에서는 엔터만 쳐도 줄바꿈됨
const multiLine = `
첫 번째 줄
두 번째 줄
세 번째 줄
`;
console.log(multiLine);
// 첫 번째 줄
// 두 번째 줄
// 세 번째 줄

// 화살표 함수 : 기존 함수 선언 방식인 function 대신 화살표를 사용해서 짧고 간결하게 함수를 정의하는 방식
// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 함수 표현식
const sum = function sum(a, b) {
  return a + b;
};

// 화살표 함수
const sum = (a, b) => {
  return a + b;
};
// 화살표함수 특징. 암시적 반환 : 중괄호 없이 한 줄로 작성하면 return 생략 가능
const sum = (a, b) => a + b;
// 화살표함수 특징. this 바인딩 규칙x
// 렉시컬 this : this 함수가 정의된 시점의 상위 스코프(외부 환경)으로 고정
const obj = {
  name: "지은",
  method: () => {
    console.log(this.name); // undefined
  },
};
obj.method(); // this는 obj가 아님, 전역 스코프의 this (브라우저라면 window)

// 구조 분해 할당 (=비구조화 할당) : 배열이나 객체의 값을 분해해서 할당하는 문법
// 배열에서의 구조분해할당
// 배열_기존ver
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple

// 배열_구조분해할당ver
// const [apple, banana, cherry] = fruits;
const [apple, banana, cherry] = ["apple", "banana", "cherry"];
console.log(banana); // banana

// 나머지 요소 받기 (...스프레드 연산자 활용)
const [first, ...rest] = fruits;
console.log(first); // apple
console.log(rest); // [ 'banana', 'cherry' ]

// 객체에서의 구조분해할당
// 객체_기존ver
const animal = {
  animalName: "곰돌이",
  animalType: "곰",
  animalAge: 10,
};
console.log(animal.animalName);

// 객체_구조분해할당ver
const animal1 = {
  animalName: "곰이",
  animalType: "고양이",
  animalAge: 20,
  animalGender: "male",
};
const { animalName, animalType, animalAge, animalGender } = animal1;
console.log(animalName); // 곰이

// 예제1) 구조분해 조금 어렵게
const {
  id,
  profile: { s_name, age },
} = { id: 1, profile: { s_name: "곰", age: 20 } };
console.log(s_name, age); // 곰 20

// 예제2) 객체의 키를 변수로 치환
const key = "name";
const user = {
  [key]: "jieun22",
};
console.log(user.name); // jieun22

// 스프레드 연산자 : 배열, 객체, 함수 인자 등에서 값을 펼쳐서 복사하거나 합칠 때 유용하게 쓰이는 문법
const [red, ...restColor] = ["red", "blue", "green", "yellow"];
console.log(red); // red
console.log(restColor); // [ 'blue', 'green', 'yellow' ]

// 참조 복사 : 메모리 상에 배열은 하나만 존재하고 arr1, arr2 가 동일한 주소값을 가짐
const arr1 = [10, 20, 30];
const arr2 = arr1;
console.log(arr1 === arr2); // true // 두 변수가 같음
// 배열은 참조 자료형, 별도의 주소값을 가짐
// arr1 === arr2 // true
// 하나만 변경해도 배열의 주소 위치가 같기 때문에 같이 변함
arr1.push(40); // 배열에 40추가
console.log(arr1); // [10, 20, 30, 40]
console.log(arr2); // [10, 20, 30, 40]

// 얕은 복사 : 바깥쪽에 있는 객체나 배열만 복사하고, 안쪽(중첩된 객체나 배열)은 참조값을 공유
const arr3 = [10, 20, 30];
const arr4 = [...arr3]; // 얕은 복사 (새 배열 생성)
arr3.push(40);
console.log(arr3); // [10, 20, 30, 40]
console.log(arr4); // [10, 20, 30]

// 깊은 복사 : 객체 전체를 재귀적으로 복사해서, 완전히 독립적인 새 객체 생성
// 깊은 복사하는 법1
// const 복사본 = structuredClone(원본);
const arr5 = structuredClone(arr4);

// 깊은 복사하는 법2
const arr6 = JSON.parse(JSON.stringify(arr5));

// 예제1) 얕은 복사
const state = { count: 1, user: { name: "지은지은" } };
const newState = { ...state }; // 얕은 복사

newState.count = 2;
console.log(state.count);
// state.count : 1
// newState.count : 2

newState.user.name = "지은";
console.log(state.user.name);
// state.user.name도 같이 바뀜!
// 얕은 복사라 내부 객체는 참조 유지

// 예제2) 깊은 복사
const state1 = {
  user: {
    profile: {
      name: "송지",
    },
  },
};
const deepCopy = structuredClone(state1);
deepCopy.user.profile.name = "지은";
console.log(state1.user.profile.name); // 송지 (원본 유지)

// ---------------------------------------------------------------- //
// 타입 스크립트
// 타입 스크립트 : 자바스크립트에 타입을 추가한 언어
// ts 확장자를 사용

// 타입 스크립트 기본 타입
// string, number, boolean, object, symbol
// array, tuple, undefined, null, any, bigint

// 타입 스크립트는 값에 타입을 지정해줌
// [
//     let name: String = "jieun";
//     let obj: Object = {};
//     let arr: [] = [];
//     let sym: Symbol = Symbol("a");
//     let big: bigint = 100n;
// ]

// 타입 스크립트는 정적 타입 시스템

// gitignore 파일 생성해서 커밋하기
