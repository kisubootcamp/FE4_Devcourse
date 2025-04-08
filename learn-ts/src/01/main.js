//1. 템플릿 문자열
// 1.1 백틱 (`) 문자열을 정의하는 방법

const uname = "sucoding";
const greet = `Hello, ${uname}!`;
console.log(greet);

//2. 화살표 함수
//2.1 화살표를 사용해서 함수를 정의하는 방법

const sum = (a, b) => a + b;

//3. 구조 분해 할당(비구조화 할당)
//3.1 분해해서 할당 : index 번호에 일치하는 식별자 .., 식별자 이름은 마음대로

// const [a, ...rest] = ["apple", "banana", "orange"];
// console.log(a);
// console.log(rest);

//3.2 객체에서의 구조분해 할당
// 객체 식별자는 마음대로 안됨, key 값을 똑같이 적어야함, ':' 사용하여 다른 이름으로 바꿀 수 있음
// const {
//   animalName: aname,
//   animalType,
//   animalAge,
//   animalGender,
// } = {
//   animalName: "곰이",
//   animalType: "고양이",
//   animalAge: 10,
//   animalGender: "male",
// };

// console.log(aname);
// console.log(animalType);
// console.log(animalAge);
// console.log(animalGender);

const {
  id,
  profile: { name, age, gender },
} = {
  id: 1,
  profile: {
    name: "곰이",
    age: 20,
    gender: "male",
  },
};
console.log(name, age, gender);

function printInfo({ name, age }) {
  console.log(`Hello, ${name}, ${age}`);
}
printInfo({
  name: "sucoding",
  age: 20,
});

// 4. 계산된 속성
//4.1 객체의 키를 변수로 치환
const key = "name";
const user = {
  [key]: "sucoding",
};
console.log(user.name);

//5. spread연산자
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

const { xname, ...restProperty } = {
  xname: "sucoding",
  age: 20,
  gender: "male",
};
console.log(xname);
console.log(restProperty);

//깊은 복사처럼 보이는 얕은 복사 ->얕은 복사
//깊은 복사 (deepcopy)
//얕은 복사 (shallow copy)
const colors = ["red", "orange", "banana", { special: "pink" }];
// const copyColors = colors; //얕은 복사 (원본가 연결이 끊어지지 않음)
const copyColors = [...colors]; //1중첩만 깊은 복사, 2중첩부터는 x (1중첩이라는 확신이 있을 때는 괜찮은 방법)
const copyColorsStrict = structuredClone(colors); // 깊은 복사 - >const copyColors = JSON.parse(JSON.stringify(colors));
copyColors[0] = "pink";
copyColors[3].special = "gray";

console.log(colors);
console.log(copyColors);
console.log(copyColorsStrict);

//동적 타이핑
// 할당과 동시에 타입이 결정된다
let num = null;
num = 10;
num = undefined;
num = "10";
