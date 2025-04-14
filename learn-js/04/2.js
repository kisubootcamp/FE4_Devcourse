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
const person1 = new Person('john', 20);
console.log(person1);

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}
const dev = new Developer('james', 19, 'js');
