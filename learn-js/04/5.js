const a = new String('Hello');
console.log(a.toUpperCase());

// String, Boolean, Number
// 래퍼 객체
const b = 'Hello';
console.dir(b.toUpperCase());
console.log(new String(b).toUpperCase());
console.dir(b.toUpperCase());
