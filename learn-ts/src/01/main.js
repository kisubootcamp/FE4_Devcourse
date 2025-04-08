// 1. 템플릿 문자열
// 1.1 백틱 `` 문자열을 정의하는 방법.

// 2. 함수

// 2.1 일반 함수
function sum(a, b) {
  return a + b;
}

// 매개변수가 없는 함수
const printHello = () => '안녕하세요';
console.log(printHello());
// 매개변수가 있는 함수
const printHello = (name) => `${name}, 안녕하세요`;
console.log(printHello('남윤서'));

// 매개변수가 2개 있을 때
const sum = (a, b) => {
  return a + b;
};
// 이 방법을 더 많이 쓰도록 하기!!
const sum = (a, b) => a + b;

// 3. 구조분해 할당 (비구조화 할당)
const likeFoods = ['apple', 'banana', 'orange'];
const [food1, food2, food3] = likeFoods;
const [a, ...rest] = ['apple', 'banana', 'orange'];
console.log(a);
console.log(rest);

// 3.2 객체에서의 구조분해 할당
// 일반 문법 - 객체
const animal = {
  animalName: '곰이',
  animalType: '고양이',
  animalAge: 20,
  animalGender: 'male',
};

const animalName = animal.animalName;
const animalType = animal.animalType;
const animalAge = animal.animalAge;
const animalGender = animal.animalGender;

console.log(animalName);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

// 비구조화 할당 - 객체
const animalObj = {
  animalName: '곰이',
  animalType: '고양이',
  animalAge: 20,
  animalGender: 'male',
};

const { animalName, animalType, animalAge, animalGender } = animalObj;

console.log(animalName);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const {
  id,
  profile: { name, age, gender },
} = {
  id: 1,
  profile: {
    name: '곰이',
    age: 20,
    gender: 'male',
  },
};
console.log(name, age, gender);

function printInfo({ name, age }) {
  console.log(`${name}, ${age}`);
}
printInfo({
  name: 'sucoding',
  age: 20,
});

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = 'name';
const user = {
  [key]: 'sucoding',
};
console.log(user.name);

// 5. 스프레드 연산자
const [red, ...restColor] = ['red', 'blue', 'green'];
console.log(red);
console.log(restColor);

const { name, ...restProperty } = {
  name: 'sucoding',
  age: 20,
  gender: 'male',
};
console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사
const colors = ['red', 'orange', 'banana', { special: 'pink' }];
const copyColors = [...colors];
copyColors[0] = 'pink';
copyColors[3].special = 'grey';
console.log(colors[0]); //red
console.log(colors);
console.log(copyColors);
