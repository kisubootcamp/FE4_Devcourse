{
  // 생성자 함수
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person = new Person("jiyu", 24);
  console.log(person);
}
{
  // class (ES6)
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const person = new Person("jiyu", 24);
  console.log(person);
}
