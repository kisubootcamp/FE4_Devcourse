// 정적 속성 (static)
// 정적 메서드 (static)
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
console.log(m.PI);
console.log(Maths.PI);
console.log(Maths.add(10, 20));
console.log(Maths.abs(100));
console.log(Maths.abs(-100));
