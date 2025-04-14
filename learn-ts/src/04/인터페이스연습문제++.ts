{
  //1. 인터페이스 상속과 메소드 오버라이딩
  //문제: Animal이라는 기본 인터페이스를 정의하고, 이를 상속받는 Dog와 Cat 인터페이스를 만드세요.
  //Animal 인터페이스는 name과 speak() 메소드를 가지고 있습니다. Dog는 speak() 메소드에서 "Woof!"를 반환하고, Cat은 "Meow!"를 반환합니다.
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
    speak() {
      return "Woof!";
    },
  };

  const cat: Cat = {
    name: "미양",
    speak() {
      return "Meow!";
    },
  };
  console.log(dog.speak());
  console.log(cat.speak());
}
{
  //2. 중첩된 인터페이스와 선택적 속성
  // 문제: Company라는 인터페이스를 정의하고, 이 인터페이스 내에 Employee라는 중첩된 인터페이스를 포함시켜 보세요.
  // Company는 name, location을 포함하고, Employee는 name, age, position을 포함하며, position은 선택적 속성입니다.속성 값 및 속성 값 타입은 자율입니다.
  interface Company {
    name: string;
    location: string;
    employee: Employee;
  }

  interface Employee {
    name: string;
    age: number;
    position?: string;
  }

  const company: Company = {
    name: "Kim",
    location: "Seoul",
    employee: {
      name: "Kim",
      age: 29,
      position: "developer",
    },
  };

  console.log(company.employee.position);
}
{
  //### 3. **인터페이스에서 메소드 시그니처와 인덱스 시그니처 함께 사용하기**
  //**문제:**`Logger`라는 인터페이스를 정의하여, `log` 메소드를 통해 문자열을 로그로 출력하고, `history` 속성을 통해 로그를 배열로 관리할 수 있는 구조로 만드세요.
  //- `log` 메소드는 `message: string`을 인자로 받아 `void`를 반환합니다.- `history`는 로그 메시지들이 담긴 `string[]` 배열입니다.
  interface Logger {
    log(message: string): void;
    history: string[];
  }

  const logger: Logger = {
    history: [],
    log(message) {
      // console.log(message);
      this.history.push(message);
    },
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history);
}

// 4. **조건부 로직을 포함한 인터페이스**
//**문제:** `Response`라는 타입을 정의하고, `status`에 따라 다른 필드를 포함하는 두 가지 인터페이스 타입을 구현하세요.
//- `status`가 `"success"`일 경우 `data`(string)를 포함하고,
//- `status`가 `"error"`일 경우 `error`(string)를 포함합니다.
//`handleResponse` 함수를 정의하고, 매개변수로 `Response`타입을 받도록 하세요.
// - 매개변수의 속성 중 `status`가 `‘success’`일 경우 `“Success: ${data} “`를 반환합니다  (${data} 는 data 속성을 의미합니다)
// - 매개 변수의 속성 중 `status`가 `‘error’`일 경우  `‘Error: ${error}’`를 반환합니다. (${error}는 error 속성을 의미합니다.)
// - 힌트: 타입 별칭도 함께 사용하세요.
{
  interface Success {
    status: "success";
    data: string;
  }
  interface ErrorResponse {
    status: "error";
    data: string;
  }

  const success: Success = {
    status: "success",
    data: "성공!",
  };
  const error: ErrorResponse = {
    status: "error",
    data: "실패!",
  };

  type Response = Success | ErrorResponse;

  function handleResponse(res: Response): void {
    if (res.status === "success") {
      console.log(`Success: ${res.data}`);
    } else if (res.status === "error") {
      console.log(`Error: ${res.data}`);
    }
  }
  handleResponse(success);
  handleResponse(error);
}

{
  //5. **중첩된 인터페이스와 제네릭을 혼합하기 (제네릭 사용하지 않음)**
  //**문제:** `Book`이라는 인터페이스 내에 `Author`라는 중첩 인터페이스를 정의하세요.
  // `Author`는 `name`과 `birthYear`를 포함하고, `Book`은 `title`, `author` 및 `publishedYear`를 포함해야 합니다.
  interface Author {
    name: string;
    birthYear: number;
  }
  interface Book {
    title: string;
    author: Author;
    publishedYear: number;
  }

  const book: Book = {
    title: "채식주의자",
    author: {
      name: "한강",
      birthYear: 1970,
    },
    publishedYear: 2007,
  };

  function bookInfo(value: Book): void {
    console.log(
      `${book.title}, ${book.publishedYear}. 저자: ${book.author.name}, ${book.author.birthYear}`
    );
  }

  bookInfo(book);
}
{
  //### 6. **다형성을 활용한 인터페이스 정의**
  // **문제:** `Employee`라는 기본 인터페이스를 정의하고, `Manager`와 `Developer`는 `Employee`를 상속받아 각각 `team`과 `language`라는 속성을 추가하세요.
  // - `Manager`는 `team` 속성을, - `Developer`는 `language` 속성을 추가합니다.
  // - `team` 속성은 문자열 배열입니다. (ex. [’Bob’, ‘Charlie’, ‘David’]
  // - `language` 속성은 문자열입니다. (ex. ‘javascript’, ‘react’) 최종적으로 아래의 내용을 만족하는 객체 데이터를 정의해주면 됩니다.

  //- Manager 인터페이스를 사용한 객체를 하나 작성해주세요.
  // - Developer 인터페이스를 사용한 객체를 하나 작성해주세요.
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

  const developer: Developer = {
    name: "Joe",
    age: 28,
    language: "javascript",
  };

  const manager: Manager = {
    name: "Bomin",
    age: 30,
    team: ["Bob", "Charlie", "David"],
  };

  console.log(manager);
  console.log(developer);
}
{
  //7. **인덱스 시그니처와 배열을 포함한 복합 인터페이스**
  //**문제:** `Database`라는 인터페이스를 정의하세요. 이때 인덱스 시그니처로 인터페이스 타입을 작성합니다.
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
  //### 8. **조건부 타입에 따른 인터페이스 필드 추가**
  // **문제:** `User`라는 인터페이스가 있고, 사용자가 `admin`일 경우 `adminCode`라는 추가적인 속성을 가질 수 있도록 하세요.
  // - User 인터페이스의 속성은 `name`(string), `isAdmin`(boolean), `adminCode`(string) 입니다.
  // - `isAdmin`이 `true`일 때만 `adminCode`를 추가해야 합니다.
  interface User {
    name: string;
    isAdmin: boolean;
    adminCode?: string;
  }

  function createUser(name: string, isAdmin: boolean, adminCode?: string): User {
    if (isAdmin) {
      return {
        name,
        isAdmin,
        adminCode: "112",
      };
    } else {
      return {
        name,
        isAdmin,
      };
    }
  }

  const admin = createUser("Alice", true);
  const guest = createUser("bomin", false);
  console.log(admin);
  console.log(guest);
}
{
  //9. **인터페이스 상속을 이용한 다형성 적용**
  // **문제:** `Shape`라는 인터페이스를 정의하고, 이를 상속받은 `Circle`과 `Rectangle` 인터페이스를 작성하세요.
  //- `Circle`은 `radius`(number)를 포함하고, - `Rectangle`은 `width`(number)와 `height`(number)를 포함합니다.
  // 두 인터페이스는 모두 `area()` 메소드를 정의하여 면적을 계산합니다.
  // - 원의 면적은 반지름 * 반지름 * 3.14 - 사각형 면적은 가로 * 세로 / 두 인터페이스를 사용한 객체를 정의합니다.
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
    radius: 2,
    area() {
      return this.radius * this.radius * 3.14;
    },
  };

  const rectangle: Rectangle = {
    width: 2,
    height: 3,
    area() {
      return this.width * this.height;
    },
  };

  console.log(circle.area());
  console.log(rectangle.area());
}
{
  //10. **다중 인터페이스 상속**
  //**문제:** `Vehicle`과 `Electric`라는 두 인터페이스를 정의하고, 이를 상속받은 `ElectricCar` 인터페이스를 만들세요.
  // - `Vehicle`은 `brand`(string)와 `model`(string)을 포함하고,- `Electric`은 `batteryLife`(number)를 포함합니다.
  // - `ElectricCar`는 두 인터페이스를 상속받아 `charge()` 메소드를 추가합니다.
  interface Vehicle {
    brand: string;
    model: string;
  }
  interface Electric {
    batteryLife: number;
  }

  interface ElectricCar extends Electric, Vehicle {
    charge(): void;
  }

  const tesla: ElectricCar = {
    brand: "teala",
    model: "model Y",
    batteryLife: 100,
    charge() {
      console.log("Charging the car..");
    },
  };

  tesla.charge();
}
