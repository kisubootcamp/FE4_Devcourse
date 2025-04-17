// 클래스를 sugar syntax 라고도 한다.
// 문법을 쉽게 만들어 줬다.
// 밑에서 위로는 되는데
// 위에서 아래로 접근은 안된다.
// class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `${this.name}, ${this.age}`;
  }
}
const person1 = new Person("조온", 20);
console.log(person1);

// 클래스 상속
class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

const dev = new Developer("제임스", 19, "자바스크립트");
console.log(dev.skill);
