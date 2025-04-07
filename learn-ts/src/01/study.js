// 1. 템플릿 문자열
// 백틱을 사용하여 문자열을 정의한다. ${}을 이용하여 문자열 안에 변수를 집어넣어 사용할 수 있다
const today = "typescript";
const study = `오늘 배운 내용을 ${today}에 대한 내용입니다`;

console.log(study);

// 2. 화살표 함수
// 화살표를 사용해서 함수를 정의하는 방법. 기존 함수 정의법보다 훨씬 간결하게 표현할 수 있다.
const sum_number = (a, b) => a + b;

// 3. 구조 분해 할당(비구조화 할당)
// 요소를 분해해서 할당

const [my_html, my_css, my_javascript] = ["HTML", "CSS", "JAVASCRIPT"];

console.log(my_html);
console.log(my_css);
console.log(my_javascript);

const [user_html, ...rest] = ["HTML", "CSS", "JAVASCRIPT"];

console.log(user_html);
console.log(rest);

// 구조분해는 객체에서도 가능하다

const drink = ({
  drinkType: dtype,
  drinkName: dname,
  drinkTaste: dtaste,
} = {
  drinkType: "soda",
  drinkName: "Dr.Pepper",
  drinkTaste: "cherry",
});

console.log(dtype);
console.log(dname);
console.log(dtaste);

// 4. 계산된 속성
// 객체의 키를 변수로 치환한다. 리액트에서 많이 사용되는 속성이다.
const userKey = {
  key: "keyring",
};
console.log(userKey.key);

// 5. 스프레드 연산자
// 일부만 구조분해하고 나머지는 받는 형태. 리액트에서 많이 사용됨

const [hamburger, ...restFood] = ["hamburger", "pizza", "chicken"];
console.log(hamburger);
console.log(restFood);

// 복사에는 깊은 복사와 얕은 복사가 있다.
// 깊은 복사: 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조를 공유하지 않는 복사
// -> 원본이나 복사본을 변경할 때, 다른 객체가 변경되지 않는 것을 보장할 수 있음

// 얕은 복사: 복사본의 속성이 만들어진 원본 객체와 같은 참조를 공유하는 복사
// -> 원본이나 복사본을 변경하면, 다른 객체 또한 변경될 수 있음.

const colors = ["red", "orange", "banana", { special: "pink" }];
const copyColors = structuredClone(colors);
copyColors[0] = "violet";
copyColors[3].special = "grey";

console.log(colors);
console.log(copyColors);

// JS: 동적 타이핑(할당과 동시에 타입이 결정됨)
// TypeScript: 정적 타이핑(프로그래머가 타입을 명시적으로 표시해야 함)
