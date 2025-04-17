// static -> static은 인스턴스화 되지 않음 !
// 정적 속성 (PI)
// 정적 메서드

// 인스턴스 속성 (name, age)
// 인스턴스 메서드 (greet)

// 클래스는 생성자 함수의 설탕 문법이므로 내부적으로 함수라고 봐야 함.
class Maths {
  // static이 포함된 건 생성자 함수 내부에 남아있음. (인스턴스의 속성이나 메서드로 포함되지 않음)
  // Maths 클래스의 프로토타입의 constructor 내부에 포함됨.
  static PI = 3.14;
  static add(n1, n2) {
    return n1 + n2;
  }
}

const m = new Maths();
console.log(m);
// 인스턴스 객체에선 static 속성을 절대 참조할 수 없음.
console.log(m.PI); // undefined
// 인스턴스 객체는 프로토타입 객체만 참조할 수 있음.
console.log(Maths.PI); // 3.14
console.log(Maths.add(10, 20)); // 30
