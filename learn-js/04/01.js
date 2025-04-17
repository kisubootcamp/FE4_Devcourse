// 생성자 함수
// 객체를 생성할 때 사용하는 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {};
}
Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};
// 모든 인스턴스 객체는 프로토타입이 있기 때문에 프로토타입을 참조하여 프로토타입에 등록된 메서드를 사용할 수 있다.
const person /* 인스턴스 */ = new Person("John", 20);
console.log(person);
console.log(person.name);
console.log(person instanceof Person);
console.log(person instanceof Function);
console.log(Person instanceof Function);
console.log(person.age);
console.log(person.greet());
console.dir(person);
console.dir(person.__proto__); // prototype에 접근
console.dir(person.__proto__.__proto__); // Object의 prototype에 접근
console.log(person instanceof Object);
console.log(person.__proto__.greet()); // prototype에는 name과 age가 없기 때문에 undefined가 나옴

// 프로토타입 체인
// function - instance - prototype이 서로를 참조하면 연결되어있는 현상
// __proto__: 자신을 생성한 생성자 함수의 프로토타입을 참조한다
// 프로토타입의 __proto__: Object의 프로토타입을 참조
// Object의 프로토타입의 프로토타입은 없다
// instance는 자신의 prototype 객체의 메서드 등에 접근이 가능한데, 이를 통해 암묵적으로 Object의 prototype에도 연결되어있다고 본다.

// 모든 인스턴스의 최종 종착지라고 볼 수 있는 것은 오브젝트 펑션
// 오브젝트보다 상위의 function 객체는 없다.

// instance 객체에 포함되어지는 속성을 멤버 속성이라고 함.

function Developer(name, age, skill) {
  Person.call(this, name);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer; // 생성자 함수에서 프로토타입을 상속시키는 방법

const dev = new Developer("James", 19, "JavaScript");

console.log(dev);
console.log(dev.greet());
