// 생성자 함수의 Suger(설탕) Syntax(문법) - 설탕 문법
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `${this.name}, ${this.age}`;
  }
}

// const person1 = new Person("john", 20);
// console.log(person1); // greet() 확인 불가
// console.log(person1.greet()); // prototype에 있기 때문에 사용 가능

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

const dev = new Developer("James", 19, "Javascript");
console.log(dev);
console.log(dev.greet());
