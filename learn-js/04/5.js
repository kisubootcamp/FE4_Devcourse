// class String{}
// function String(){}
const a = new String("Hello"); // 인스턴스
console.log(a.toUpperCase());

// String, Number, Boolean
// -> 래퍼 객체
const b = "Hello"; // 기본 자료형
console.log(b);
console.log(b.toUpperCase()); // -> console.log(new String(b).toUpperCase())
// console.log(new String(b).toUpperCase());
// console.log(b.toUpperCase());
