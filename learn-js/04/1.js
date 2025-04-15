// 생성자 함수
// 객체를 생성할 때 사용하는 함수
// 꼬리표가 있는 건 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
  //   this.greet = function () {
  //     return `${this.name}, ${this.age}`;
  //   };
}
// 생성자 함수로 만든 메서드는 모든 인스턴스가 공유하도록
// 프로토타입에 정의하는게 메모리 측면에서 효율적이다
Person.prototype.greet = function () {
  return `${this.name}, ${this.age}`;
};

const person = new Person("지은", 20);
console.log(person);
console.log(person.age);
console.log(person.name);
console.log(person.greet());
console.log(person.__proto__.greet()); // undefined undefined

// instanceof
// 생성자 함수의 프로토타입체인에 해당 생성자가 포함되어 있는지를 검사함
// 특정 객체가 특정 생성자 함수로부터 만들어졌는지 확인함
console.log(person instanceof Person);

function Developer(name, age, skill) {
  Person.call(this, name, age); // Person을 상속받도록
  this.skill = skill;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructio = Developer;

const developer = new Developer("제임스", 20, "자바스크립트");
console.log(developer.greet()); //제임스 20
