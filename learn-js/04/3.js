class Maths {
  static PI = 3.14; // 정적 속성
  value = 10; // 인스턴스 속성

  static square(x) {
    // 정적 메서드
    return x * x;
  }

  double() {
    // 인스턴스 메서드
    return this.value * 2;
  }
}

console.log(Maths.PI); // 3.14 (정적 속성)
console.log(Maths.square(5)); // 25 (정적 메서드에 매개변수를 전달방법)

const m = new Maths();
console.log(m.value); // 10 (인스턴스 속성)
console.log(m.double()); // 20 (인스턴스 메서드)
console.log(m.PI); // undefined (정적 속성은 인스턴스에서 접근 불가)
