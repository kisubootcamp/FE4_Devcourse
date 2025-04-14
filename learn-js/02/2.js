// Sugar Syntax(설탕 문법)

class Person {
  constructor(name, age) {
    // 인스턴스 속성
    this.name = name;
    this.age = age;
  }

  // 인스턴스 메서드
  greet() {
    return `${this.name}, ${this.age}`;
  }
}

const person1 = new Person("John", 19);
console.log(person1);

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

const dev = new Developer("James", 19, "javascript");
console.log(dev);
console.log(dev.greet());
