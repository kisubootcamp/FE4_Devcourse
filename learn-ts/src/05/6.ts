{
  // 1. 타입선언 - 변수에 타입을 지정해야 한다
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제외하는 것 public, protected, private, #
  // 3. readonly
  // 4. 추상 클래스
  // 5. implements, 타입별칭이나 인터페이스
  // 6. 제네릭

  // public 언제 어디서든 이 속성에 접근할 수 있음, 기본값으로 모든 속성은 public
  // private 클래스 자기 자신의 내부에서만 접근할 수 있음 (외부에서 객체 자체에 접근하면 읽기 가능)
  // protected 자기 자신과 상속된 자녀 클래스만 접근할 수 있음
  // # private과 다르게 어떠한 방법으로도 외부에서 접근할 수 없음

  class Person {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(message: string) {
      console.log(message);
      console.log(`hello! ${this.name}, ${this.age}`);
    }
  }
  const person = new Person("sucoding", 20);
  console.log(person);
}

{
  abstract class Shape {
    abstract radius: number;
    abstract area(): number;
  }
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    area() {
      return Math.PI * this.radius;
    }
  }
  console.log(Circle);
}

{
  interface Movable {
    move(): void;
  }
  interface Stopable {
    stop(): void;
  }
  class Car implements Movable, Stopable {
    move() {
      console.log("run run!");
    }
    stop() {
      console.log("stop!");
    }
  }
  const car: Car = new Car();
  car.stop();
}
{
  // 제네릭
  class Box<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }

    getValue() {
      return this.value;
    }
  }
  const stringBox = new Box<string>("abc");
  console.log(stringBox.getValue());

  const numberBox = new Box<number>(123);
  console.log(numberBox.getValue());
}

{
  interface Emp {
    age: number;
    position: string;
    work(): void;
  }
  class Employee implements Emp {
    // 생성자
    constructor(
      private name: string,
      public age: number,
      public position: string
    ) {}

    // 메서드
    work() {
      console.log(`${this.name} 일함`);
    }
  }
}

{
  abstract class Animal {
    abstract name: string;

    abstract makeSound(): void;

    move(): void {
      console.log(`${this.name} is moving`);
    }
  }
  class Dog extends Animal {
    constructor(public name: string) {
      super();
    }
    makeSound(): void {
      console.log("월월");
    }
  }

  const dog = new Dog("buddy");
  dog.makeSound();
  dog.move();
}
