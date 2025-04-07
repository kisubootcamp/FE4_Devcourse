// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법,

const uname = "yeonseo";
const greet = `Hello, "${uname}"!`;
console.log(greet);

// 2. 화살표 함수
// 2.1 함수를 화살표를 사용해서 정의하는 방법
const sum = (a, b) => a + b;

// // 2.1.1 함수 선언문
// function sum(a, b) {
// 	return a + b;
// }

// // 2.1.2 함수 표현식
// const sum = function sum(a, b) {
// 	return a + b;
// };

// // 2.1.3 화살표 함수
// const sum = (a, b) => {
// 	return a + b;
// };

// 3. 구조 분해 할당(비구조화 할당)
// 3.1 분해해서 할당하겠다. -> 배열이면 껍데기가 배열이어야 함.
// 인덱스에 맞춰서 들어간다.
const [apple, banana, orange] = ["apple", "banana", "orange"];
console.log(apple); // 대괄호 연산자
console.log(banana); // 대괄호 연산자
console.log(orange); // 대괄호 연산자

// const foods = ["apple", "banana", "orange"];
// console.log(foods[0]); // 대괄호 연산자
// console.log(foods[1]); // 대괄호 연산자
// console.log(foods[2]); // 대괄호 연산자

// const [a] = ["apple", "banana", "orange"]; // 이것도 가능. 이렇게 하면 banana와 orange는 없어진다.
// console.log(a);

const [a, ...rest] = ["apple", "banana", "orange"];
console.log(a);
console.log(rest);

const [, , c] = ["apple", "banana", "orange"]; // 이것도 가능이네
console.log(c);

// 3.2 객체에서의 구조분해 할당 -> 객체면 껍데기가 객체여야 함. 또한, 속성의 키값을 그대로 가져서 받아야 됨.
const { animalName, animalType, animalAge, animalGender } = {
	animalName: "곰이",
	animalType: "고양이",
	animalAge: 10,
	animalGender: "male",
};

console.log(animalName);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

// 3.2.1 만약에 다른 이름으로 받아오고 싶으면 ':' 사용
const { animalName: aname } = {
	animalName: "곰이",
};

console.log(aname);

// const animal = {
//     animalName : "곰이",
//     animalType : "고양이",
//     animalAge : 10,
//     animalGender : "male",
// };

// console.log(animal.animalName);
// console.log(animal.animalType);
// console.log(animal.animalAge);
// console.log(animal.animalGender);

const {
	id,
	profile: { age }, // 중첩된 객체 구조 분해 할당하는 법.
} = {
	id: 1,
	profile: {
		name: "곰이",
		age: 20,
		gender: "male",
	},
};
console.log(age);

// 만약 3번 중첩되어 있다면?
const {
	cid,
	profile: {
		cats: { cage },
	},
} = {
	cid: 1,
	profile: {
		cats: {
			cname: "곰이",
			cage: 20,
			cgender: "male",
		},
	},
};
console.log(cage);

function printInfo(userObj) {
	console.log(`${userObj.name}, ${userObj.age}`);
}
printInfo({
	name: "yeonseo",
	age: 25,
});

// 위 보다 아래처럼 많이 쓴다.
function printInfo({ name, age }) {
	console.log(`${name}, ${age}`);
}
printInfo({
	name: "yeonseo",
	age: 25,
});

// 4. 계산된 속성 []
// 4.1 객체의 키를 변수로 치환
const key = "name";
const user = {
	[key]: "yeonseo",
};
console.log(user.name);
console.log(user[key]);

// 5. 스프레드 연산자
const [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

const { name, ...restProperty } = { name: "yeonseo", age: 25, gender: "female" };
console.log(name);
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사(왜냐? 중첩된건 깊은 복사 안되기 때문에, 1중첩만 깊은 복사 해준다.)
// 깊은 복사(deep copy)
// 얕은 복사(shallow copy)
// const colors = ["red", "orange", "banana"];
// const copyColors = [colors];
// copyColors[0] = "pink";

// console.log(colors[0]); // "pink"
// 위에 처럼 안 바뀌게 하고 싶다면?
// const colors = ["red", "orange", "banana", { special: "pink" }];
// const copyColors = [...colors]; // 1중첩이라는 확신이 있을 때는 이거 사용!!!!
// copyColors[0] = "pink";
// copyColors[3].special = "grey";

// console.log(colors[0]); // "red"
// console.log(colors); // [ 'red', 'orange', 'banana', { special: 'grey' } ]
// console.log(copyColors); // [ 'pink', 'orange', 'banana', { special: 'grey' } ]

// 깊은 복사 하려면 structuredClone(colors)하면 됨.
// 과거에는 JSON.parse(JSON.stringify(colors));를 사용해서 깊은 복사 해야 했다.
const colors = ["red", "orange", "banana", { special: "pink" }];
const copyColors = structuredClone(colors);
copyColors[0] = "pink";
copyColors[3].special = "grey";

console.log(colors[0]); // "red"
console.log(colors); // [ 'red', 'orange', 'banana', { special: 'pink' } ]
console.log(copyColors); // [ 'pink', 'orange', 'banana', { special: 'grey' } ]

// 동적 타이핑
// 할당과 동시에 타입이 결정된다. (자바스크립트의 단점)
let num = null;
num = 10;
num = "10";
num = "a";
num = true;
