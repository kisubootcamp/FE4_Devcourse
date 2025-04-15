{
  // 살짝 복습
  // enum 은 interface처럼 선언 병합이 된다는 특징이 있다.
  // 타입 가드 : 정적인 상태에서 검사하는게 아님
  // ㄴ (if문처럼) 동적인 상태로 보내서 검사를 하게 하는 원리
  // 타입 단언 : 아얘 타입을 알려주는거라 정적

  // ✅ 제네릭
  // 타입을 고정하지 않고, 사용하는 시점에 타입을 넘겨받는 타입 변수 문법
  // 타입을 변수처럼 사용 → 재사용성 증가, 유연한 코드 작성 가능
  // 사용 대상: 함수, 인터페이스, 타입 별칭, 클래스

  // 제네릭 함수
  // 함수는 매개변수 앞에 < > 사용
  // 제네릭의 함수에서 <k,v> 순서가 중요하진 않음. 중요한건 매개변수 순서
  // 어떤걸 쓰겠다는 의미
  function identity<T>(value: T): T {
    return value;
  }
  console.log(identity(42)); // 42
  console.log(identity("hello")); // hello

  const firstElement = (elements: number[] | string[]) => elements[0];
  firstElement([1, 2, 3]); // 1
  firstElement(["a", "b", "c"]); // 'a'
  const firstElement2 = <T>(elements: T[]): T => {
    return elements[0];
  };
  firstElement2([1, 2, 3]); // 1
  firstElement2(["a", "b", "c"]); // 'a'

  // 타입별칭, 인터페이스는 식별자 앞에 < >
  // 함수 시그니처를 타입으로 저장
  // 타입 추론 안 됨 => 직접 타입 지정 필요
  // 순서 신경써서 해야함

  // 제네릭. 타입 별칭에서 사용
  // 타입을 변수에 저장한 것에 불과함
  type MyFunc = <T>(element: T[]) => T;
  const getFirst: MyFunc = (element) => element[0];

  // 제네릭. 인터페이스1
  interface MyFunc1<T> {
    (element: T[]): T;
  }
  const getFirst1: MyFunc1<string> = (element) => element[0];

  // 제네릭. 인터페이스2
  interface MyFunc2 {
    <T>(element: T[]): T;
  }
  const getFirst2: MyFunc2 = (element) => element[0];

  // 제네릭 타입 제약
  function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
  }

  logLength("Hello"); // 5
  logLength([1, 2, 3]); // 3
  // logLength(123); // 오류: number는 length 프로퍼티가 없음

  interface IResponse<T> {
    status: number;
    data: T;
  }

  // 예시1 메서드 제약
  function toUppercase<T extends { toUpperCase: () => T }>(value: T): T {
    return value.toUpperCase();
  }

  toUppercase<string>("abc");
  // toUppercase<number>(123); // error, toUppercase()가 없음

  // 제네릭 기본 타입 설정(기본값)
  // 제네릭 타입 넘기지 않으면 string 으로 처리됨
  function identity1<T = string>(value?: T): T {
    return value!;
  }

  // keyof : 객체 속성 제한
  // 객테 타입의 key 들만 모은 유니온 타입을 반환
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  // 유틸리티 타입과 함께 사용
  type User = { name: string; age: number };
  type PartialUser = Partial<User>; // 모든 속성 optional
  type PickName = Pick<User, "name">; // name 속성만 선택
  type UserMap = Record<"user1" | "user2", User>; // 키에 따른 User 매핑

  // 제네릭 타입 2개이상 선언할때
  // 1. <T, U> -> 2개(), 3개<T, U, K>
  function pair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
  }
  const result = pair<number, string>(1, "one"); // [1, "one"]

  // 제네릭 변수 네이밍 관례
  // T: Type -> 일반적인 타입(가장 흔하게 사용)
  // U: Another Type -> 두 번째 타입
  // K: Key -> 객체 타입의 키
  // V: Value -> 객체 타입의 값
  // E: Element -> 주로 배열 요소의 타입
  // R: Return Type -> 반환 값의 타입 (함수에서 사용)
}

{
  // ✅ 클래스
  // ES6에서 추가된 JS문법
  // class 키워드로 정의

  // 1. 타입선언 - 변수에 타입을 지정해야 한다
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  const car = new Car(100);
  console.log(car.speed); // 100

  // 2. 타입스크립트 클래스는 접근 제어자(public, private, protected)를 제공
  // - public : 기본값으로 어디에서든 접근 가능
  // - private: 클래스 내부에서만 접근
  // - protected: 클래스와 그 클래스의 상속 클래스에서만 접근

  // 2-1) pulic : 어디에서든 접근 가능
  class Car1 {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  class Benz extends Car1 {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
  }
  const benz = new Benz(100, "Benz");
  console.log(benz.speed); // 100

  // 2-2) private는 클래스 내부만 접근 가능
  class Car2 {
    private speed: number;

    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class Benz2 extends Car2 {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }

    getSpeed() {
      // return this.speed; // 에러 발생
    }
  }

  const car2 = new Car2(100);
  // console.log(car.speed); // 에러 발생

  // 2-3) protected는 클래스와 그 클래스의 상속 클래스에서만 접근 가능
  class Car3 {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }
  class Benz3 extends Car3 {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    getSpeed() {
      return this.speed;
    }
  }
  const benz3 = new Benz3(100, "Benz");
  // console.log(benz3.speed); // 에러 발생
  console.log(benz3.getSpeed()); // 100

  // 3. readonly : 외부에서 속성값 변경x
  // 4. 추상클래스 -> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스 (abstract)
  abstract class CarAabstract {
    abstract name: string;
    abstract speed: number;
    abstract color: string;

    abstract maxSpeed(): number;
    start(): string {
      return `Super Class`;
    }
  }
  class Car4 extends CarAabstract {
    name: string;
    speed: number;
    color: string;
    constructor(name: string, speed: number, color: string) {
      super();
      this.name = name;
      this.speed = speed;
      this.color = color;
    }
    maxSpeed(): number {
      return 300;
    }
  }
  const car4 = new Car4("BMW", 200, "Black");
  console.log(car4.name); // BMW
  console.log(car4.speed); // 200
  console.log(car4.color); // Black
  console.log(car4.start()); // Super Class
  console.log(car4.maxSpeed()); // 300

  // 5. implements, 타입별칭이나 인터페이스
  // 인터페이스도 추상 메서드와 비슷하게 가능
  // 대신 추상 클래스와는 다르게 강제적이지 않음
  interface Car5 {
    start(): void;
  }
  class Car5 implements Car5 {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car: ${this.speed}`;
    }
    // interface method 는 강제가 아님
    start(): string {
      return `Car Started`;
    }
  }
  class Benz5 extends Car5 {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    getSpeed(): string {
      return `Benz: ${this.speed}`;
    }
  }
  const car5 = new Car5(100);
  console.log(car5.start()); // Car Started
  const benz5 = new Benz5(100, "Benz");
  console.log(benz5.start()); // Car Started

  // 6. 제네릭
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

  // ✅ 유틸리티 타입
  // 타입스크립트에서 제공하는 기본 타입을 변형하여 새로운 타입을 만드는 도구
  // 목적 : 재사용성, 가독성 향상, 코드 간결화

  // 자주 사용되는 유틸리티 타입
  // 1. Partial<T> : 타입 T 의 모든 속성을 선택적으로 만듬
  interface User {
    name: string;
    age: number;
    gender: string;
  }

  const guest1: Partial<User> = { name: "guest1" };
  const guest2: Partial<User> = { age: 20 };

  // 2. Required<T> : 타입 T 의 모든 속성을 필수 속성으로 만듬
  type User1 = {
    name: string;
    age?: number;
    gender: string;
  };

  const adultUser: Required<User1> = {
    name: "sucoding",
    age: 20,
    gender: "male",
  };

  // 3. Readonly<T> : 타입 T의 모든 속성을 읽기 전용(readonly) 으로 만듬
  type User3 = {
    name: string;
    age?: number;
    gender: string;
  };

  const premiumUser: Readonly<User3> = {
    name: "sucoding",
    age: 20,
    gender: "male",
  };

  // premiumUser.age = 25; // 수정 불가

  // 4. Pick<T, K> : 타입 T에서 일부 속성 K만 선택하여 새로운 타입 생성
  interface User4 {
    name: string;
    age?: number;
    gender: string;
  }

  const nameObject: Pick<User4, "age"> = { age: 20 };

  // 5. Omit<T, K> : 타입 T 에서 특정 속성 K를 제외한 나머지 속성을 추출
  interface User5 {
    name: string;
    age?: number;
    gender: string;
  }

  const user: Omit<User5, "gender"> = {
    name: "sucoding",
    age: 25,
  };

  // 6. Record<K, T> : 키 K와 값 T를 가지는 객체 타입을 생성
  type Subjects = "math" | "english" | "science";

  const score: Record<Subjects, number> = {
    math: 90,
    english: 90,
    science: 70,
  };

  let obj3: Record<string, never> = {}; // 빈 객체

  // 7. Exclude<T, U> : 유니온 타입 T 에서 U에 해당하는 타입을 제거
  type MyType = "a" | "b" | "c";
  const result: Exclude<MyType, "a" | "c"> = "b";

  // 8. NonNullable<T> : 타입 T 에서 null 과 undefined를 제외하고 생성
  type MyType1 = string | number | undefined | null;
  type NonType = NonNullable<MyType>; // string | number

  // 9. ReturnType<T> : 함수 타입 T 의 반환 타입을 추출
  function getAge() {
    return { name: "sucoding" };
  }

  type AgeReturn = ReturnType<typeof getAge>;
  // → { name: string }

  type AgeFunc = typeof getAge;
  // → () => { name: string }

  // ✅ 조건부 타입
  // 타입스크립트의 타입 추론과 제어 흐름 도구 중 하나

  // 조건부 타입 기본 구조
  // T extends U ? X : Y
  // T가 U에 할당 가능하다면 X, 아니면 Y반환 (삼항연산자와 비슷하구만~)

  // 기본 조건부 타입
  type IsString<T> = T extends string ? "Yes" : "No";

  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"

  const a: A = "Yes";
  const b: B = "No";

  // 조건부 타입 + infer
  type ElementType<T> = T extends (infer U)[] ? U : T;
  // infer U : 타입을 추론하겠다는 의미
  // T 가 배열이면, 요소 타입U 를 추출
  // 아니면 원래 타입 반환

  // 예시
  type A1 = ElementType<10>; // 10 (그대로 반환)
  type B1 = ElementType<[1, 2, 3]>; // number
  type C1 = ElementType<["a", "b"]>; // string
  type D1 = ElementType<[true, false]>; // boolean
}
