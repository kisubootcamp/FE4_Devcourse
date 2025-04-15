// ESS5
// 자바스크립트는 prototype 기반의 언어이다.
// 생성자 함수 - 파스칼케이스
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
  //   this.getMaxSpeed = function () {
  //     return `Max Speed: ${this.speed * 2}`;
  //   };
}

Car.prototype.teacher = "잘생겼다";
// console.dir(Car); // 객체의 구조를 깊이 파악 가능
Car.prototype.getMaxSpeed = function () {
  return `Max Speed: ${this.speed * 2}`;
};

// 인스턴스 - 생성자 함수로 찍어낸 객체를 기리키는 용어
// 프로토타입 체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
const car1 = new Car("bmw", 200);
console.log(car1);
// console.dir(car1.__proto__.teacher); // prototype 참조방법
console.dir(car1.teacher); // prototype 참조방법
console.log(car1.getMaxSpeed()); // this -> car1
console.log(car1.__proto__.getMaxSpeed()); // this -> 프로토타입 객체
// console.log(car1.hasOwnProperty("superman"));
// const car2 = new Car("g80", 200);
// const car3 = new Car("g70", 200);

const num = 3.14;
console.log(num.toFixed(2));

// console.log(car1);
// console.log(car2);
// console.log(car3);
