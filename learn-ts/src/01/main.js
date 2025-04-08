//[FE5_권태훈] 20250407_01_과제제출

// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법,

const uname = "sucoding";
const greet = `Hello, ${uname}!`;

// 2. 화살표 함수
// 2.1 함수를 화살표를 사용해서 정의하는 방법
// 2.1.1 함수 선언문
// function sum(a, b) {
//   return a + b;
// }

// 2.1.2 함수 표현식
// const sum = function sum(a, b) {
//   return a + b;
// };

// 2.1.3 화살표 함수
// const sum = function sum(a, b) {
//   return a + b;
// };

const sum = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
// 3.1 분해해서 할당하겠다.
const [a, ...rest] = ["apple", "banana", "orange"];

// 3.2 객체에서의 구조분해 할당
// const animal = {
//   animalName: "곰이",
//   animalType: "고양이",
//   animalAge: 10,
//   animalGender: "male",
// };
// const { animalName, animalType, animalAge, animalGender } = {
//   animalName: "곰이",
//   animalType: "고양이",
//   animalAge: 10,
//   animalGender: "male",
// };

const {
  id,
  profile: { name: sname, age, gender },
} = {
  id: 1,
  profile: {
    name: "곰이",
    age: 20,
    gender: "male",
  },
};

function printInfo({ name, age }) {
  //console.log(`${name}, ${age}`);
}
printInfo({
  name: "sucoding",
  age: 20,
});

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = "name";
const user = {
  [key]: "sucoding",
};
//console.log(user.name);

// 5. 스프레드 연산자: 배열 또는 객체의 요소들을 펼쳐서 사용할 수 있게 해줌
// 배열에서는 배열 병합, 배열 복사
// 함수에서는 함수 호출 인자(rest parameter)로 사용
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

const { name, ...restProperty } = {
  name: "sucoding",
  age: 20,
  gender: "male",
};

console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사
// 깊은 복사(deep copy): 객체의 실제 값을 복사
// ex) JSON.parse && JSON.stringify, Lodash 라이브러리
// 얕은 복사(shallow copy): 객체의 참조값(주소값)을 복사
// ex) slice(), assign(), spread 연산자(...)
// 1중첩이라는 확신이 있을 때! const copyColors = [...colors];
const colors = ["red", "orange", "banana", { special: "pink" }];
const copyColors = structuredClone(colors);
copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(colors);
console.log(copyColors);

// 동적 타이핑
// 할당과 동시에 타입이 결정된다.
let num = null;
num = 10;
num = "10";
num = true;
