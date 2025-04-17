// 생성자 함수
// 객체를 생성할 때 사용하는 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

// console.log(person instanceof Person); // 특정 생성자 함수의 인스턴스 인지
// console.log(person instanceof Function);
// console.log(person instanceof Function);
console.log(Function instanceof Object);
// console.log(person.name);
// console.log(person.age);
// console.log(person.greet());

function Developer(name, skill, age) {
  Person.call(this, name, age);
  this.skill = skill;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const developer = new Developer('James', 19, 'Javascript');
console.log(developer);
console.log(developer.greet());

//생성자 함수를 이용해서 상속을 구현
