// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법, 
//const uname = "sucoding"
//const greet = `Hellow, ${uname}!`;


// 2. 화살표 함수
// 2.1 함수를 화살표를 사용해서 정의하는 방법
//const sum = (a, b) => a + b;


// 3. 구조 분해 할당(비구조화 할당)
// 3.1 분해해서 할당하겠따.
// const [apple, ...rest] =["apple", "banana", "orange"];
// console.log(apple);
// console.log(rest);

// 3.2 객체에서의 구조 분해 할당
const {animalName: aname, animalType, animalAge, animalGender}= {
    animalName: "봄이",
    animalType: "강이지",
    animalAge: "10",
    animalGender: "male"
};

console.log(aname);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);


// 4. 계산된 속성
// 4.1 객체의 키를 변수로 치환
const key = "name";
const user = {
    [key]: "sucoding",
};
console.log(user.name);


// 5. 스프레드 연산자
const  [red, ...restColor] = ["red", "blue", "green"];
console.log(red);
console.log(restColor);

// 깊은 복사처럼 보이는 얕은 복사 -> 얕은 복사 
// 깊은 복사 (deep copy)
// 얕은 복사 (shallow copy)
const colors =  ["red", "blue", "green", {special: "pink"}];
//const copyColors = structuredClone(colors); // 깊은 복사
const copyColors = [...colors]; // 1중첩 확실할 때 사용하면 좋음
copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(colors); 
console.log(copyColors); 