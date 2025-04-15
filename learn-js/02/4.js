// String, Number, Boolean, Date, Object, Function,

const a = new String("Hello");
console.log(a);
console.log(a.toLowerCase());

// 기본자료형 문자열에도 toUpperCase()를 사용 가능함.
const b = "Hello";
console.log(b);
console.log(b.toUpperCase());

// 자바스크립트에서 내부적으로 아래와 같이 만들어주었다가 다시 원래대로 되돌린다. 기본자료형인 문자열에도 String의 표준내장객체를 사용할 수 있는 것
console.log(new String(b).toUpperCase());
console.log(b.toUpperCase());

// 래퍼객체 - String, Number, Boolean만 표준내장객체를 사용할 수 있음.
