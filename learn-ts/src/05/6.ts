{
  // 1. 타입 선언 - 변수에 타입을 지정해야 한다
  // 2. 접근 제어자 - 속성이나. 메서드에 대한 접근을 제한하는것, public, protected,private, #(ES2022)
  // public : 디폴트, 누구나 사용 가능
  // protected: 자신의 클래스 내부에서만 사용가능, 상속 받는 클래스에서 사용 가능
  // private : 자신의 클래스 내부에서만 사용가능, 상속 안됨
  // -> 객체의 속성에는 포함되지만 쓰지는 못함 -> 그래서 등장 #
  // # : 진정한 의미의 private
  // 3. readonly
  // 4. 추상클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
  // 5. implements

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
  const person = new Person("kyo", 25);
  // person.name = "eun";
  console.log(person.name);
}

{
  // 추상클래스
  abstract class Shape {
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
}

{
  //---코드
  interface Movable {
    move(): void;
  }
  interface Stopable {
    stop(): void;
  }
  type CarType = Movable & Stopable;
  class Car implements CarType {
    move() {
      console.log("run run!");
    }
    stop() {
      console.log("stop");
    }
  }
  const car: Car = new Car();
  car.move();
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
  const stringBox: Box<string> = new Box<string>("abc");
  console.log(stringBox.getValue());

  const numberBox = new Box(123);
  console.log(numberBox.getValue());
}
