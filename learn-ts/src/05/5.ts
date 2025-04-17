{
  // 클래스

  // 자바스크립트 클래스와 차이점
  // 1. 타입 선언: 변수에 타입을 지정해야 한다.
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것.(public, protected, private, #)
  // 3. readonly 키워드 사용할 수 있다.
  // 4. 추상클래스 제공 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스 / 하나만 상속 가능
  // 5. implements, 타입 별칭이나 인터페이스 / 클래스가 인터페이스 구현할 때 사용
  // 6. 제네릭 사용 가능하다.

  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`${this.name}, ${this.age}`);
    }
  }

  const person = new Person('su', 20);
  person.greet();
  console.log(person);
}

{
  // 추상클래스
  // abstract

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

  // const shape = new Shape();
  // 추상클래스는 new 키워드를 사용해서 객체를 만들 수 없다.
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
  // implements

  interface Movable {
    move(): void;
  }

  interface Stopable {
    stop(): void;
  }

  class Car implements Movable, Stopable {
    move() {
      console.log('run');
    }

    stop() {
      console.log('stop');
    }
  }

  const car: Car = new Car();
  car.move();
}

{
  // 제네릭 사용 가능

  class Box<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }

    getValue() {
      return this.value;
    }
  }
  const stringBox: Box<string> = new Box<string>('abc');
  console.log(stringBox.getValue());
}
