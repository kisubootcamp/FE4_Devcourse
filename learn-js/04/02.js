// class 문법
// Suger Syntax: 설탕 문법
// 함수 문법을 쉽게 사용하기 위한 래핑의 또 다른 형태이다

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `${this.name}, ${this.age}`;
  }
}

const person = new Person("John", 20); // 생성자 함수와 마찬가지로 new 를 이용하여 객체를 호출한다
console.log(person);
console.dir(person.__proto__);

// 생성자 함수보다 훨씬 깔끔하다
// class를 사용하여 메서드를 등록하면 메서드는 무조건 prototype 객체에 등록되어 있다.

class Developer extends Person {
  // Person 상속
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

const dev = new Developer("James", 19, "JavaScript");
console.log(dev);
console.log(dev.greet()); // skill을 받는 곳이 없기 때문에 JavaScript는 출력되지 않는다.
console.log(dev.skill);
