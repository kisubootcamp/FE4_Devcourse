// 생성자 함수
// 객체를 생성할 때 사용하는 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

const person = new Person("John", 20);
// console.log(person.name);
// console.log(person.age);
// console.log(person.greet());
// console.log(person instanceof Person);
// console.log(Person instanceof Function);
console.dir(person.__proto__);
console.log(Function instanceof Object);
console.dir(Function);
console.log(person.greet());
console.log(person.__proto__.greet());

function Developer(name, age, skill) {
  Person.call(this, name, age);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const dev = new Developer("James", 19, "Javascript");
console.log(dev.greet());
