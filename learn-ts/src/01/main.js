// 1. 템플릿 문자열 -
// 1.1 백틱(`) 기호로 문법을 사용해 변수나 표현식을 삽입
// 문자열을 정의하는 방법
const name = "지은";
const message = `안녕하세요, ${name}님!`;
// 여기서 name부분에 밑줄 그어지는 이유는 name 이름 쓰지 말란 뜻

// 2. 화살표 함수
// 2.1 화살표를 사용해서 함수를 정의하는 방법
// 2.1.1 함수 선언문
// function sum(a, b) {
//   return a + b;
// }

// 2.1.2 함수 표현식
// const sum = function sum(a, b) {
//   return a + b;
// };

// 2.1.3 화살표 함수
// const sum = (a, b) => {
//   return a + b;
// };
// 화살표함수는 이렇게 return 생략도 가능
// const sum = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
// 3.1 분해해서 할당하겠다
const [apple, banana] = ["apple", "banana"];

// 3.2 나머지 요소 받기 ...스프레드 연산자
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]

// 3.3 객체에서의 구조분해 할당
// 기본 문법
const animal = {
  animalName: "곰돌이",
  animalType: "곰",
  animalAge: 10,
};
console.log(animal.animalName);

// 구조 분해 할당 ver
const animal1 = {
  animalName: "곰이",
  animalType: "고양이",
  animalAge: 20,
  animalGender: "male",
};
const { animalName, animalType, animalAge, animalGender } = animal1;
console.log(animalName);
console.log(animalType);

// 구조분해 조금 더 복잡하게
const {
  id,
  profile: { sname, age },
} = { id: 1, profile: { name: "곰", age: 20 } };
console.log(sname, age); // undefined 20

// 계산된 속성
// 객체의 키를 변수로 치환
const key = "name";
const user = {
  [key]: "jieun",
};
console.log(user.name); // jieun

// 스프레드 연산자
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

const { qname, ...restProperty } = {
  qname: "jiji",
  age: 98,
  gender: "fe",
};
console.log(qname); //jiji
console.log(restProperty); // { age: 98, gender: 'fe' }

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사
// 깊은 복사 (deep copy) : 속에 있는 것까지 전부 새로운 복사본 만들기 structuredClone();
// 얕은 복사 (shallow copy) : 겉에만 복사, 내부 객체는 같은 참조
const colors = ["red", "orange", "banana"];
// const copyColors = colors;
const copyColors = [...colors]; // 얕은 복사

// const copyColors = JSON.parse(JSON.stringify(colors));
copyColors[0] = "pink";

console.log(colors[0]); // pink // red
