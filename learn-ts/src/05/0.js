{
  // 생성자 함수
  // 객체를 생성할때 사용하는 함수
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  const person = new Person('sucoding', 20);
  console.log(person);

  // ES6
  class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const person2 = new Person2('sucoding', 20);
  console.log(person2);
}
