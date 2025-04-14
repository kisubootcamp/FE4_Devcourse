// static
// 정적 속성
// 정적 메서드
// 인스턴스 속성
// 인스턴스 메서드

class Maths {
  static PI = 3.14;
  static add(x, y) {
    return x + y;
  }
}

const m = new Maths();

console.log(Maths.PI); // 3.14
console.log(Maths.add(10, 20)); // 30
console.log(m); // Maths{}
console.log(m.PI); // undefined
