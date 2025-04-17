// Sugar (설탕) Syntax(문법) = 설탕 문법
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `${this.name}, ${this.age}`;
  }
}

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age, skill);
    this.skill = skill;
  }
}

const dev = new Developer("james", 19, "javascript");
console.log(dev);
