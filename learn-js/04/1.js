// 생성자 함수
// 객체를 생성할 때 사용하는 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

function Developer(name, skill) {
  Person.call(this, name);
  this.skill = skill;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const dev = new Developer("James", "Javascript");
console.log(dev);
console.log(dev.greet());
