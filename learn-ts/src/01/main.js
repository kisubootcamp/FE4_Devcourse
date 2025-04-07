// 트랜스 컴파일(컴파일링)
// ts -> js
// tsc => 트랜스 컴파일러
// npx tsc src/01/index.ts
// npx tsc (모든 ts 파일들을 컴파일)
const tsStr = "Hello, World";
console.log(str.replaceAll(" ", ""));

// 1.1 템플릿 문자열
// 1.1 벡틱(`) 문자열을 정의하는 방법

const world = `World`;
const str = `hello, ${world} !`;
console.log(str);

// 2. 화살표 함수
// 2.1. 함수를 화살표를 사용해서 정의하는 방법
// 2.1.1 함수 선언문
function sum(a, b) {
  return a + b;
}

// 2.1.2 함수 표현식
// 함수를 화살표를 사용해서 정의하는 방법
const sum1 = function sum1(a, b) {
  return a + b;
};

//2.1.3 화살표 함수
const sum2 = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
const [apple, ...rest] = ["apple1", "banana2", "orange"];
console.log(apple);
console.log(rest);

//3.2 객체에서의 구조분해 할당
const { animalName, animalType, animalAge, animalGender } = {
  animalName: "곰이",
  animalType: "고양이",
  animalAge: 10,
  animalGender: "male",
};

console.log(animalName);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const { id, profile } = {
  id: 1,
  profile: {
    name: "곰이",
    age: 20,
    gender: "male",
  },
};
console.log(profile.age);

function printInfo({ name, age }) {
  console.log(`${name}, ${age}`);
}

printInfo({
  name: "hyeju",
  age: 20,
});

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = "uname";
const user = {
  [key]: "hyeju",
};
console.log(user.uname);

// 5. 스프레드 연산자
const [red, ...restColor] = ["red", "green", "blue"];
console.log(red);
console.log(restColor);

const { name, ...restProperty } = {
  name: "hyeju",
  age: 20,
  gender: "male",
};

console.log(name);
console.log(restProperty);

// 깊은 복사 처럼 보이는 얕은 복사 -> 얕은 복사
const colors = ["red", "orange", "banana", { special: "pink" }];
//const copyColors = colors;                결과 : colors[0]: pink
//1중첩까지만 복사가 됨
const copyColors = [...colors];
//완전한 깊은 복사
const copyColors2 = structuredClone(colors);
copyColors[0] = "violet";
copyColors[3] = "grey";

console.log(colors);
console.log(copyColors);
