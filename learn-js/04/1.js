// 생성자 함수
// 객체를 생성할 때 사용하는 함수
function Person(name, age) {
  this.name = name;
  this.age = age;

  //   this.greet = function () {
  //     return `${this.name}, ${this.age}`;
  //   };
}

Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

// person -> 인스턴스, Person -> 생성자 함수
// const person = new Person("John", 20);
// console.log(person);
// console.log(person instanceof Person);   // true
// console.log(person instanceof Function); // false

// console.log(Person instanceof Function); // true

// console.log(person.name);
// console.log(person.age);
// console.log(person.greet());

// console.dir(person);
// console.dir(person.__proto__);

// console.log(Function instanceof Object); // true

// Person 생성자 상속
function Developer(name, age, skill) {
  Person.call(this, name, age);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const dev = new Developer("James", 19, "Javascript");
console.log(dev);
console.log(dev.greet());
