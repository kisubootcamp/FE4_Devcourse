// 타입스크립트 클래스와 자바스크립트 클래스의 차이점
{
  // 1. 타입선언 - 변수에 타입을 지정해야 한다
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것, public, protected, private, #(ES2022)
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello! ${this.name}, ${this.age}`);
    }
  }
  const person = new Person('sucoding', 20);
  console.log(person);
}

/*
자바스크립트 버전
 class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello! ${this.name}, ${this.age}`);
    }
  }
  const person2 = new Person2("sucoding", 20);
  console.log(person2);
*/

{
  //제네릭
  class Box {
    value: any;
    constructor(value: string | number) {
      this.value = value;
    }
    getValue() {
      return this.value;
    }
  }
  const stringBox: Box = new Box('abc');
  console.log(stringBox.getValue());
}
