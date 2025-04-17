// 인스턴스 속성
// 인스턴스 메서드

// 정적 속성 (static)
// 정적 메서드 (static)
// new 키워드로 인스턴스 생성해서 접근하는게 아니라, 생성자 함수 자체에 접근해서 사용
class Maths {
  static PI = 3.14;
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
