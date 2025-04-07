// 1. 템플릿 문자열
// ` `(백틱) 문자열을 정의하는 방법,

const urname = "jiyoon";
const greet = `Hello ${urname}`;
console.log(greet);

// 2. 화살표 함수
// 함수를 화살표를 사용해서 정의하는 방법

function sum(a, b) {
  return a + b;
}

const sum2 = function sum(a, b) {
  return a + b;
};

const sum3 = (a, b) => {
  return a + b;
};

const sum4 = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
// 분해해서 할당

const foods = ["apple", "banana", "orange"];

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

const [apple, banana, orange] = ["apple", "banana", "orange"];

console.log(apple);
console.log(banana);
console.log(orange);

const [a, ...rest] = ["apple", "banana", "orange"];
console.log(a);
console.log(rest);

// 객체에서의 구조분해 할당
const animal = {
  animalName: "곰",
  animalType: "고양이",
  animalAge: 10,
  animalGender: "male",
};

console.log(animal.animalName);
console.log(animal.animalType);
console.log(animal.animalAge);
console.log(animal.animalGender);

const {
  animalName: aname,
  animalType,
  animalAge,
  animalGender,
} = {
  animalName: "곰",
  animalType: "고양이",
  animalAge: 10,
  animalGender: "male",
};

console.log(aname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const {
  id,
  profile: {
    name /* profile의 항목명 */: sname /* 출력할 항목명 */,
    age,
    gender,
  },
} = {
  id: 1,
  profile: {
    name: "곰",
    type: "고양이",
    age: 10,
    gender: "male",
  },
};

console.log(sname, age, gender);

function printInfo(userObj) {
  console.log(`${userObj.name}, ${userObj.age}`);
}
printInfo({
  name: "jiyoon",
  age: 29,
});

// 4. 계산된 속성
// 객체의 키를 변수로 치환
// 리액트에서 많이 사용되는 속성
const user = {
  [key]: "galaxy",
};
console.log(user.name);

// 5. 스프레드 연산자
// 일부만 구조분해하고 나머지 받는 형태가 리액트에서 많이 사용됨.
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

const { name, ...restProperty } = {
  name: "jiyoon",
  age: 29,
  gender: "male",
};

console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사
// 깊은 복사(deep copy)
// 얕은 복사 (shallow copy)
const colors = ["red", "orange", "banana", { special: "pink" }];
// const copyColors = [...colors]; // 1중첩일때는 써도 괜찮은 편이다.
const copyColors = structuredClone(colors); // 깊은 복사를 하는 메서드
// JSON.parse(JSON.stringfy)
copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(colors);
console.log(copyColors);

// JS는 동적 타이핑: 할당과 동시에 타입이 결정된다.
