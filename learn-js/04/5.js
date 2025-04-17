// class String {}
// function String() {}

const a = new String("Hello");
console.log(a.toUpperCase());

// string, numbe, boolean
// 래퍼객체 (일시적으로 객체로 감싸서 인스턴스화 시켜서 프로토타입 객체에 접근 할 수 있게 하는 개념)
const b = "Hello"; // 기본 자료형
console.div(b);
console.log(b.toUpperCase());
console.log(new String(b).toUpperCase());
