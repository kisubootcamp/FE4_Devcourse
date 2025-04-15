{
  // 1. 타입 선언: 변수에 타입을 지정
  // 2. 접근 제어자: 속성이나 메서드의 접근을 제한함
  // 3. readonly 키워드
  // 4. 추상 클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
  class Person {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello! ${this.name}, ${this.age}`);
    }
  }
  const person = new Person("jaegeon", 26);
  person.greet();
  console.log(person.name);
}
{
  abstract class Shape {
    abstract area(): number;
    abstract radius: number;
  }
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    area() {
      return Math.PI * this.radius;
    }
  }
}
{
  // implements는 타입 별칭과 인터페이스를 상속받음
  interface Movable {
    move(): void;
  }
  interface Stopable {
    stop(): void;
  }
  type Cartype = Movable & Stopable;
  class Car implements Cartype {
    move() {
      console.log("run!");
    }
    stop() {
      console.log("stop");
    }
  }
  const car: Car = new Car();
  car.move();
}
{
  // TS 클래스의 제네릭
  class Box<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }
    getValue() {
      return this.value;
    }
  }

  const stringBox: Box<string> = new Box<string>("abc");
  console.log(stringBox.getValue());
}
