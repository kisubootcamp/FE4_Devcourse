{
  // 자바스크립트에서의 생성자 함수
  // 객체를 생성할 때 사용하는 함수

  // ES5
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  const person = new Person('su', 20);
  console.log(person);
}

{
  // 클래스
  // ES6

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const person = new Person('su', 20);
  console.log(person);
}
