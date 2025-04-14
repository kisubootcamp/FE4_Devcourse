/*
- 생성자 함수
객체를 생성할 때 사용하는 함수
*/

// 멤버 속성
// : 인스턴스 객체에 포함되는 속성

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `${this.name}, ${this.age}`;
  };
}

// 여기서 person 을 인스턴스
const person = new Person('John', 20);

console.log(person instanceof Person); // true
console.log(person instanceof Function); // false
console.log(Person instanceof Function); // true

Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

function Developer(name, age, skill) {
  Person.call(this, name, age);
  this.skill = skill;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const dev = new Developer('james', 'JS');
console.log(dev.greet());
