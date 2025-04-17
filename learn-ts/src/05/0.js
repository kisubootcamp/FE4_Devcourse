class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello! ${this.name}, ${this.age}`);
  }
}
const person2 = new Person2("sucoding", 20);
console.log(person2);
