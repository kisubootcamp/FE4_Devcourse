{
  //1.타입선언- 변수에 타입을 지정해야한다.
  //2. 접근제어자- 속성이나, 메서드에 대한 접근을 제한하는 것, public,protected,private,#(ES2022)
  //3. readonly
  //4. 추상클래스-> 클래스의 구조를 추상적으로 미리 정의해 놓은 클래스
  //5. implements, 타입별칭이나 인터페이스
}

{
  //public(default)
  class Person {
    name: string; //기본값 : public
    age: number; //public age
    //타입스크립트에서는
    // class의 속성값 name,age에 대한 타입도 지정해야함
    //private은 자신의 클래스 내부에서만 사용 가능(외부에서 접근불가)
    //protected 는 자신의 클래스, 상속하는 클래스에서 사용가능
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, ${this.name},${this.age}`);
    } //프로토타입영역에 저장됨됨
  }
  const person = new Person("sucoding", 20);
  person.greet();
  console.log(person); //속성들 나옴 {name:'sucoding',age:20}
}
{
  //private
  class Person {
    private name: string; //기본값 : public
    private age: number; //public age
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, ${this.name},${this.age}`);
    }
  }
  const person = new Person("sucoding", 20);
  person.greet();
  console.log(person); //private 속성이여도 {name:'sucoding',age:20} 출력
  // 그냥 사용을 못할뿐 멤버 속성으로 포함되어있음
}

{
  //#
  class Person {
    #name: string; //#=private+멤버속성으로 포함x
    #age: number; //

    constructor(name: string, age: number) {
      this.#name = name;
      this.#age = age;
    }
    greet() {
      console.log(`Hello, ${this.#name},${this.#age}`);
    } //함수는 어짜피 멤버 속성이 아니므로 굳이 # 보다는 private 써도 충분
  }
  const person = new Person("sucoding", 20);
  person.greet();
  console.log(person); //속성들 나오지 않음 Person{}
}
{
  //readonly
  class Person {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, ${this.name},${this.age}`);
    }
  }
  const person = new Person("sucoding", 20);
  person.name = "John"; //에러
  console.log(person.name);
}
{
  //추상 클래스(abstract) 타입스크립트에만 존재
  abstract class Shape {
    abstract radius: number;
    abstract area(): number;
  }
  class Circle extends Shape {
    constructor(public radius: number) {
      super(); //필수 호출
    }
    area() {
      return 10;
    } //추상 클래스를 상속받아 전달받은 속성들을 모두 구현해줘야함
  }
  const shape = new Shape(); //new 사용해서 직접적으로 클래스 생성불가=>상속받아 다른 클래스에서 사용되는듯
}
{
  interface Movable {
    move(): void;
  }
  interface Stopable {
    stop(): void;
  }
  //type CarType=Movable&Stopable;도 가능

  class Car implements Movable, Stopable {
    //extends는 클래스만, 객체 상속은 implements
    //extends는 상속 1개만,implements은 여러개 가능
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
  //제네릭
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
  console.log(stringBox.getValue()); //abc

  const numberBox = new Box(123); //value에 123이 들어가므로 T:number임을 추론해줌
  console.log(numberBox.getValue());
}
