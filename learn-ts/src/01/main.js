// 1. 템플릿 문자열
const uname = "geoncoding";
const greet = `hello, ${uname}`;

// 2. 화살표 함수
const sum = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
// 3-1. 배열 구조 분해 할당
const [a, b, c] = ["apple", "banana", "orange"];
console.log(a);
console.log(b);
console.log(c);

// 3-2. 객체 구조 분해 할당
const {
  animalName: aname,
  animalType,
  animalAge,
  animalGender,
} = {
  animalName: "까미",
  animalType: "강아지",
  animalAge: 10,
  animalGender: "male",
};
console.log(aname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const {
  id,
  profile: { name: dname, age, gender },
} = {
  id: 1,
  profile: {
    name: "재건",
    age: 26,
    gender: "male",
  },
};
console.log(dname, age, gender);

function printInformations({ name, age }) {
  console.log(`name: ${name}, age: ${age}`);
}
printInformations({ name: "이재건", age: 26 });

// 4. 계산된 속성
const key = "name";
const user = {
  [key]: "jaegeon",
};
console.log(user.name);

// 5. spread 연산자
const [red, ...restColors] = ["red", "blue", "green"];
console.log(red);
console.log(restColors);

const { animalName, ...restProperties } = {
  animalName: "까미",
  animalType: "강아지",
  animalAge: 10,
  animalGender: "male",
};
console.log(animalName);
console.log(restProperties);

// 6. 얕은 복사
const colors = ["red", "blue", "green", { special: "orange" }];
const copyColors = structuredClone(colors);
copyColors[0] = "pink";
copyColors[3].special = "yellow";
console.log(colors); // [ 'red', 'blue', 'green', { special: 'orange' } ]
console.log(copyColors); // [ 'pink', 'blue', 'green', { special: 'yellow' } ]

// 특징: 동적 타이핑
// 할당과 동시에 타입이 결정됨
let num = null;
num = 10;
num = "10";
