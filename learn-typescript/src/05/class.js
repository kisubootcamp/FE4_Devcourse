{
  // 생성자 함수
  // 객체를 생성할 때 사용되는 함수 : ~ ES5
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  const person = new Person("Hayoung", 25);

  // 클래스
  // ES6부터는 이걸 쓴다
  class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const person2 = new Person2("하영", 25);
}
