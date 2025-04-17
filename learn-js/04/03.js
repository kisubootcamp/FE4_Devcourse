// Static
// 정적 속성
// Static이 붙은 메서드: 정적 메서드
// Static이 안 붙은 것
// 인스턴스 속성
// 인스턴스 메서드

class Maths {
  // class이지만 내부적으로는 함수라고 봐야한다.
  // 왜냐? class는 생성자 함수의 suger syntax이기 때문에
  static PI = 3.14;
  // 정적 메서드를 만들 때 사용
  static add(n1, n2) {
    return n1 + n2;
  } // 생성자 함수 내부에 있음.
  static abs(value) {
    return value < 0 ? value * -1 : value;
  }
}

const maths = new Maths();
console.log(maths);
console.log(maths.PI); // PI는 prototype의 constructor에 삽입되어 있다
console.log(Maths.PI);
console.log(Maths.add(10, 20));
console.log(Maths.abs(3 - 5));
console.log(Maths.abs(5 - 3));
// PI에 static이 붙어있어서 인스턴스의 멤버 속성으로 포함되지 않고 생성자 함수 내부에 남아있는다.
// 그래서 instance 내부에는 PI가 없다.
// 인스턴스는 PI에 접근할 수 없고 참조할 수 있는 방법은 생성자 함수를 직접 참조하는 것이다.

// 정적 속성, 정적 메서드: 인스턴스를 통해 찍어낼 수 없는, 생성자 함수를 직접 호출해야 접근할 수 있는 요소
