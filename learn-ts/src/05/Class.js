{
  //생성자 함수
  // 객체를 생성할때 사용하는 함수

  // ES5
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  const person = new Person('sucoding', 20);
  console.log(person);
}
{
  //ES6
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const person2 = new Person('sucoding', 20);
  console.log(person2);
  // Person { name: 'sucoding', age: 20 }  -> 앞에 붙는 Person은 꼬리표같은 느낌
}
