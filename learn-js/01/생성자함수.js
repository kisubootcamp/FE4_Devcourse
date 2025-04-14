// 생성자 함수 (ES5)
// 자바스크립트는 프로토타입(prototype)기반의 언어이다
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

console.dir(Car);
Car.prototype.teacher = "good";
Car.prototype.getMaxSpeed = function () {
  return `Max Speed: ${this.speed * 2}`;
};

// 인스턴스 - 생성자 함수로 찍어낸 객체를 가리키는 용어
// 프로토타입 체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
// -> 인스턴스는 자신을 생성한 생성자 함수의 프로토타입에 접근할 수 있다.
const car1s = new Car("bmw", 120);
// console.dir(car1s.__proto__.teacher);
// console.log(car1s.teacher);
// console.log(car1s.getMaxSpeed());
console.log(car1s.toString());
// console.log(car1s.hasOwnProperty("name")); //true

const num = 3.14;
console.log(num.prototype);

// const car2s = new Car("suv", 200);
// const car3s = new Car("g90", 100);

// console.log(car1s);
// console.log(car2s);
// console.log(car3s);
// console.log(car1s.maxSpeed());

const car1 = {
  name: "bmw",
  speed: 100,
  maxSpeed() {
    return `Max Speed: ${this.speed * 2}`;
  },
};

console.log(car1.maxSpeed());
console.log(car1.speed);
