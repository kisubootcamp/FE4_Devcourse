// Sugar Syntax (설탕 문법)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // class에서 메서드를 등록하면 바로 프로토타입 객체에 들어감 !!
  greet() {
    return `${this.name}, ${this.age}`;
  }
}

const person1 = new Person("John", 20);
console.log(person1);

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

const dev = new Developer("James", 19, "JavaScript");
console.log(dev);
console.log(dev.greet());
