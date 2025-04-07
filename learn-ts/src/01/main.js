// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법
const uname = 'sy';
const greet = `hello, ${uname}`;
console.log(greet); // hello, sy

// 2. 화살표 함수
// 함수를 화살표를 사용해서 정의하는 방법
const sum = (a, b) => {
  return a + b;
};
const sum2 = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
// 3.1 분해해서 할당
const [a, ...rest] = ['a', 'b', 'c'];
console.log(a); // a
console.log(rest); // [ 'b', 'c' ]

// 3.2 객체에서 구조분해 할당
const {
  id,
  profile: { name: nname, age, gender },
} = {
  id: 1,
  profile: {
    name: '곰이',
    age: 20,
    gender: 'male',
  },
};
console.log(nname, age, gender); // 곰이 20 male

function printInfo({ name, age }) {
  console.log(`${name}, ${age}`);
}
printInfo({
  name: 'sy',
  age: 25,
}); // sy, 25

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = 'name';
const user = {
  [key]: 'sy',
};
console.log(user.name); // sy

// 5. 스프레드 연산자
const [red, ...restColor] = ['red', 'blue', 'green'];
console.log(red); // red
console.log(restColor); // [ 'blue', 'green' ]

const { name, ...restProperty } = {
  name: 'sy',
  age: 25,
};
console.log(name); // sy
console.log(restProperty); // { age: 25 }

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사
const colors = ['red', 'orange', 'banana', { special: 'pink' }];
// const copyColors = [...colors];
const copyColors = structuredClone(colors);
copyColors[0] = 'violet';
copyColors[3].special = 'grey';
console.log(colors);
console.log(copyColors);
