// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법
const uname = "Yubin";
const greet = `Hello, ${uname}!`;
console.log(greet);

// 2. 화살표 함수
// 2.1 함수를 화살표를 사용해서 정의하는 방법
// 2.1.1 함수 선언문
function sum(a, b) {
  return a + b;
}

// 2.1.2 함수 표현식
const sum = function sum(a, b) {
  return a + b;
};

// 2.1.3 화살표 함수
const sum = (a, b) => {
  return a + b;
};
const sum = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
// 3.1 분해해서 할당하겠다.
// 식별자를 내 마음대로 지정할 수 있음.
const [a, ...rest] = ["apple", "banana", "orange"];
console.log(a);
console.log(rest);

// 3.2 객체에서의 구조 분해 할당
// 객체에서는 기본적으로 식별자를 객체의 key값으로 따라가지만, :을 사용하면 다른 이름으로 바꿀 수 있음.
const {
  animalName: aname,
  animalType,
  animalAge,
  animalGender,
} = {
  animalName: "곰이",
  animalType: "고양이",
  animalAge: 10,
  animalGender: "male",
};
console.log(aname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

// 중첩된 객체의 구조 분해 할당
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
console.log(sname, age, gender);

// 실무에서 굉장히 많이 사용하는 패턴(리액트)
function printInfo({ name, age }) {
  console.log(`Hello, ${name}, ${age}`);
}
printInfo({
  name: "Yubin",
  age: 26,
});

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
// 리액트에서 자주 사용하는 패턴(useState 할 때)
const key = "name";
const user = {
  [key]: "yubin",
};
console.log(user.name);

// 5. 스프레드 연산자
// 리액트에서 자주 사용하는 패턴
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

const { name, ...restProperty } = {
  name: "Yubin",
  age: 26,
  gender: "female",
};
console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 결국 얕은 복사
// 깊은 복사 (deep copy) : 원본과의 참조가 끊어진 복사
// 얕은 복사 (shallow copy) : 원본과의 참조가 이어진 복사
const colors_1 = ["red", "orange", "banana", { special: "pink" }];
const copyColors = [...colors_1]; // 1중첩이라는 확신이 있을 때는 괜찮은 방법

copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(colors_1);
console.log(copyColors); // 얼핏 보면 깊은 복사처럼 보이지만 2중첩부터는 깊은 복사가 안 됨.

// structuredClone() : 깊은 복사 가능
// caniuse 사이트에서 검색해보면 Global 94.51%
// -> 80% 이상이면 안정화되었기 때문에 보통 사용 가능하다고 봄.
const colors_2 = ["red", "orange", "banana", { special: "pink" }];
const copyColors = structuredClone(colors_2); // 깊은 복사 !!
const copyColors = JSON.parse(JSON.stringify(colors_2)); // structuredClone()가 나오기 전에는 이렇게 사용해왔음.

copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(colors_2);
console.log(copyColors);

// 동적 타이핑
// 자바스크립트는 할당과 동시에 타입이 결정된다.
let num = null;
num = 10;
num = "10";
num = true;
