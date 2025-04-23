{
  //생성자 함수
  //객체를 생성할 떄 사용하는 함수
  //ES5
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  //생성자 함수는 더이상 사용되지는 않음

  const person = new Person("sucoding", 20);
  console.log(person);

  //ES6
  class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const peron2 = new Person2("sucoding", 20);
  console.log(person2);
}
