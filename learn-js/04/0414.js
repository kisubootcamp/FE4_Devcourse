// 생성자 함수
// 객체를 생성할 때 사용하는 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

// const person = new Person("John", 21); // 찍어내는 객체.? Person 생성자의 인스턴스
// console.dir(person);
// console.dir(person.__proto__);

// console.log(person instanceof Person);
// console.log(person instanceof Function);
// console.log(Person instanceof Function);

// console.log(person.name);
// console.log(person.age);
// console.log(person.greet());

function Developer(name, skill) {
  Person.call(this, name);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.contructor = Developer;

const dev = new Developer("James", 19, "Javascript");
console.log(dev);
console.log(dev.greet());

// 이런 코드 쓰진 않을거지만 필기는 해두기. 눈으로 읽어 보기
