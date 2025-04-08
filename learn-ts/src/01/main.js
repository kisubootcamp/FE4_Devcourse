// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법
const uname = 'ty';
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
// 3.1 분해해서 할당
const [a, ...rest] = ['apple', 'banana', 'orange'];
console.log(a);
console.log(rest);

// 3.2 객체에서의 구조 분해 할당
const {
  animalName: aname,
  animalType,
  animalAge,
  animalGender,
} = {
  animalName: 'abc',
  animalType: '고양이',
  animalAge: 11,
  animalGender: 'male',
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
    name: 'qwe',
    age: 22,
    gender: 'male',
  },
};
console.log(sname, age, gender);

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = 'name';
const user = {
  [key]: 'ty',
};
console.log(user.name);

// 5. 스프레드 연산자
const [red, ...restColor] = ['red', 'blue', 'green'];
console.log(red);
console.log(restColor);

const { name, ...restProperty } = {
  name: 'ty',
  age: 11,
  gender: 'male',
};
console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 결국 얕은 복사
// 깊은 복사 (deep copy) : 원본과의 참조가 끊어진 복사
// 얕은 복사 (shallow copy) : 원본과의 참조가 이어진 복사
const colors1 = ['red', 'orange', 'banana', { special: 'pink' }];
const copyColors = [...colors1]; // 1중첩이라는 확신이 있을 때

copyColors[0] = 'black';
copyColors[3].special = 'grey';

console.log(colors1);
console.log(copyColors); // 2중첩부터는 깊은 복사가 안 됨.

const colors2 = ['red', 'orange', 'banana', { special: 'pink' }];
const copyColors = structuredClone(colors2); // structuredClone() : 깊은 복사 가능
//const copyColors = JSON.parse(JSON.stringify(colors2));

copyColors[0] = 'black';
copyColors[3].special = 'grey';

console.log(colors2);
console.log(copyColors);
