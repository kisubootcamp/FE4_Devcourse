// TS 인터페이스 연습문제+

/**
 *   1. 인터페이스 상속과 메소드 오버라이딩

  문제:
  Animal이라는 기본 인터페이스를 정의하고, 이를 상속받는 Dog와 Cat 인터페이스를 만드세요.
  - Animal 인터페이스는 name과 speak() 메소드를 가지고 있습니다.
  - Dog는 speak() 메소드에서 "Woof!"를 반환하고,
  - Cat은 "Meow!"를 반환합니다.
 */
{
  interface Animal {
    name: string;
    speak(): string;
  }

  interface Dog extends Animal {}
  interface Cat extends Animal {}

  const dog: Dog = {
    name: "Buddy",
    speak() {
      return "Woof!";
    },
  };

  const cat: Cat = {
    name: "Kitty",
    speak() {
      return "Meow!";
    },
  };

  console.log(dog.speak());
  console.log(cat.speak());
}

/**
 *  2. 중첩된 인터페이스와 선택적 속성

  문제:
  Company라는 인터페이스를 정의하고, 이 인터페이스 내에 Employee라는 중첩된 인터페이스를 포함시켜 보세요.
  - Company는 name, location을 포함하고,
  - Employee는 name, age, position을 포함하며, position은 선택적 속성입니다.
  - 속성 값 및 속성 값 타입은 자율입니다.
 */
{
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

/**
 *  3. 인터페이스에서 메소드 시그니처와 인덱스 시그니처 함께 사용하기

  문제:
  Logger라는 인터페이스를 정의하여, log 메소드를 통해 문자열을 로그로 출력하고, history 속성을 통해 로그를 배열로 관리할 수 있는 구조로 만드세요.
  - log 메소드는 message: string을 인자로 받아 void를 반환합니다.
  - history는 로그 메시지들이 담긴 string[] 배열입니다.
 */
{
  interface Logger {
    log(message: string): void;
    history: string[];
  }

  const logger: Logger = {
    history: [],
    log(message: string) {
      this.history.push(message);
      console.log(message);
    },
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history); // ["App started", "User logged in"]
}

/**
 *  4. 조건부 로직을 포함한 인터페이스

  문제:
  Response라는 타입을 정의하고, status에 따라 다른 필드를 포함하는 두 가지 인터페이스 타입을 구현하세요.
  - status가 "success"일 경우 data(string)를 포함하고,
  - status가 "error"일 경우 error(string)를 포함합니다.
  handleResponse 함수를 정의하고, 매개변수로 Response타입을 받도록 하세요. 
  - 매개변수의 속성 중 status가 ‘success’일 경우 “Success: ${data} “를 반환합니다  (${data} 는 data 속성을 의미합니다)
  - 매개 변수의 속성 중 status가 ‘error’일 경우  ‘Error: ${error}’를 반환합니다. (${error}는 error 속성을 의미합니다.)
  - 힌트: 타입 별칭도 함께 사용하세요.
 */
{
  interface Success {
    status: "success";
    data: string;
  }

  interface Error {
    status: "error";
    error: string;
  }

  type Response = Success | Error;

  function handleResponse(res: Response) {
    if (res.status === "success") {
      return `Success: ${res.data}`;
    } else {
      return `Error: ${res.error}`;
    }
  }

  const res1: Response = {
    status: "success",
    data: "Data loaded successfully.",
  };
  const res2: Response = { status: "error", error: "Failed to load data." };

  console.log(handleResponse(res1));
  console.log(handleResponse(res2));
}

/**
 *  5. 중첩된 인터페이스와 제네릭을 혼합하기 (제네릭 사용하지 않음)

  문제:
  Book이라는 인터페이스 내에 Author라는 중첩 인터페이스를 정의하세요. Author는 name과 birthYear를 포함하고, Book은 title, author 및 publishedYear를 포함해야 합니다.
  - name: string
  - title: string
  - publishedYear: number
  - birthYear: number
 */
{
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

/**
 *  6. 다형성을 활용한 인터페이스 정의

  문제:
  Employee라는 기본 인터페이스를 정의하고, Manager와 Developer는 Employee를 상속받아 각각 team과 language라는 속성을 추가하세요.
  - Manager는 team 속성을,
  - Developer는 language 속성을 추가합니다.
  - team 속성은 문자열 배열입니다. (ex. [’Bob’, ‘Charlie’, ‘David’]
  - language 속성은 문자열입니다. (ex. ‘javascript’, ‘react’)
  최종적으로 아래의 내용을 만족하는 객체 데이터를 정의해주면 됩니다.
  - Manager 인터페이스를 사용한 객체를 하나 작성해주세요.
  - Developer 인터페이스를 사용한 객체를 하나 작성해주세요.
 */
{
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

/**
 *  7. 인덱스 시그니처와 배열을 포함한 복합 인터페이스

  문제:
  Database라는 인터페이스를 정의하세요. 이때 인덱스 시그니처로 인터페이스 타입을 작성합니다.
 */
{
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

/**
 *  8. 조건부 타입에 따른 인터페이스 필드 추가

  문제:
  User라는 인터페이스가 있고, 사용자가 admin일 경우 adminCode라는 추가적인 속성을 가질 수 있도록 하세요.
  - User 인터페이스의 속성은 name(string), isAdmin(boolean), adminCode(string) 입니다.
  - isAdmin이 true일 때만 adminCode를 추가해야 합니다.
 */
{
  interface User {
    name: string;
    isAdmin: boolean;
    adminCode?: string;
  }

  function createUser(name: string, isAdmin: boolean): User {
    const user: User = { name, isAdmin };

    if (isAdmin) {
      user.adminCode = "admin123";
    }

    return user;
  }

  const admin = createUser("Alice", true);
  const user = createUser("Bob", false);

  console.log(admin); // { name: "Alice", isAdmin: true, adminCode: "admin123" }
  console.log(user); // { name: "Bob", isAdmin: false }
}

/**
 *  9. 인터페이스 상속을 이용한 다형성 적용

  문제:
  Shape라는 인터페이스를 정의하고, 이를 상속받은 Circle과 Rectangle 인터페이스를 작성하세요.
  - Circle은 radius(number)를 포함하고,
  - Rectangle은 width(number)와 height(number)를 포함합니다.
  두 인터페이스는 모두 area() 메소드를 정의하여 면적을 계산합니다.
  - 원의 면적은 반지름 * 반지름 * 3.14
  - 사각형 면적은 가로 * 세로
  두 인터페이스를 사용한 객체를 정의합니다.
 */
{
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
    area() {
      return this.radius ** 2 * 3.14;
    },
  };

  const rectangle: Rectangle = {
    width: 4,
    height: 6,
    area() {
      return this.width * this.height;
    },
  };

  console.log(circle.area());
  console.log(rectangle.area());
}

/**
 *  10. 다중 인터페이스 상속

  문제:
  Vehicle과 Electric라는 두 인터페이스를 정의하고, 이를 상속받은 ElectricCar 인터페이스를 만들세요.
  - Vehicle은 brand(string)와 model(string)을 포함하고,
  - Electric은 batteryLife(number)를 포함합니다.
  - ElectricCar는 두 인터페이스를 상속받아 charge() 메소드를 추가합니다.
 */
{
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
    model: "Model 3",
    batteryLife: 400,
    charge() {
      console.log("Charging the car...");
    },
  };

  tesla.charge(); // "Charging the car..."
}
