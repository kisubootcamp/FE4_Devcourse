{
  //인터페이스 연습문제
  //1
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "유진",
    age: 29,
  };

  //2
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: "현대",
    model: "아반떼",
    start() {
      console.log(`${this.brand} ${this.model} 차 출발합니다`);
    },
  };

  //3
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  //4
  interface Team {
    name: string;
    members: string[];
  }

  //5
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }

  //6
  interface Person2 {
    name: string;
    age: number;
    greet(): string;
  }

  //7
  interface Shape {
    area(): number;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  //8
  interface Person3 {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }
  type Contact = Person3 & Address;

  //9
  interface Dictionary {
    [key: string]: string;
  }

  //10
  interface Operation {
    (a: number, b: number): number;
  }
  const add: Operation = (a, b) => {
    return a + b;
  };
  const subtract: Operation = (a, b) => {
    return a - b;
  };
}

{
  //타입별칭 연습문제
  //1
  type Person = {
    name: string;
    age: number;
  };
  function getPersonInfo(person: Person): void {
    console.log(`이름: ${person.name}, 나이: ${person.age}`);
  }
  const person: Person = {
    name: "유진",
    age: 29,
  };
  getPersonInfo(person);

  //2
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };
  function createConfig(host: string, port: number, ssl: boolean): Config {
    return {
      host,
      port,
      ssl,
    };
  }
  const config = createConfig("localhost", 8080, true);
  console.log(config);

  //3
  type Rectangle = {
    width: number;
    height: number;
  };
  function calculateArea(rect: Rectangle): number {
    return rect.width * rect.height;
  }

  //4
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  function cA(s: Student): number {
    const total = s.grades.reduce((grade, grade2) => grade + grade2, 0);
    return total / s.grades.length;
  }

  //5
  type Response = {
    status: string;
    data: string;
    message: string;
  };
  function cR(status: string, data: string, message: string): Response {
    return {
      status,
      data,
      message,
    };
  }
  console.log(cR("success", "youjin", "typescript success"));

  //6
  type Employee = {
    id: string;
    name: string;
    position: string;
  };
  function gEI(e: Employee): string {
    return `${e.name} works as a ${e.position} with ID: ${e.id}`;
  }
  console.log(gEI({ id: "1", name: "uj", position: "developer" }));

  //7
  type Circle = {
    radius: number;
  };
  function cC(r: Circle): number {
    return 2 * 3.14 * r.radius;
  }
  console.log(cC({ radius: 3 }));

  //8
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };
  function dP(p: Product, n: number): number {
    return p.price * (1 - n * 0.01);
  }
  console.log(dP({ name: "bag", price: 1000, inStock: true }, 10)); // 900

  //9
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  function bS(b: Book): string {
    return `${b.title} by ${b.author}, published in ${b.publishedYear}.`;
  }
  console.log(bS({ title: "mybook", author: "uj", publishedYear: 2025 }));

  //10
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };
  function isVT(amount: Transaction): boolean {
    return amount.amount > 0;
  }
}

{
  //이넘 연습문제
  //1
}
