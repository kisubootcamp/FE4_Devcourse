{
  // enum은 interface처럼 선언 병합이 된다
  enum Status {
    pending,
  }

  enum Status {
    inprogress = "inprogress",
  }
  const current: Status = Status.inprogress;
}
//타입 가드는 정적인 상태에서 검사하는게 아니라, 동적인 상태에서 검사를 하게 하는 원리다
//정적 타입 : 컴파일 시점에 데이터 타입이 결정 된다. (타입스크립트)
//동적 타입 : 코드를 실행할 때, 데이터의 타입이 결정된다. (자바스크립트)
{
  //타입 단언
  const value: string | number = "as or <>";
  console.log(<string>value.toLocaleLowerCase()); //<> 사용하기
  console.log((value as string).toLocaleLowerCase()); //as 사용하기
}

{
  //제네릭
  //타입을 변수처럼 사용하는 문법
  //타입을 받아서 활용
  //명시적으로 반환값을 적지 않아도 제네릭으로 반환값을 타입 추론을 한다
  //유니온 타입도 자동으로 추론 한다
  //<T> : 타입 변수라고 부른다
  //타입이 다른 매개변수 두개가 지정 되면 타입변수를 두개 쓴다
  // 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 재사용성 증가

  // function fc<T>(value1: T, value2: T):T {}
  // fc<number>(1,2)
  // fc("str","leng")//식별자 뒤에 <type>을 쓰지 않아도 추론해준다

  //함수표현식 제네릭
  const anyName = <T>(el: T): T => {
    return el;
  };
  anyName("str");
  anyName(1);
  anyName(true);
}

{
  //타입 별칭 제네릭
  //정석적인 방법
  type Fc<T> = (el: T) => T;
  const any: Fc<number> = (el) => {
    return el;
  };
  any(1);

  // 타입 별칭 제네릭
  // 타입을 변수에 저장한 것
  // 오히려 실무에서 많이 사용 된다
  type MyFc = <T>(el: T) => T;
  const myFc: MyFc = (el) => {
    return el;
  };
}

{
  //인터페이스 제네릭
  //정석적인 방법
  interface sum<T> {
    (el: T): T;
  }
  //이 또한 타입을 변수에 저장한 것
  interface add {
    <T>(el: T): T;
  }
}

{
  // 타입 변수 <T>
  // T : Type : 일반적인 타입( 가장 흔하게 사용 )
  // U : another : 두번째 타입
  // K : key : 객체 타입의 키
  // V : value : 갹체 타입의 값
  // E : element : 주로 배열요소의 타입
  // R : return Type : 반환 값의 타입(함수에서 사용)
}

{
  {
    // 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 재사용성이 증가
    // 1. <T, U> -> 2개(), 3개<T, U, K>
    // T: Type -> 일반적인 타입(가장 흔하게 사용)
    function returnValue<T>(value: T): T {
      return value;
    }
    const r1 = returnValue(1);
    const r2 = returnValue([1, 2]);

    // U: Another Type -> 두 번째 타입
    function returnTuple<T, U>(a: T, b: U): [T, U] {
      return [a, b];
    }
    function returnTuple2(
      a: number | number[] | boolean,
      b: number | object
    ): [number | number[] | boolean, number | object] {
      return [a, b];
    }
    const r3 = returnTuple2(1, 2);
    const r4 = returnTuple2([1, 2, 3], { name: "sucoding" });
    const r5 = returnTuple2(true, { name: "sucoding" });

    // K: Key -> 객체 타입의 키
    // V: Value -> 객체 타입의 값
    // 제네릭에 타입 제약 조건
    function getValue<V, K extends keyof V>(obj: V, key: K): V[K] {
      return obj[key];
    }
    const name = getValue({ name: "kim", age: 20 }, "name");
    const gender = getValue({ gender: "male" }, "gender");

    // E: Element -> 주로 배열 요소의 타입
    function firstElement<E>(element: E[]): E {
      return element[0];
    }
    firstElement([1, 2, 3]);
    firstElement(["a", "a"]);
    // R: Return Type -> 반환 값의 타입 (함수에서 사용)
  }
}

{
  {
    // 제네릭 타입 제약 조건
    // extends
    function getLength<T extends { length: number }>(value: T): number {
      return value.length;
    }

    getLength([1, 2]); // ok
    getLength("abc"); // ok , 래퍼 객체
    // getLength(10); // not ok
  }

  {
    // 6. 키 선택 타입 별칭
    type Person = {
      name: string;
      age: number;
      gender: string;
    };

    type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
    const key: PersonOfKeys = "gender";

    const car = {
      speed: 100,
    };

    type CarOfKeys = typeof car;
  }

  {
    function returnTuple<T, U>(a: U, b: T): [U, T] {
      return [a, b];
    }
    const r1 = returnTuple(1, 2); // [1, 2] -> [number, number]
    const r2 = returnTuple(1, "a"); // [1, 'a'] -> [number, string]
  }
}

{
  // 인터페이스
  interface Car {
    name: string;
    options:
      | {
          color: string;
        }
      | {
          wheels: number;
        };
  }

  const car1: Car = {
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}
{
  // 인터페이스
  interface Car<T> {
    name: string;
    options: T;
  }

  const car1: Car<{ color: string }> = {
    name: "bmw",
    options: {
      color: "red",
    },
  };

  const car2: Car<{ wheels: number }> = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}

{
  // 1. 타입선언 - 변수에 타입을 지정해야 한다
  // 2. 접근 제어자 - 속성이나, 메서드에 대한 접근을 제한하는 것, public(전체 접근), protected(상속 접근), private(자신만 접근), #(ES2022)(은닉화, 접근 불가)

  // 3. readonly
  // 4. 추상클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
  // 5. implements, 타입별칭이나 인터페이스
  // 6. 제네릭
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
  const person = new Person("sucoding", 20);
  console.log(person.name);
  console.log(person.age);
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

{
  class Employee {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    getSalary() {
      console.log("Salary!" + this.name);
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

  const manager = new Manager("Mike", "admin");
  manager.getSalary();
  manager.getManager();
}

{
  //유틸리티 타입
  //어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
  //여러개의 유틸리티 타입을 의미만 맞는다면 섞어쓸 수 있다
  //Partial<T> : 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
  interface User {
    name: string;
    age: number;
  }
  //Partial은 모든 속성이 옵셔널 프로퍼티(속성명?)가 된다
  const guest: Partial<User> = {
    name: "junho",
  };
}

{
  //Required<T>
  //주어진 타입 T 모든 필수 속성으로 만드는 것
  //모든 옵셔널 프로퍼티를 필수 속성으로 만든다
  type User = {
    name: string;
    age?: number;
    gender?: string;
  };

  const adultUser: Required<User> = {
    name: "pari",
    age: 5,
    gender: "male",
  };
}

{
  //Readonly
  //주어진 모든 속성을 읽기 전용으로 만들어준다
  type User = {
    name: string;
    age?: number;
    gender?: string;
  };

  const premiumUser: Readonly<User> = {
    name: "jung",
    age: 30,
    gender: "female",
  };
}

{
  //Pick<T, "속성명">
  //주어진 타입 T에서 선택한 속성만 추출하여 새로운 타입
  interface User {
    name: string;
    age?: number;
    gender?: string;
  }
  const nameOnly: Pick<User, "name" | "gender"> = {
    name: "hoho",
  };
}
{
  // Omit<T,K>
  //주어진 타입 T에서 특정 속성 K를 *제외한 나머지 속성만 추출*
  interface User {
    name: string;
    age: number;
    gender: string;
  }
  const nameOnly: Omit<User, "name"> = {
    age: 30,
    gender: "hoho",
  };
}
{
  //Record
  //주어진 키K와 값 T의 타입을 가지는 객체 타입을 생성 할 때 쓰는 것

  //*빈 객체*를 지정 해주는 방법
  let obj: Record<string, never> = {};

  let strNum: Record<string, number> = {
    str: 123,
    score: 500,
  };
}
{
  // Exclude
  //유니언 타입에서 속성을 제거할 때 사용하는 것
  type Type = "a" | "b" | "c";
  const result: Exclude<Type, "b" | "c"> = "a";
}
{
  //NonNullable<T>
  //주어진 타입에서 null과 undefined 타입을 제외하고 생성
}
{
  //ReturnType<T>
  //주어진 함수 타입 T의 반환 타입을 추출
  type Age = ReturnType<() => number>;
  type AgeFc = typeof getAge;
  //함수 자체를 넘길 수 없다. 이는 마치 type에 "ABCD" 이런 형식으로 넘기는 것과 다를게 없다
  //typeof를 통해 type 형식으로 넘겨야한다
  function getAge() {
    return { name: "junho" };
  }
}

//조건부 타입
{
  // T extends U ? X : Y
  type IsString<T> = T extends string ? "Yes" : "No";

  type Str = IsString<string>; //yes
  type Num = IsString<number>; //no

  const str: Str = "Yes";
  const num: Num = "No";
}
{
  //조건부 + infer
  //조건부에만 사용 가능
  type Type<T> = T extends (infer U)[] ? U : T;
  type A = Type<10>;
  type B = Type<[1, 2, 3]>;
  type C = Type<["a", "b", "c"]>;
  type D = Type<[true, false]>;
}
{
  //infer을 활용한 조건부 타입 활용하기
  type Type<T extends (...arg: any) => any> = T extends (...arg: any) => infer U
    ? U
    : any;
  type AgeFc = Type<typeof getAge>;
  //함수 자체를 넘길 수 없다. 이는 마치 type에 "ABCD" 이런 형식으로 넘기는 것과 다를게 없다
  //typeof를 통해 type 형식으로 넘겨야한다
  function getAge() {
    return { name: "junho" };
  }
}
