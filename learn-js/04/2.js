// Sugar(설탕) Syntax(문법) - 설탕 문법 -> class는 내부적으로 생성자함수를 쉽게 사용?
class Person {
  constructor(name, age) {
    this.name = name; //name 인스턴스 속성
    this.age = age;
  }
  greet() {
    // 인스턴스 메서드
    return `${this.name}, ${this.age}`;
  }
}

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

const dev = new Developer("James", 19, "Javascript");
console.log(dev);
console.log(dev.greet());
