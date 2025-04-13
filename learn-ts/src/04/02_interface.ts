// interface 연습문제+

{
  // 1. 인터페이스상속과 메소드 오버라이딩
  interface Animal {
    name: string;
    speak(): string;
  }

  interface Dog extends Animal {
    speak(): string;
  }

  interface Cat extends Animal {
    speak(): string;
  }

  const dog: Dog = {
    name: "뽀삐",
    speak: () => "Woof!",
  };

  const cat: Cat = {
    name: "나비",
    speak: () => "Meow!",
  };

  console.log(dog.speak()); // "Woof!"
  console.log(cat.speak()); // "Meow!"
}

console.log("-------------------------------------");

{
  // 2. 중첩된 인터페이스와 선택적 속성
  interface Company {
    name: string;
    location: string;
    employees: Employee[];
  }

  interface Employee {
    name: string;
    age: string;
    position?: string;
  }

  const company: Company = {
    name: "(주)그렙",
    location: "지구",
    employees: [
      {
        name: "홍길동",
        age: "20",
        position: "주임",
      },
      {
        name: "김철수",
        age: "30",
      },
    ],
  };

  console.log(company);
}

console.log("-------------------------------------");

{
  // 3. 인터페이스에서 메소드 시그니처와 인덱스 시그니처 함께 사용하기
  interface Logger {
    log(message: string): void;
    history: string[];
  }

  const logger: Logger = {
    history: [],
    log: (message) => {
      console.log(message);
      logger.history.push(message);
    },
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history); // ["App started", "User logged in"]
}

console.log("-------------------------------------");

{
  // 4. 조건부 로직을 포함한 인터페이스
  interface SuccessResponse {
    state: "success";
    data: string;
  }

  interface ErrorResponse {
    state: "error";
    error: string;
  }

  type Response = SuccessResponse | ErrorResponse;

  const successResponse = (response: Response): string => {
    if (response.state === "success") return `Success: ${response.data}`;
    else return `Error: ${response.error}`;
  };

  console.log(successResponse({ state: "success", data: "data" }));
  console.log(successResponse({ state: "error", error: "error" }));
}

{
  interface SuccessResponse<T> {
    state: "success";
    data: T;
  }

  interface ErrorResponse<E> {
    state: "error";
    error: E;
  }

  type Response<T, E> = SuccessResponse<T> | ErrorResponse<E>;

  const successResponse = <T, E>(response: Response<T, E>): string => {
    if (response.state === "success") return `Success: ${response.data}`;
    else return `Error: ${response.error}`;
  };

  console.log(successResponse({ state: "success", data: "data" }));
  console.log(successResponse({ state: "error", error: "error" }));
}

console.log("-------------------------------------");

{
  // 5. 중첩된 인터페이스와 제네릭을 혼합하기 (제네릭 사용하지 않음)
  interface Book {
    title: string;
    author: Author;
    publishedYear: number;
  }

  interface Author {
    name: string;
    birthYear: number;
  }

  const book: Book = {
    title: "코딩 자율학습 HTML + CSS + JavaScript",
    author: {
      name: "김기수",
      birthYear: 1990,
    },
    publishedYear: 2023,
  };

  console.log(book);
}

console.log("-------------------------------------");

{
  // 6. 다형성을 활용한 인터페이스 정의
  interface Employee {
    name: string;
    age: number;
  }

  interface Manager extends Employee {
    team: string[];
  }
  interface Developer extends Employee {
    language: string;
  }

  const manager: Manager = {
    name: "홍길동",
    age: 30,
    team: ["홍길동", "김철수", "오쌤"],
  };

  const developer: Developer = {
    name: "김철수",
    age: 25,
    language: "TypeScript",
  };

  console.log(manager);
  console.log(developer);
}

console.log("-------------------------------------");

{
  // 7. 인덱스 시그니처와 배열을 포함한 복합 인터페이스
  interface Database {
    [key: string]: string[];
  }

  const db: Database = {
    users: ["Alice", "Bob", "Charlie"],
    orders: ["order1", "order2"],
  };

  console.log(db.users); // ["Alice", "Bob", "Charlie"]
  console.log(db.orders); // ["order1", "order2"]
}

console.log("-------------------------------------");

{
  // 8. 조건부 타입에 따른 인터페이스 필드 추가
  interface User {
    name: string;
    isAdmin: boolean;
    adminCode?: string;
  }

  function createUser(name: string, isAdmin: boolean): User {
    if (isAdmin) {
      return { name, isAdmin, adminCode: "admin123" };
    } else {
      return { name, isAdmin };
    }
  }

  const admin = createUser("Alice", true);
  const user = createUser("Bob", false);

  console.log(admin); // { name: "Alice", isAdmin: true, adminCode: "admin123" }
  console.log(user); // { name: "Bob", isAdmin: false }
}

console.log("-------------------------------------");

{
  // 9. 인터페이스 상속을 이용한 다형성 적용
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

  const circle: Circle = {
    radius: 5,
    area: () => Math.PI * circle.radius ** 2,
  };

  const rectangle: Rectangle = {
    width: 10,
    height: 5,
    area: () => rectangle.width * rectangle.height,
  };

  console.log(circle.area());
  console.log(rectangle.area());
}

console.log("-------------------------------------");

{
  // 10. 다중 인터페이스 상속
  interface Vehicle {
    brand: string;
    model: string;
  }
  interface Electric {
    batteryLife: number;
  }

  interface ElectricCar extends Vehicle, Electric {
    charge(): void;
  }

  const tesla: ElectricCar = {
    brand: "Tesla",
    model: "Model S",
    batteryLife: 100,
    charge: () => console.log("Charging the car..."),
  };

  tesla.charge(); // "Charging the car..."
}
