{
  //1 인터페이스 상속과 메소드 오버라이딩
  interface Animal {
    name: string;
    speak(): string;
  }

  interface Dog extends Animal {}
  interface Cat extends Animal {}

  const cat: Cat = {
    name: "Naby",
    speak() {
      return "Meow!";
    },
  };
  const dog: Dog = {
    name: "Max",
    speak() {
      return "Woof!";
    },
  };
}

{
  //2 중첩된 인터페이스와 선택적 속성
  interface Employee {
    name: string;
    age: number;
    position?: string;
  }

  interface Company {
    name: string;
    location: string;
    employee: Employee;
  }
}

{
  //3 인터페이스에서 메소드 시그니처와 인덱스 시그니처 함께 사용하기
  interface Logger {
    log(message: string): void;
    history: string[];
  }

  const logger: Logger = {
    log(message) {
      this.history.push(message);
      console.log(message);
    },
    history: [],
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history); // ["App started", "User logged in"]
}

{
  //4 조건부 로직을 포함한 인터페이스
  interface Success {
    status: "success";
    data: string;
  }
  interface Error {
    status: "error";
    error: string;
  }
  type Response = Success | Error;

  const handleResponse = (res: Response): string => {
    if (res.status === "success") return `Success: ${res.data}`;
    else return `Error: ${res.error}`;
  };

  console.log(handleResponse({ status: "success", data: "hi" }));
  console.log(handleResponse({ status: "error", error: "bye" }));
}

{
  //5 중첩된 인터페이스와 제네릭을 혼합하기 (제네릭 사용하지 않음)
  interface Author {
    name: string;
    birthYear: number;
  }
  interface Book {
    title: string;
    author: Author;
    publishedYear: number;
  }
}

{
  //6  다형성을 활용한 인터페이스 정의
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
    name: "Alice",
    age: 35,
    team: ["Bob", "Charlie", "David"],
  };

  const developer: Developer = {
    name: "John",
    age: 28,
    language: "JavaScript",
  };
}

{
  //7 인덱스 시그니처와 배열을 포함한 복합 인터페이스
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

{
  //8 조건부 타입에 따른 인터페이스 필드 추가
  interface User {
    name: string;
    isAdmin: boolean;
    adminCode?: string;
  }

  function createUser(name: string, isAdmin: boolean): User {
    const user: User = { name, isAdmin };
    if (isAdmin) user.adminCode = "admin123";
    return user;
  }

  const admin = createUser("Alice", true);
  const user = createUser("Bob", false);

  console.log(admin); // { name: "Alice", isAdmin: true, adminCode: "admin123" }
  console.log(user); // { name: "Bob", isAdmin: false }
}

{
  //9 인터페이스 상속을 이용한 다형성 적용

  // 인터페이스를 작성하세요
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
    radius: 3,
    area() {
      return Math.pow(this.radius, 2) * Math.PI;
    },
  };

  const rectangle: Rectangle = {
    width: 5,
    height: 5,
    area() {
      return this.width * this.height;
    },
  };

  console.log(circle.area());
  console.log(rectangle.area());
}

{
  //10 다중 인터페이스 상속
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
    brand: "tesla",
    model: "S",
    batteryLife: 10,
    charge() {
      console.log("Charging the car...");
    },
  };
  tesla.charge(); // "Charging the car..."
}
