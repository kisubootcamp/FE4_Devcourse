{
  // class
  // 1. 타입선언 - 변수에 타입을 지정해야 한다.
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는것. public, protected, private, #, readonly
  // public - 언제 어디서든 접근 가능
  // protected - TS 에서만 있고 자식 클래스까지만 접근 가능하게 제한. 외부에서 접근 불가
  // private - 내부에서만 접근 가능. 상속도 안됨
  // readonly - 읽기 전용. 변경 불가
  // # - ES2020 이후부터 진짜 private 이 됨
  // 3. 추상 클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
  // 4. implements - TS 클래스 만의 문법. interface 를
  // 5. TS 클래스는 제네릭을 쓸 수 있다.
  class Person {
    #name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.#name = name;
      this.#age = age;
    }

    // prototype 공간에 정의됨
    greet() {
      console.log(`Hello! ${this.#name}, ${this.#age}`);
    }
  }

  const person = new Person("PSY", 20);
  console.log(person);
}

{
  // 추상 클래스
  // 직접 인스턴스를 만들 수 없고, 반드시 상속해서 구현해야 하는 클래스

  abstract class Shape {
    abstract area(): number;
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    area() {
      return 10;
    }
  }
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
}

{
  // implements - 타입 상속 ?
  interface Movable {
    move(): void;
  }

  class Car implements Movable {
    move() {
      console.log("부릉");
    }
  }

  const car = new Car();
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
  const stringBox = new Box("abc");
  console.log(stringBox);

  const numberBox = new Box(123);
  console.log(numberBox);
}
