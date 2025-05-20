{
  // 생성자 함수 class 에서 타입 지정
  // 1. 타입선언 - 변수에 타입 지정해야 함
  // 2. 접근 제어자 - 속성이나 메서드에 대한 접근을 제한하는 것, public, protected, private, #(ES2022)
  //3. readonly
  //4. 추상클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
  //5. implements , 인터페이스나 타입별칭
  // 6. typescript 클래스는 제네릭을 사용할 수 있음
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, ${this.name}${this.age}`);
    }
  }
  const person = new Person("sucoding", 20);
  console.log(person);
  person.greet();

  {
    //public 언제 어디서든 속성에 접근할 수 있음
    class Person {
      name: string; //(기본적으로 public)
      age: number;
      constructor(name: string, age: number) {
        // 매개변수에 public 쓸 수 있음
        this.name = name;
        this.age = age;
      }
      greet() {
        console.log(`Hello, ${this.name}${this.age}`);
      }
    }
    const person = new Person("sucoding", 20);
    console.log(person); // greet()은 콘솔에 나오지 않음.
  }

  // greet() 설명 JS code
  {
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
    console.log(person2); //속성은 보이고 메서드는 보이지 않음
  }

  {
    //private 오직 Person 클래스에서만 접근할 수 있음, 상속된 상위 클래스에서도 불가
    // 외부에서 접근을 허용하고 싶지 않은 중요한 속성이나 메서드에 사용 NOTE
    class Person {
      name: string;
      private age: number;
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
      private greet() {
        console.log(`Hello, ${this.name}${this.age}`);
      }
    }
    const person = new Person("sucoding", 20);
    console.log(person);
    person.greet(); // private 을 사용하여 typeError 발생
  }

  {
    //protected :
    class Person {
      name: string;
      protected age: number;
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
      greet() {
        console.log(`Hello, ${this.name}${this.age}`);
      }
    }
    const person = new Person("sucoding", 20);
    console.log(person.age);
    person.greet();
  }

  {
    // # : 진정한 의미의 private
    // 메서드 앞에 # 은 다른 의미 class 안에 메서드는 어차피 외부에서 드러나지 않아서 안써도됨(?)CHECK
    class Person {
      #name: string;
      #age: number;
      constructor(name: string, age: number) {
        this.#name = name;
        this.#age = age;
      }
      greet() {
        console.log(`Hello, ${this.#name}${this.#age}`);
      }
    }
    const person = new Person("sucoding", 20);
    console.log(person); // {}   빈객체 반환
  }

  {
    class Person {
      name: string;
      age: number;
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
      greet() {
        console.log(`Hello, ${this.name}${this.age}`);
      }
    }
    const person = new Person("sucoding", 20);
    person.name = "John";
    console.log(person.name); // John
  }

  {
    //readonly
    class Person {
      readonly name: string; //CHECK
      age: number;
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
      greet() {
        console.log(`Hello, ${this.name}${this.age}`);
      }
    }
    const person = new Person("sucoding", 20);
    person.name = "John"; // 변경불가
  }
  {
    // 추상클래스는 new 라는 키워드를 사용해서 직접적으로 객체를 생성할 수 없다.
    // 클래스에 대한 모양을 추상적으로 만들때 사용
    // 추상클래스는 JS 에는 없는 내용
    // 추상클래스는 하나만 상속 , 여러개 안됨
    abstract class Shape {}
    const shape = new Shape();
  }
  {
    // 추상클래스 - 2
    // 추상클래스 Shape 이 Circle 로 상속되었을 때 Shape 클래스에 있던 속성이나 메서드는 꼭 Circle에 구현해야함
    // extends 를 사용하면 꼭 super(); 를 써야함
    abstract class Shape {
      abstract area(): number;
      abstract radius: number;
    }
    class Circle extends Shape {
      constructor(public radius: number) {
        // 추상클래스에 constructor를 받을 때
        super();
        this.radius = radius;
      }
      area() {
        return 10;
      }
    }
  }
}

{
  // implements
  // 인터페이스나 타입별칭을 접목 시킬 때 사용
  // 추상클래스는 하나밖에 상속할 수 없음
  // 타입을 잘게잘게 나눠놓으면 연결해서 구현할 수 있음
  // abstracts 보다는 implements 를 실무에서 더 많이 사용
  interface Movable {
    move(): void;
  }
  interface Stopable {
    stop(): void;
  }

  class Car implements Movable, Stopable {
    move() {
      console.log("run run");
    }
    stop() {
      console.log("stop!");
    }
  }
}

{
  // 제네릭 사용
  class Box<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }

    getValue() {
      return this.value;
    }
  }
  const stringBox: Box<string> = new Box<string>("abc"); // 이렇게 써야하지만
  console.log(stringBox.getValue());
  const numberBox = new Box(1234); // 실무에서는 타입추론하도록 둠
  console.log(stringBox.getValue());
}
