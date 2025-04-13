{
  // Q1
  interface Animal {
    name: string;
    speak(): string;
  }

  interface Dog extends Animal {
    speak(): "Woof";
  }

  interface Cat extends Animal {
    speak(): "Meow";
  }
}

{
  // Q2
  interface Employee {
    name: string;
    age: number;
    position?: string;
  }

  interface Company {
    name: string;
    location: string;
    employee: Employee[];
  }
}

{
  // Q3
  interface Logger {
    history: string[];
    log(message: string): void;
    [key: string]: any;
  }

  const logger: Logger = {
    history: [],
    log(message: string) {
      this.history.push(message);
    },
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history); // ["App started", "User logged in"]
}

{
  // Q4
  interface SuccessResponse {
    status: "success";
    data: string;
  }
  interface ErrorResponse {
    status: "error";
    error: string;
  }
  type Response = SuccessResponse | ErrorResponse;

  function handleResponse(response: Response): string {
    if (response.status === "success") return `Success: ${response.data}`;
    else return `Error: ${response.error}`;
  }

  console.log(handleResponse({ status: "success", data: "data" }));
  console.log(handleResponse({ status: "error", error: "error" }));
}

{
  // Q5
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
  // Q6
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
    name: "park",
    age: 20,
    team: ["지유", "상윤", "수지"],
  };

  const developer: Developer = {
    name: "park",
    age: 20,
    language: "JS",
  };
}

{
  // Q7
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
  // Q8
  interface User {
    name: string;
    isAdmin: boolean;
    adminCode?: string;
  }

  function createUser(name: string, isAdmin: boolean): User {
    if (isAdmin) return { name, isAdmin, adminCode: "adminCode123" };
    else return { name, isAdmin };
  }

  const admin = createUser("Alice", true);
  const user = createUser("Bob", false);

  console.log(admin); // { name: "Alice", isAdmin: true, adminCode: "admin123" }
  console.log(user); // { name: "Bob", isAdmin: false }
}

{
  // Q9
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
      return this.radius * Math.PI;
    },
  };

  const rectangle: Rectangle = {
    width: 4,
    height: 5,
    area() {
      return this.width * this.height;
    },
  };

  console.log(circle.area());
  console.log(rectangle.area());
}

{
  // Q10
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
    model: "modelY",
    batteryLife: 20,
    charge() {
      console.log(
        `Charging the car ${this.brand}, ${this.model}'s batterLife is ${this.batteryLife}`
      );
    },
  };

  tesla.charge();
}
