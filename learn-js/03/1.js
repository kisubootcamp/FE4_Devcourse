// ES5
// 자바스크립트는 prototype 기반의 언어임
// 생성자 함수 - 파스칼 케이스
function Car(name, speed) {
  this.name = name;
  this.speed = speed;
  // 이름이 바뀌어도 생성자 함수만 바꿔주면 모든 인스턴스의 속성이 바뀜
  // this.getMaxSpeed = function () {
  //   return `Max Speed: ${this.speed * 2}`;
  // };
}

// 생성자 함수의 프로토타입 공간에 접근 -> prototype
// 인스턴스에서 생성자 함수의 프로토타입 객체 공간에 접근 -> __proto__ 또는 생략

// 공통된 것은 프로토타입 객체로 빼서(공용 공간에) 등록함 -> 메모리를 효율적으로 사용할 수 있게 됨 !
Car.prototype.teacher = "잘생겼다";
console.dir(Car);
// this는 나를 호출한 객체.
// 즉, console.log(car1.getMaxSpeed()); 여기에서 car1을 가리킴.
Car.prototype.getMaxSpeed = function () {
  return `Max Speed: ${this.speed * 2}`;
};

// prototype은 자바스크립트에서 함수에만 존재하는 것.
// 모든 함수는 자신과 1:1로 매칭되는 특별한 공간이 있음 -> prototype
// dir -> 객체의 구조를 상세하게 볼 수 있게 해주는 콘솔 객체의 내장 메서드.
// 모든 함수는 프로토타입 속성을 참조하고, 프로토타입은 constructor로 함수를 참조함. (양방향 관계)
console.dir(Car);

// 인스턴스 -> 생성자 함수로 찍어낸 객체를 가리키는 용어
const car1 = new Car("bmw", 200);
// 생성자 함수로 찍어낸 인스턴스는 내부적으로 생성자 함수의 프로토타입 객체를 가리키는 속성을 가지고 있음 !! (프로토타입 객체 공간은 생성자 함수 당 1개밖에 없음)
// 그럼 어차피 모든 인스턴스는 프로토타입 객체를 가리키는 속성이 있으니까 거기를 공용 공간으로 만들어서 사용하자는 아이디어 !
console.dir(car1);
console.dir(car1.__proto__.teacher);
// 프로토타입 체인 -> 인스턴스에서 자신을 생성한 생성자 함수의 프로토타입 객체를 참조하는 행위
// 한 마디로, 인스턴스는 자신을 생성한 생성자 함수의 프로토타입에 접근할 수 있음 !!
console.log(car1.teacher);
console.log(car1.getMaxSpeed()); // 여기서 나를 호출한 객체는 car1
console.log(car1.__proto__.getMaxSpeed()); // 여기서 나를 호출한 객체는 __proto__ -> 따라서 this가 car1이 아니라 __proto__를 가리키므로 NaN이 출력됨.

const car2 = new Car("g80", 200);
const car3 = new Car("g70", 200);

console.log(car1); // 생성자 함수로 만든 객체는 꼬리표처럼 생성자 함수의 이름이 함께 나옴.
console.log(car2);
console.log(car3);

// 클래스는 생성자 함수를 쉽게 사용하기 위한 Sugar Syntax(설탕 문법)임.

// __proto__는 인스턴스에만 존재하는 속성임.
// 인스턴스(car1)는 생성자 함수의 프로토타입 객체를 참조하는데, 이 프로토타입 객체 안에도 프로토타입 객체가 있음
// -> 얘(Car)도 누군가의 인스턴스라는 의미 !!!
// -> 생성자 함수는 Object의 인스턴스
// console.log(car1.hasOwnProperty("name")); // 현재 ESLint 때문에 에러나는 것임. 사용 가능함.
// 프로토타입 체이닝 덕분에 Object의 hasOwnProperty를 사용한 것.

// 일시적 객체화 -> 래퍼 객체
const num = 3.14;
// toFixed를 사용하려고 하면 num을 객체(래퍼 객체)로 감싸서 사용할 수 있게 해줌.
console.log(num.toFixed(0));
