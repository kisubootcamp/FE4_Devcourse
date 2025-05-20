//Sugar Syntax (설탕 문법) : 쉽게 만들어주는 문법
// class 문법은 생성자 함수의 설탕 문법이다.
// 생성자 함수와 다르게 메서드는 프로토타입에 자동적으로 들어감
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `${this.name}, ${this.age}`;
  }
}

const person1 = new Person("john", 20);
console.log(person1);
console.log(person1.greet());

// 상속
class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

const dev1 = new Developer("james", 19, "javascript");
console.log(dev1);
console.log(dev1.greet());
