// String, Number, Boolean, Date, Object, Function
// 정적 메서드는 절대 인스턴스 x

const a = new String("Hello"); // String 은 표준내장객체라서 가능
console.log(a.toUpperCase());

// String, Boolean, Number
// 래퍼 객체
const b = "Hello"; // 인스턴스가 아님. 펼칠수가앖음 -> 기본 자료형
console.log(b.toUpperCase());
console.log(new String(b).toUpperCase());
console.dir(b.toUpperCase());

// 프로토타입 *****
// static은 prototype 에 생성되지 않는다
// static은 인스턴스화 되지 않는다.
