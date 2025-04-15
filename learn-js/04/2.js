// Sugar Syntax
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
    super(name, age);
    this.skill = skill;
  }
}

const dev = new Developer('John', 20);
console.log(dev);
console.log(dev.greet());
