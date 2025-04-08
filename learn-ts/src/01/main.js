/*1. 템플릿 문자열
1.1 백틱(`) 문자열을 정의하는 방법

const Name = `sucoding`;
console.log(`Hello, ${Name}!`);

2. 화살표 함수
화살표를 사용해서 정의하는 방법
const sum = (a, b) => a + b;
console.log(sum(23452, 39116));

3. 구조 분해 할당(비구조화 할당)
3.1 분해해서 할당하겠다.
const [a, b, o] = ["apple", "banana", "orange"];
console.log(a);
console.log(b);
console.log(o);*/
// 3.2  객체에서의 구조분해 할당
// const {
// 	animalName: a_name,
// 	animalType,
// 	animalAge,
// 	animalGender,
// } = {
// 	/* 객체에서는 똑같이 적어줘야 함 */
// 	animalName: "곰이",
// 	animalType: "고양이",
// 	animalAge: "10",
// 	animalGender: "male",
// };
// console.log(a_name);
// console.log(animalType);
// console.log(animalAge);
// console.log(animalGender);
// const {
// 	id,
// 	profile: { name: s_name, age, gender },
// } = {
// 	id: 1,
// 	profile: {
// 		name: "곰이",
// 		age: 20,
// 		gender: "male",
// 	},
// };
// console.log(`${s_name}, ${age}, ${gender}`);

function printInfo({ name, age }) {
	console.log(`Hello, ${name}, ${age}`);
}
printInfo({
	name: "sucoding",
	age: 20,
});

// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = "name";
const user = {
	[key]: "sucoding",
};
console.log(user.name);

// 5. 스프레드 연산자
const [red, ...restColor] = ["red", "green", "blue"];
console.log(red);
console.log(restColor);

const { name, ...resetProperty } = {
	name: "sucoding",
	age: 20,
	gender: "male",
};

console.log(name);
console.log(resetProperty);

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사
const colors = ["red", "orange", "banana", { special: "pink" }];
/*const copyColors = [...colors];*/ // console.log(colors[0]) -> red
/* const copyColors = colors; */ // console.log(colors[0]) -> pink
const copyColors = structuredClone(colors);
copyColors[0] = "violet";
copyColors[3].special = "gray";

console.log(colors); // 1중첩만 깊은 복사
console.log(copyColors);
