{
  // 생성자 함수: 객체를 생성
  // ES5
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person = new Person("jaegeon", 26);
  console.log(person);

  // ES6
  class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const person2 = new Person2("jaegeon", 26);
  console.log(person2);
}
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person2 = new Person2("jaegeon", 26);
console.log(person2);
