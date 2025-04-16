{
  // class
  // 타입선언 : 변수에 타입을 지정해야 한다
  // 접근 제어자 : 속성이나, 메서드에 대한 접근을 제어하는것
  // public, protected, private, #
  // readonly
  // 추상 클래스
  // implements, 타입별칭 인터페이스
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      // 여기는 객체가 생성될 때 실행되는 곳 (생성자 함수 : constructor, 할당같은 거)
      this.name = name;
      this.age = age;

      //this.name이 name: string; 클래스의 속성이고
      //name 이 constructor(name: string, age: number) name 생성자의 매개변수
    }

    // greet는 메서드 -> 모든 인스턴스에서 사용할 수 있게 해야함
    greet() {
      console.log(`Hello ${this.name}, ${this.age}`);
    }
  }
  // 인스턴스는 person
  const person = new Person("jiyu", 24);
  person.greet();
  console.log(person);

  //  new를 통해 클래스 Person을 기반으로 객체를 만듦
  // 이때 constructor("jiyu", 24)가 실행됨
  // this.name = "jiyu" 실행 → 즉 person.name = "jiyu"
  // 나중에 person.greet()를 호출하면
  // this.name은 "jiyu", this.age는 24
}

{
  // public

  class Person {
    // name: string;
    // age: number;

    constructor(public name: string, public age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello ${this.name}, ${this.age}`);
    }
  }
  const person = new Person("jiyu", 24);
  person.greet();
  console.log(person);
}

{
  //private
  class Person {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello ${this.name}, ${this.age}`);
    }
  }

  const person = new Person("jiyu", 24);
  person.greet(); // 가능 (클래스 내부에 greet가 있으므로)
  //console.log(person.name); // 에러! private이라 외부에서 접근 불가
}

{
  // #
  class Person {
    #name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.#name = name;
      this.#age = age;
    }

    greet() {
      console.log(`Hello ${this.#name}, ${this.#age}`);
    }
  }

  const person = new Person("jiyu", 24);
  person.greet(); //가능
  //console.log(person.#name); // 에러! '#' private 필드는 완전히 비공개
}

{
  // protected
  class Person {
    constructor(protected name: string, protected age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello ${this.name}, ${this.age}`);
    }
  }

  class Developer extends Person {
    introduce() {
      console.log(`I'm ${this.name}, ${this.age} years old`); //가능 (Developer가 자식 클래스니까)
    }
  }

  const dev = new Developer("jiyu", 24);
  dev.introduce();
  //console.log(dev.name);  // 에러! protected는 외부 접근 불가
}

{
  // 추상 클래스
  abstract class Shape {
    abstract area(): number;
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    // 실제로 area가 number 타입을 반환하는 함수를 내부에 적어놓아야지만
    // 에러가 안남
    area() {
      return Math.PI * this.radius;
    }
  }

  // abstract이 붙어버린 class는 new를 이용해서 객체를 생성할 수 없음
  //const shape = new Shape();
}

{
  // interface의 implements 타입별칭에서도 가능
  interface Move {
    move(): void;
  }
  class Car implements Move {
    move() {
      console.log("run");
    }
  }
  const car: Car = new Car();
  car.move();
}

{
  // generic
  class Box<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }

    getValue() {
      return this.value;
    }
  }
  const sbox: Box<string> = new Box<string>("abc");
  console.log(sbox.getValue());

  const nbox = new Box(123);
  console.log(nbox.getValue());
}

{
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    getSalary() {
      console.log("salary");
    }
  }

  class Manager extends Employee {
    role: string;
    constructor(name: string, role: string) {
      super(name);
      this.role = role;
    }
    getManager() {
      console.log(`${this.name}, ${this.role}`);
    }
  }
  const employee = new Employee("jobe");
  employee.getSalary();
  const manager = new Manager("ann", "manager");
  manager.getManager();
}
