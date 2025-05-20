// static
// 정적 속성, 정적 메서드
//  static 을 붙이지 않은 것은 인스턴스 속성, 인스턴스 메서드
// static은 prototype 에 생성되지 않는다..? -> 인스턴스화 되지 않는다로 표현

// class 는 내부적으로 함수로 봐야함 -> 프로토타입 객체를 가지고 있음
class Maths {
  static PI = 3.14; // 정적 속성, 정적 객체 지정
  static add(x, b) {
    return x + b;
  }
}
// static이 붙은 속성은 인스턴스의 맴버 속성이 되지 않음 static 은 인스턴스화 되지 않는다
const m = new Maths();
console.log(m);
console.log(m.PI); // undefined
console.log(Maths.PI); //3.14
console.log(Maths.add(10, 20)); //30

// 표준내장객체 : 자바스크립트에 내장되어 있는 객체
