// ES5
// 자바스크립트는 prototype 기반의 언어이다.
// 생성자 함수 - 파스칼 케이스
// new 키워드를 붙이고 변수 -> 함수를 호출할 때 객체 형태로 변환
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}
Car.prototype.teacher = "kim";
Car.prototype.getMaxSpeed = function () {
  return `Max Speed: ${this.speed * 2}`;
};

// 인스턴스 - 생성자 함수로 찍어낸 객체를 가르키는 용어
// 프로토타입체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
const car1 = new Car("bmw", 200);
//console.log(car1.hasOwnProperty("name"));
console.dir(car1);
// console.log(car1.teacher);
// console.log(car1.getMaxSpeed());
// console.dir(car1.__proto__.getMaxSpeed());
// const car2 = new Car("g80", 200);
// const car3 = new Car("gv90", 200);

const num = 3.14;
console.log(num.toFixed(2));

// console.log(car1);
// console.log(car2);
// console.log(car3);

/* 프로토타입 */
// 모든 함수가 일대일로 매칭되는 공간

// 모든 인스턴스는 proto를 가지고 있음
// Object 함수의 인스턴스는 prototype
