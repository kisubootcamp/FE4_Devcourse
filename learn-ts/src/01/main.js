// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법,
const name1 = 'Sucoding';
const greet = `Hello, ${name1}!`;
console.log(greet);

// 2. 화살표 함수
// 2.1 함수를 화살표를 사용해서 정의하는 방법
// 2.1.1 함수 선언문
function sum(a, b) {
  return a + b;
}
//2.11.2 함수 표현식1
const sum1 = function sum(a, b) {
  return a + b;
};
//2.1.3 1화살표 함수
const sum2 = (a, b) => {
  return a + b;
};
const sum3 = (a, b) => {
  a + b;
};
// 3. 구조분해 할당 (비구조화 할당)
// 3.1 분해해서 할당하겠다.

const foods = ['apple', 'banana', 'orange'];
const [apple, ...rest] = ['apple', 'banana', 'orange'];
console.log(apple);
console.log(rest);

// 3.2 객체에서의 구조분해 할당
const animal = {
  animalName: '곰이',
  animalType: '고양이',
  animalAge: 10,
  animalGender: 'male',
};
const {
  animalName: uname,
  animalType,
  animalAge,
  animalGender,
} = {
  animalName: '곰이',
  animalType: '고양이',
  animalAge: 10,
  animalGender: 'male',
};
console.log(uname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const {
  id,
  profile: { name: sname, age, gender },
} = {
  id: 1,
  profile: {
    name: '곰이',
    age: 10,
    gender: 'male',
  },
};
console.log(sname, age, gender);

function printInfo({ name, age }) {
  console.log(`Hello ${name}, ${age}`);
}
printInfo({
  name: 'sucoding',
  age: 20,
});

//4. 계산된 속성
//4.1 객체의 키를 변수로 치환
const key = 'name';
const user = {
  [key]: 'sucoding',
};
console.log(user.name);

//5. 스프레드 연산자
const [red, ...restColor] = ['Red', 'blue', 'green'];
console.log(red);
console.log(restColor);
const { name, ...restProperty } = {
  name: 'sucoding',
  age: 20,
  gender: 'male',
};
console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사
const colors = ['red', 'orange', 'banana', { special: 'pink' }];
const copyColors = [...colors];
copyColors[0] = 'violet';
copyColors[3].special = 'gray';

console.log(colors); // ? pink
console.log(copyColors);

const copyColors2 = structuredClone(colors);
copyColors2[3].special = 'skyblue';
console.log(colors);
console.log(copyColors2);
