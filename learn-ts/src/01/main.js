// 1. 템플릿 문자열
const uname = "eunji";
const greet = `Hello, ${uname}!`;

// 2. 화살표 함수
const sum = (a, b) => a + b;

// 3. 구조 분해 할당 (비구조화 할당)
// 3.1 배열에서의 구조 분해 할당
const [apple, banana, orange] = ["apple", "banana", "orange"];
console.log(apple);
console.log(banana);
console.log(orange);

// 3.2 객체에서의 구조 분해 할당
const {
    animalName: aname,
    animalType,
    animalAge,
    animalGender,
} = {
    animalName: "누리",
    animalType: "강아지",
    animalAge: 6,
    animalGender: "female",
};
console.log(aname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const {
    id,
    profile: { name: sname, age, gender },
  } = {
    id: 1,
    profile: {
      name: "eunji",
      age: 24,
      gender: "female",
    },
  };
  
  function printInfo({ name, age }) {
    console.log(`${name}, ${age} `);
  }
  
  printInfo({
    name: "eunji",
    age: 24,
  });
  
  // 4. 계산된 속성
  // 4.1 객체의 키를 변수로 치환
  const key = "name";
  const user = {
    [key]: "eunji",
  };
  console.log(user.name);

// 5. 스프레드 연산자
// 5.1 배열에서의 스프레드 연산자
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

// 5.2 객체에서의 스프레드 연산자
const {name, ...restProperty} = {
    name: "eunji",
    age: 24,
    gender: "female",
};

console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사
// 깊은 복사 (deep copy)
// 얕은 복사 (shallow copy)
// 1중첩이라는 확인이 있을 때 스프레드 연산자 사용 가능
const colors = ["red", "orange", "banana", { special: "pink" }];
const copyColors = structuredClone(colors);
// const copyColors = JSON.parse(JSON.stringify(colors)); // 예전에는 이렇게 사용

copyColors[0] = "violet";
copyColors[3].special = "green";

console.log(colors);
console.log(copyColors);

// 특징 : 동적 타이핑
// 할당과 동시에 타입이 결정됨
let num = null;
num = 10;
num = "10";