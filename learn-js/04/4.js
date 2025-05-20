// 표준내장객체 String, Number, Boolean, Date, Object, Functions, Math,

const a = new String("Hello");
console.log(a);

const b = "Hello";
console.dir(b); // 기본자료형 : 문자열 , 어떻게 toUpperCase 에 접근 ..?
console.log(b.toUpperCase());
console.log(new String(b).toUpperCase()); // 이게 가능한 자료형 -> string, number, boolean

// string. number, boolean -> 래퍼 객체 , 기본 자료형을 객체로 감싸서 인스턴스로 만들어서 프로토타입에 접근할 수 있도록 만드는 것

// symbol, undefined, null 은 인스턴스 x
