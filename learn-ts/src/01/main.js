// 타입스크립트는 자바스크립트에 타입을 추가한 확장언어
// 사용하기위해서 자바크르립트 코드로 변환해주는 작업이 필요함

//1.자바스크립트 기본 문법
//템플릿 문자열 백틱으로 표시 문자열사이에 변수를 대입할 수 있음
const aname = "철수";
const helloTemplate = `${aname}아, 안녕?`;
console.log(helloTemplate);
//2. 화살표함수
// 매개변수가 없을 때
const printHello = () => "안녕하세요";
console.log(printHello());
//매개변수가 있을 떄
const printHello1 = (name) => `${name}, 안녕하세요`;
console.log(printHello("철수"));
//비구조화 할당
const likeFoods = ["apple", "banana", "orange"];
const [food1, food2, food3] = likeFoods;
console.log(food1, food2, food3);
//타입스크립트 타입
// string,number,boolean,objectt,Array,tuple,any,null,undefined,bigint
