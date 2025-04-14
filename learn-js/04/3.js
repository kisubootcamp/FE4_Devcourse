// 정적 속성 (static)
// 정적 메서드 (static)
// 인스턴스 속성
// 인스턴스 메서드
class Mathes {
  static PI = 3.14;
  static add(n1, n2) {
    return n1 + n2;
  }
}

const m = new Mathes();

console.log(m);
console.log(m.PI);
console.log(Mathes.PI);
console.log(Mathes.add(10, 20));
