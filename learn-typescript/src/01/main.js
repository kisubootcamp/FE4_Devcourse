/* 템플릿 문자열 */
// 백틱(`) 문자열로 작성하는 방법 : 문자열 중 일부를 변수로 지정할 수 있음


/* 화살표 함수 */
// 함수를 화살표를 사용해서 정의하는 방법
// 1. 함수 선언문
function sum1(a, b) {
    return a + b;
}
// 2. 함수 표현식
const sum2 = function sum2(a, b) {
    return a + b;
}
// 3. 화살표 함수
const sum3 = (a, b) => {
    return a + b;
}

const sum4 = (a, b) => a + b;


/* 구조 분해 할당(비구조화 할당) */
// 분해해서 할당하는 방법
const [fruit1, fruit2, fruit3] = ["apple", "banana", "orange"];

const {animalName, animalType, animalAge, animalGender} = {
    animalName: "고다",
    animalType: "고양이",
    animalAge: 7,
    animalGender: "male"
}

const {id, profile:{aname, age, gender}} = {
    id: 1,
    profile: {
        aname: "고다",
        age: 7,
        gender: "male"
    }
}

console.log(aname);


/* 계산된 속성 */
// 객체의 키를 변수로 치환
const key = "name";
const user = {
    [key]: "sucodding"
};
console.log(user.name);


/* 스프레드 연산자 */
const [red, ...restColor] = ["red", "blue", "green"];

const {name, ...restProperty} = {
    name: "sucoding",
    age: 20,
    gender: "male"
}
console.log(restProperty);

// 깊은 복사처럼 보이는 얕은 복사 : 얕은 복사 (1중첩까지만 깊은복사 해줌)
// 스프레드 연산자를 쓰지 않고 복사하면 완전한 얕은 복사가 돼버림
// 완전한 깊은 복사를 하려면 structuredClone(arr) 사용
const colors = ["red", "orange", "yellow"];
const copyColors = [...colors];
copyColors[0] = "pink";

console.log(colors);
console.log(copyColors);