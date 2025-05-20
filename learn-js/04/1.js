// 생성자 함수
// 객체를 생성할 때 사용하는 함수 prototype NOTE 꼭 이해 *******

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return `${this.name},${this.age}`;
};

const person1 = new Person("John", 20);
const person2 = new Person("John", 20);
const person3 = new Person("John", 20);
// instance 에 포함되어 지는 속성 : 멤버속성

console.log(person1);
console.log(person2);
console.log(person3);

console.log(person1 instanceof Person);
console.log(person1 instanceof Function);
console.log(Person instanceof Function);

console.log(person1.name);
console.log(person1.age);
console.log(person1.greet());

console.dir(person1);
console.dir(person1.__proto__);
//생성되는 객체의 최종 종착지 : object prototype
//함수 최종 종착지 : Object function (참조 자료의 최고 조상)

console.log(Function.__proto__);

function Developer(name, age, skill) {
  Person.call(this, name, age);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
const developer = new Developer("james", 19, "javascript");
console.log(developer.greet());
