// 생성자 함수
// 객체를 생성할 때 사용하는 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.greet = function () {
  //   return `${this.name}, ${this.age}`;
  // };
}

// 멤버 속성 : 인스턴스 객체에 포함되는 속성
// greet 함수는 인스턴스마다 달라지는 게 아니므로 멤버 속성에서 빼도 됨.
Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

const person = new Person("bing", 26);
console.log(person);
console.dir(person.__proto__);

console.log(person instanceof Person); // true
console.log(person instanceof Function); // false
console.log(Person instanceof Function); // true

console.log(Function instanceof Object); // true

const person1 = new Person("bing1", 21);
const person2 = new Person("bing2", 22);
const person3 = new Person("bing3", 23);

console.log(person1.greet()); // bing1, 21
console.log(person2.__proto__.greet()); // undefined, undefined
console.log(person3);

function Developer(name, age, skill) {
  // 생성자 함수의 상속
  Person.call(this, name, age);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const dev = new Developer("James", 19, "JavaScript");
console.log(dev);
console.log(dev.greet());
