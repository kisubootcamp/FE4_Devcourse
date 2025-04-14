{
  // 타입스크립트에서의 클래스
  // 변수(속성)의 타입도 지정해줘야 한다는 차이점이 있음

  // 타입스크립트에서의 클래스와 자바스크립트에서의 클래스의 차이점

  // 1. 타입 선언 -> 변수의 타입을 지정해야 함
  // 2. 접근 제어자 -> 속성이나 메서드에 대한 접근을 제한함 (public, protected, private, #)
  // public: 자유롭게 누구나 접근 가능
  // protected: 상속하고 있는 다른 클래스에서는 접근 가능
  // private: 외부에서의 접근을 허용하고 싶지 않은 속성이나 메서드 (자기 클래스에서만 접근 가능)
  // #(ES2022)은 자바스크립트 클래스에도 있음

  // 3. readonly라는 키워드 사용 가능
  // 4. 추상 클래스 제공 -> 클래스의 구조(자식 클래스에서 구현해야 하는 내용)를 추상적으로 미리 정의해놓은 클래스
  // 5. implements, 타입 별칭이나 인터페이스
  // 6. 제네릭 사용 가능
  class Person {
    readonly name: string; // 기본값은 public
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // 기본값은 public
    protected greet() {
      console.log(`${this.name}~!! ${this.age}`);
    }
  }
  const person = new Person("bings", 26);
  // person.greet(); // 에러
  console.log(person);
  console.log(person.name);
  // console.log(person.age); // 에러 : 'age' 속성은 private이며 'Person' 클래스 내에서만 액세스할 수 있습니다.

  class Person2 {
    constructor(public readonly name: string, public age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`${this.name}~!! ${this.age}`);
    }
  }

  class Person3 {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`${this.name}~!! ${this.age}`);
    }
  }
  const person3 = new Person3("bings", 26);
  console.log(person3); // 식별자를 private으로 바꿔도 객체의 속성으로 포함은 되기 때문에 출력하면 보임. BUT, 사용은 못함.

  // 그래서 나온 게 #
  class Person4 {
    #name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.#name = name;
      this.#age = age;
    }

    // 메서드는 어차피 밖으로 드러나지 않기 때문에 private을 쓰면 됨.
    greet() {
      console.log(`${this.#name}~!! ${this.#age}`);
    }
  }
  const person4 = new Person4("bings", 26);
  console.log(person4); // 진정한 의미의 private인 # -> 속성이 밖으로 드러나지 않음.

  class Person5 {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`${this.name}~!! ${this.age}`);
    }
  }
  const person5 = new Person5("bings", 26);
  console.log(person5);
  // person5.name = "yubin"; // 에러 -> name에 readonly가 붙여져있기 때문.
  console.log(person5.name);
}

{
  // abstract가 붙은 클래스(추상 클래스)는 new를 사용하여 인스턴스를 만들 수 없음.
  abstract class Shape {}
  // const shape = new Shape(); // 에러

  abstract class Shape2 {
    // 추상 클래스 내부의 메서드에도 abstract를 붙여줘야 함 !
    abstract area(): number;
  }
  // 추상 클래스에 있는 건 최소한으로 구현해야 함 !!!
  class Circle extends Shape2 {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    // 따라서 area 함수를 구현해야 에러가 나지 않음 !
    area() {
      return 10;
    }
  }

  abstract class Shape3 {
    abstract radius: number;
    abstract area(): number;
  }
  class Circle2 extends Shape3 {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    area() {
      return Math.PI * this.radius;
    }
  }
  // 더 깔끔함
  class Circle3 extends Shape3 {
    constructor(public radius: number) {
      super();
    }
    area() {
      return Math.PI * this.radius;
    }
  }
}

{
  interface Movable {
    move(): void;
  }
  interface Stopable {
    stop(): void;
  }
  type CarType = Movable & Stopable;
  // 이것도 가능
  class Car0 implements CarType {
    move() {
      console.log("run run!");
    }
    stop() {
      console.log("stop!");
    }
  }
  // extends는 클래스, 추상 클래스 상속
  // implements는 타입 별칭, 인터페이스 상속
  class Car implements Movable, Stopable {
    move() {
      console.log("run run!");
    }
    stop() {
      console.log("stop!");
    }
  }
  const car: Car = new Car();
  car.move();

  // 추상 클래스는 하나밖에 상속할 수 없음
  // 타입 별칭이나 인터페이스는 여러 개 상속할 수 있음
  // extends보다 implements를 실무에서 훨씬 많이 씀 !!!
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
  // 정석적인 방식
  const stringBox: Box<string> = new Box<string>("abc");
  console.log(stringBox.getValue()); // abc

  // 실무에서 사용하는 방식 (타입 추론을 이용)
  const numberBox = new Box(123);
  console.log(numberBox.getValue()); // 123
}
