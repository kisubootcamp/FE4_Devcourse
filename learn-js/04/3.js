// static
// 정적 속성
// 정적 메서드
// 인스턴스 속성
// 인스턴스 메서드

class Maths {
  static PI = 3.14; //
  static add(n1, n2) {
    return n1 + n2;
  }
  static abs(value) {
    return value < 0 ? value * -1 : value;
  }
}

const m = new Maths();
console.log(m);
console.log(Maths.add(1, 2));
console.log(Maths.PI);
console.log(Math.abs(-100));
