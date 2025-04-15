// ES5
// 자바스크립트 prototype 기반의 언어이다.
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

Car.prototype.teacher = '잘생김';
Car.prototype.getMaxSpeed = function () {
  return `Max Speed: ${this.speed * 2}`;
};

// 프로토타입체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조
const car1 = new Car('bmw', 200);
console.log(car1.hasOwnProperty('name'));

const num = 3.14;
console.log(num.toFixed(2));

console.dir(car1);
console.log(car1.getMaxSpeed());
console.log(car1.teacher);
console.log(car1.getMaxSpeed()); // this는 Car
console.log(car1.__proto__.getMaxSpeed()); // this는 prototype객체
// const car2 = new Car('g80', 200);
// const car3 = new Car('g90', 200);
console.log(car1);
// console.log(car2);
// console.log(car3);
