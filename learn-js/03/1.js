// ES5
// 자바스크립트는 prototype 기반의 언어이다.
// 생성자 함수 - 파스칼케이스
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
} //바뀔 가능성있는 값만 속성으로 두고 나머지는 프로토타입에 저장

Car.prototype.teacher = "잘생겼다";
Car.prototype.getMaxSpeed = function () {
  return `Max Speed: ${this.speed * 2}`;
};

// 인스턴스 - 생성자 함수로 찍어낸 객체를 가리키는 용어
// 프로토타입체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
//__proto__는 누군가의 인스턴스를 가리킬때 사용가능
//모든 객체는 Object 인스턴스로 부터 시작됨
//배열,객체,함수...들은 모두 Object 생성자 함수로 부터 생겨남(root느낌..?)
const car1 = new Car("bmw", 200);
console.log(car1.hasOwnProperty("name")); //true
console.dir(car1);

const num = 3.14;
console.log(num.toFixed(2)); //래퍼객체
//   console.log(car1.teacher);
//   console.log(car1.getMaxSpeed());
//   console.dir(car1.__proto__.getMaxSpeed()); //MaxSpeed:NaN
//   console.dir(car1.__proto__.getMaxSpeed());
// console.dir(car1);
// const car2 = new Car("g80", 200);
// const car3 = new Car("g70", 200);

// console.log(car1);
// console.log(car2);
// console.log(car3);
