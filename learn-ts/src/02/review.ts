//타입스크립트 기본 타입
//1. string
//2. number- 10진수, 16진수, 2진수, 실수 ..
//3. boolean(논리형)
// falsy->0,-0,"",null,undefined,NaN / boolean에 직접적으로 넣을 순 없고 평가할때 false로 인지
// truthy->falsy를 제외한 모든 값
//4. null
//5. undefined
//6. any -아무거나 허용, 타입을 검사하지 않음, 타입검사를 무력화하는 타입이기 때문에 남용을 피해야함
let anything: any = 10;
anything = 20;
anything = "A";
anything = undefined;
anything.toFixed(2); //소수점 자리수
//7. unknown - 타입검사하지 않음, 단 그 값을 사용하려할때에는 타입 검증해야함
let input: unknown = "Hello";
input = null;
input = 3.14;
input.toFixed(2); //에러 ; 사용 이전에 타입검사 필요
//=>
if (typeof input === "number") console.log(input.toFixed(2)); //타입검사후 사용
//8. 배열(array)
let arr: [] = [];
let numArr: number[] = [10, 20];
let numArr2: Array<number> = [10, 20];

let objArr: object[] = [{}, {}];
// let objArr:{}[]=[{},{}];도 동일

let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrix2: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//9. tuple
//특정 형태를 갖는 배열
let mixArr: [number, string] = [10, "A"];
//mixArr=[20,"B",30] 처럼 뒤에 값 추가하려면 [number,string]=>(number|string)[]처럼 표현함
let mixTuple: [number, string, object][] = [
  [1, "hello", { key: "value" }],
  [2, "world", { key: "example" }],
];
//10. bigint
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991); //MAX_SAFE_INTEGER
console.log(9007199254740997n); //MAX_SAFE_INTEGER보다 큰값은 정확도 떨어짐
console.log(100n + 200n); //300n

//객체
let obj: object = {}; //원시타입 제외하고 모든값허용 =>원시타입: null,undefined,number,string
let obj2: {} = {}; //null과 undefined를 제외한 모든 값을 허용; 조심할것
let obj: Record<string, never> = {}; //객체의 키 값은 문자열, 값은 절대 올 수 없다(빈 객체)

//래퍼객체=>원시타입 4개를 잠깐 객체로 감쌈
obj = null;
obj = undefined;
obj = 10;
obj = "A";

obj = [];
obj = function () {};
//전부 객체

//권장하는 타입지정방법 (object={}는 권장하지 않음)
let user: {
  name: string; //콤마(,)도 가능이지만 세미콜론(;) 권장
  age: number;
} = {
  name: "sucoding",
  age: 20,
};

let person: {
  name: string;
  likesFood: string[];
  address: {
    street: string;
    city: string;
  }; //address:object;로 사용해도 되지만 street. 작성시 자동완성 생성x
  isLoggedIn: boolean;
} = {
  name: "John",
  likesFood: ["apple", "banana"],
  address: {
    street: "Gang-nam",
    city: "seoul",
  },
  isLoggedIn: false,
};

//예제 문제에서 헷갈렸던 내용
//연습문제+ 7번
//객체 2개, 배열 1개로 이루어져 있으므로 튜플로 작성
let items: [
  { id: number; name: string; price: number },
  { id: number; name: string; price: number },
  [string, number]
] = [
  { id: 1, name: "Item1", price: 100 },
  { id: 2, name: "Item2", price: 200 },
  ["discount", 10],
];

//연습문제++ 2번과 비교해보면
//[[{...},{...}] , [{...},{...}] , [{...},{...}]]
//같은 형태의 객체 2개들어있는 배열이 큰 배열 속에서 3번 반복되므로 {...}[][] 형태로 묶음
let dataset: {
  id: number;
  value: string;
}[][] = [
  [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
  ],
  [
    { id: 3, value: "c" },
    { id: 4, value: "d" },
  ],
  [
    { id: 5, value: "e" },
    { id: 6, value: "f" },
  ],
];

//연습문제++ 3번
//{type,name,age} 와 {type, id, name, price} 형태가 2개씩 있음
// 객체 형태가 1개가 아니므로 튜플로 표현
let mixedData: [
  { type: string; name: string; age: number },
  { type: string; name: string; age: number },
  { type: string; id: number; name: string; price: number },
  { type: string; id: number; name: string; price: number }
] = [
  { type: "user", name: "Alice", age: 30 },
  { type: "user", name: "Bob", age: 25 },
  { type: "product", id: 1, name: "Laptop", price: 999 },
  { type: "product", id: 2, name: "Smartphone", price: 499 },
];
