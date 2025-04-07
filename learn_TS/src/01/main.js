//필수 문법 정리
// 1. 템플릿 문자열
// `` 로 문자열을 정의하는 방법, 
const name = "Jeong"
const greet = `hello ${name}!`;
console.log(greet);

// 2. 화살표 함수
// 화살표를 사용해서 함수를 정의하는 방법

// 함수 선언문
// function sum(a,b) {
//     return a + b;
// }

// 함수 표현식
// const sum = function sum(a,b){
//     return a + b;
// }

// 화살표 함수
// const sum = (a,b) => {
//     return a + b;
// }

const sum = (a,b) => a + b;



// 구조분해할당(비구조화 할당)
// 분해해서 할당하겠다.
const [apple, banana, orange] = ['apple' ,'banana', 'orange'];
console.log(apple, banana, orange);


const [a, ...rest] = ['apple' ,'banana', 'orange'];
console.log(a, rest);

// 객체에서의 구조분해 할당
const {animalName :uname, animalType, animalAge, animalGender} = {
	animalName: '곰이',
	animalType: '고양이',
	animalAge : 20, 
	animalGender : 'male',
};

console.log(uname,animalType, animalAge,animalGender )

const {id, profile : {name1, type, age}} = {
    id : 1,
    profile : {
        name1: '곰이',
        type: '고양이',
        age : 20, 
    },
};
console.log(name1, age, type)


function meeting({name, age}){
    console.log(`hello ${name}, ${age}`);
}
meeting({
    name : 'Jeong',
    age:20,
})

// 계산된 속성
// 객체의 키를 변수로 치환
const key = "name"
const user = {
    [key] : "Kim",
};
console.log(user.name)

// 이거랑 같은 의미
// const user = {
//     name: "Kim"
// };

// 이런식으로 정해지지 않았을 때 유용함
// function makeUser(key, value) {
//     return {
//         [key]: value
//     };
// }

// const user = makeUser("age", 25);
// console.log(user.age); // 25

const{ property, ...restProperty } = {
    property: "Han",
    age : 29,
    gender : "male",
};

console.log(property,restProperty);

// deep copy, shallow, copy
// 1중첩이라는 확신이 있을 때는 spread 연산자 안전하게 사용가능
const colors = ["red", "yellow", "orange", {special : "pink"}];
const copyColors = [...colors];
// deep copy ⬇️
// const copyColors = structuredClone(colors)
// const copyColors = JSON.parse(JSON.stringify(colors))
copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(colors);
console.log(copyColors);