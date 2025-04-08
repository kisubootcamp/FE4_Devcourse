// 1. 템플릿 문자열
const uname = "sucoding";
const greet = `Heelo, ${uname}`;

console.log(greet);

// 2. 화살표 함수
const arrowfunc = (par1, par2) => {
  console.log(par1, par2);
};

// 3. 비구조화 할당
const animal = {
  id: 1,
  profile: {
    animalName: "곰이",
    animalType: "고양이",
    animalAge: 20,
    animalGender: "male",
  },
};

const {
  id,
  profile: {
    animalName: aname,
    animalType: type,
    animalAge: age,
    animalGender: gender,
  },
} = animal;

console.log(id, aname, type, age, gender);

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = "name";
const user = {
  [key]: "sucoding",
};

console.log(user.name);

// 5. 스프레드 연산자
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

const { name, ...resetProperty } = {
  name: "sucoding",
  age: 20,
  gender: "male",
};

console.log(name);
console.log(resetProperty);

// 깊은 복사 처럼 보이는 얕은 복사 -> 얕은 복사
const colors = ["red", "orange", "banana", { special: "pink" }];
// const copyColors = structuredClone(colors)
const copyColors = [...colors];

copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(copyColors);
console.log(colors);
