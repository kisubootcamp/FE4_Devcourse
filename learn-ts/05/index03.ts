{
  class Person {
    name: string;
    age: number; // 타입을 지정해 주어야 this에서 작동함.

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person2 = new Person("Lee", 20);
  console.log(person2);
}

{
  // 1. 타입선언 - 변수에 타입을 지정해야 한다.
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것, public, protected, private, #(ES2022)
  class Person {
    // readonly name: string; // default: public
    // age: number; // public age
    // 실무적으로는 이곳에서 접근 제어자를 선언한다.

    constructor(readonly name: string, private age: number) {
      // private는 외부에서 접근하지 못하게 하고싶은 중요한 속성이나 메서드에 사용한다.
      this.name = name;
      this.age = age;
    }

    public greet() {
      console.log(`Hello! ${this.name}, ${this.age}`);
    }
  }

  const person = new Person("Lee", 20); // private를 써도 person의 멤버로 들어오지만, 외부에서 사용은 불가능하다
  person.greet();
  console.log(person);
  console.log(person.age); // private는 자기 클래스 안에서만 사용이 가능하기 때문에 외부에서 접근하려고 하면 에러가 발생한다.
}

{
  // 1. 타입선언 - 변수에 타입을 지정해야 한다.
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것, public, protected, private, #(ES2022)
  // 3. readonly
  class Person {
    #name: string; // 속성 앞에 #을 붙이면 외부에 아예 드러나지 않는다. 진정한 의미의 private
    #age: number;

    constructor(name: string, age: number) {
      this.#name = name;
      this.#age = age;
    }

    private greet() {
      // greet는 외부에 드러나지 않기 때문에 private를 사용해도 무방하다
      console.log(`Hello! ${this.#name}, ${this.#age}`);
    }
  }

  const person = new Person("Lee", 20);
  // person.greet();
  console.log(person);
}

{
  // 1. 타입선언 - 변수에 타입을 지정해야 한다.
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것, public, protected, private, #(ES2022)
  // 3. readonly
  class Person {
    readonly name: string; // 외부에서 읽을 수는 있지만 쓰기가 불가능
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    private greet() {
      // greet는 외부에 드러나지 않기 때문에 private를 사용해도 무방하다
      console.log(`Hello! ${this.name}, ${this.age}`);
    }
  }

  const person = new Person("Lee", 20);
  // person.name = "John"; // 외부에서 속성을 바꿀 때 에러가 발생
  // person.greet();
  console.log(person.name);
}

{
  // 1. 타입선언 - 변수에 타입을 지정해야 한다.
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것, public, protected, private, #(ES2022)
  // 3. readonly
  // 4. 추상클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
  class Person {
    readonly name: string; // 외부에서 읽을 수는 있지만 쓰기가 불가능
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    private greet() {
      // greet는 외부에 드러나지 않기 때문에 private를 사용해도 무방하다
      console.log(`Hello! ${this.name}, ${this.age}`);
    }
  }

  const person = new Person("Lee", 20);
  // person.name = "John"; // 외부에서 속성을 바꿀 때 에러가 발생
  // person.greet();
  console.log(person.name);
}
{
  abstract class Shape {
    abstract area(): number; // Shape 내부를 모두 구현해야 함
  } // 말 그대로 추상적인 유형을 만들어 놓는 것
  // const shape = new Shape() // new 키워드를 사용해서 직접적으로 객체를 만드는 용도로 사용이 불가능하다
  class Circle extends Shape {
    // area 메서드가 number 타입을 반환하도록 코드를 짜야 에러가 발생하지 않음
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    area() {
      return 10;
    }
  }

  console.log(Circle);
}

{
  abstract class Shape {
    abstract radius: number;
    abstract area(): number; // Shape 내부를 모두 구현해야 함
  } // 말 그대로 추상적인 유형을 만들어 놓는 것
  // const shape = new Shape() // new 키워드를 사용해서 직접적으로 객체를 만드는 용도로 사용이 불가능하다
  class Circle extends Shape {
    // area 메서드가 number 타입을 반환하도록 코드를 짜야 에러가 발생하지 않음
    constructor(public radius: number) {
      // 추상 클래스의 메서드를 자식 클래스에서 모두 구현해야 함
      super();
    }
    area() {
      return Math.PI * this.radius;
    }
  } // 여러 개의 extends 사용 불가능

  console.log(Circle);
}
{
  interface Movable {
    move(): void;
  }
  interface Stopable {
    stop(): void;
  }
  type CarType = Movable & Stopable;
  class Car implements CarType {
    move() {
      console.log("run");
    }
    stop() {
      console.log("stop");
    }
  }
  const car: Car = new Car();
  car.move();
} // 여러 개의 인터페이스나 타입 별칭 사용 가능
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

  const numberBox = new Box<number>(123); // 타입 추론
  console.log(numberBox.getValue());
}

{
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    getSalary() {
      console.log("Salary!");
    }
  }

  class Manager extends Employee {
    role: string;
    constructor(name: string, role: string) {
      super(name);
      this.role = role;
    }
    getManager() {
      console.log(`${this.name}, ${this.role}`); // name이 private로 지정되면 자식요소는 name에 접근할 수 없으므로 에러가 발생한다.
      // protected는 자신을 상속한 클래스까지 사용이 가능하기 때문에 자식 클래스까지 사용이 가능하다
      // #은 접근할 수 없을 뿐만 아니라 요소의 은닉화도 해준다
    }
  }

  const employee = new Employee("John");
  const manager = new Manager("david", "admin");

  manager.getSalary();
  manager.getManager();
}

{
  // 유틸리티 타입
  // -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
  //자주 사용되는 유틸리티 타입
  // 1. Partial<T>
  // -> 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
  interface User {
    name: string;
    age: number;
  }

  const user1: User = {
    name: "Lee",
    age: 20,
  };

  const guest1: Partial<User> = {
    // 특정 상황에서 정해진 타입을 옵셔널로 사용할 때 사용한다.
    name: "guest1",
  };

  const guest2: Partial<User> = {
    age: 20,
  };
}

{
  // 2. Required<T>
  // 주어진 타입 T 모두 필수 속성으로 만드는 것

  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const normalUser: User = {
    name: "Lee",
    gender: "male",
  };

  const adultUser: Required<User> = {
    // age가 필수로 바뀐다
    name: "Lee",
    age: 20,
    gender: "male",
  };
}
{
  // 3. Readonly<T>

  type User = {
    name: string;
    age?: number;
    gender: string;
  };

  const premoumUser: Readonly<User> = {
    name: "Lee",
    age: 20,
    gender: "male",
  };
}

{
  // 의미가 맞도록 하여 여러 개의 유틸리티 타입을 섞어서 사용할 수 있다
  // 4. Pick<T, K>
  // 주어진 타입 T에서 선택한 속성만 추출하여 새로운 타입을 만든다
  interface User {
    name: string;
    age?: number;
    gender: string;
  }

  const nameObject: Pick<User, "name" | "gender"> = {
    // User에서 name 속성만 사용
    // 여러 개를 사용한다면 유니온 타입을 이요하여 사용하면 된다.
    // 선택한 속성은 써도 되고 안써도 되지만 선택한 속성 이외에는 사용할 수 없다.
    name: "Lee",
    gender: "male",
  };
}

{
  // 5. Omit<T, K>
  // 주어진 타입 T에서 특정 속성 K를 제외한 나머지 속성만 추출
  interface User {
    name: string;
    age: number;
    gender: string;
  }

  const user: Omit<User, "age" | "gender"> = {
    // age와 gender 모두 제거
    name: "Lee",
  };
}
{
  // 6. Record<K ,T>
  // 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성할 때 쓰는 것
  let obj: Record<string, never> = {}; // 빈 객체
  // 완전히 요소를 추가할 수 없음

  let obj2: {} = {};

  let obj3: object = {};

  const score: { math: number; english: number; science: number } = {
    math: 90,
    english: 90,
    science: 70,
  };
  const score2: Record<string, number> = {
    math: 90,
    english: 90,
    science: 70,
  };
} // 여기까지는 필수 암기!
{
  // 7. 객체에 존재하는 속성을 제거할 때는 Omit
  // 유니언 타입에서 속성을 제거할 때 사용하는 것은 Exclude
  type MyType = "a" | "b" | "c";
  const result: Exclude<MyType, "a" | "c"> = "b";
}
{
  // 8. NonNullable<T>
  // null과 undefined 타입을 제외하고 생성

  type MyType = string | number | undefined | null;
  type NonType = NonNullable<MyType>;
}
{
  // 9. ReturnType<T>
  // 주어진 함수 타입 T의 반환 타입을 추출
  type Age = ReturnType<typeof getAge>; // number
  type AgeFunc = typeof getAge;

  function getAge() {
    return "me";
  }
}
