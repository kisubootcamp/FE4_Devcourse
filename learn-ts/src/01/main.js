// 템플릿 문자열
// 1. 템플릿 문자열은 백틱(`)으로 묶어서 표현한다.

const uname = "sang_yun";
const greet = `Hello, ${uname}!`;
console.log(greet);

// 2. 화살표 함수
// 함수를 화살표를 사용해서 정의하는 방법
// 2.1 함수 선언문
function sum(a, b) {
  return a + b;
}

// 2.2 함수 표현식
const sum2 = function (a, b) {
  return a + b;
};

// 2.3 화살표 함수
const sum3 = (a, b) => a + b;

// 3. 구조 분해 할당
// 3.1 분해해서 할당하겠다.

const [apple, ...rest] = ["apple", "banana", "orange"];

// 3.2 객체에서의 구조분해 할당
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
  console.log(`${name}, ${age} `);
}

printInfo({
  name: "sang_yun",
  age: 20,
});

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = "name";
const user = {
  [key]: "sang_yun",
};
console.log(user.name);

// 5. 스프레드 연산자
// 5.1 배열에서의 스프레드 연산자
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

// 5.2 객체에서의 스프레드 연산자
const { name, ...restProperty } = {
  name: "sang_yun",
  age: 20,
  gender: "male",
};

console.log(name);
console.log(restProperty);

// 깊은 복사 처럼 보이는 얕은 복사 -> 얕은 복사
// 깊은 복사 (deep copy)
// 얕은 복사 (shallow copy)
// 1중첩이라는 확인이 있을 때 스프레드 연산자 사용 가능
const colors = ["red", "orange", "banana", { special: "pink" }];
const copyColors = structuredClone(colors);
// const copyColors = JSON.parse(JSON.stringify(colors)); // 예전에는 이렇게 썼음
copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(colors);
console.log(copyColors);
