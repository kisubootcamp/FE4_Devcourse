{
  // 생성자 함수
  // 객체를 생성할 때 사용하는 함수
  // ES5
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person = new Person("yubin", 20);
  console.log(person);

  // ES6
  class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const person2 = new Person2("bing", 26);
  console.log(person2);
}

{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`${this.name}~!! ${this.age}`);
    }
  }
  const person = new Person("bings", 26);
  console.log(person); // greet 함수는 출력해도 보이지 않음 -> prototype이라는 곳에 있음
}
