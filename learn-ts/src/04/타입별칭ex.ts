{
  //### 1. `Person` 타입 작성
  //**문제**: 사람을 나타내는 `Person` 타입을 정의하세요. 이 타입은 `name` (문자열), `age` (숫자) 속성을 가집니다.
  // 그리고 이를 사용하는 `getPersonInfo` 함수를 작성하여 `Person` 객체를 출력하세요.
  type Person = {
    name: string;
    age: number;
  };

  function getPersonInfo(person: Person): string {
    return `${person.name}, ${person.age}`;
  }

  const person = { name: "Alice", age: 30 };
  console.log(person);
  console.log(getPersonInfo(person));
}
{
  //### 2. **객체 생성**
  // **문제**: `Config` 타입을 정의하여 `host` (문자열), `port` (숫자), `ssl` (불린값)을 갖는 객체 타입입니다. `createConfig` 함수는 `Config` 타입을 반환하도록 하세요.
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  function createConfig(host: string, port: number, ssl: boolean): Config {
    return { host, port, ssl };
  }

  const config = createConfig("localhost", 8080, true);
  console.log(config);
}
{
  // ### 3. `Rectangle` 타입 작성
  // **문제**: `Rectangle` 타입을 정의하여 `width` (숫자)와 `height` (숫자) 속성을 가지게 하세요.
  //  `calculateArea` 함수를 작성하여 `Rectangle` 객체의 면적을 계산하세요.
  type Rectangle = {
    width: number;
    height: number;
  };

  function calculateArea(rec: Rectangle): number {
    return rec.width * rec.height;
  }

  const cal: Rectangle = {
    width: 5,
    height: 10,
  };

  console.log(calculateArea(cal));
}
{
  //### 4. `Student` 타입 작성
  // **문제**: `Student` 타입을 정의하여 `name` (문자열), `age` (숫자), `grades` (숫자 배열) 속성을 포함하게 하세요.
  // `calculateAverageGrade` 함수를 작성하여 평균 성적을 계산하세요.
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(value: Student): string {
    const sum = value.grades.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / value.grades.length;
    return `${value.name}, ${value.age}, 평균: ${avg}`;
  }

  const stu1: Student = {
    name: "bomin",
    age: 30,
    grades: [80, 90, 40, 55],
  };

  console.log(calculateAverageGrade(stu1));
}
{
  //5. `Response` 타입 작성
  // **문제**: `Response` 타입을 작성하여 `status` (문자열), `data` (문자열), `message` (문자열) 속성을 포함하게 하세요.
  // `createResponse` 함수를 작성하여 이 타입의 객체를 반환하세요.
  type Res = {
    status: string;
    data: string;
    message: string;
  };

  function createResponse(status: string, data: string, message: string): Res {
    return { status, data, message };
  }
  const param = createResponse("success", "John", "fetch success");
  console.log(param);
}
{
  //6. `Employee` 타입 작성
  //**문제**: `Employee` 타입을 작성하여 `id` (문자열), `name` (문자열), `position` (문자열) 속성을 가집니다. `getEmployeeInfo` 함수에서 이 정보를 반환하도록 하세요.
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  function getEmployeeInfo(value: Employee): string {
    return `id: ${value.id}, name: ${value.name}, position: ${value.position}`;
  }

  console.log(getEmployeeInfo({ id: "1", name: "james", position: "developer" }));
}
{
  //### 7. `Circle` 타입 작성
  //**문제**: `Circle` 타입을 작성하여 `radius` (숫자) 속성을 가지게 하세요. `calculateCircumference` 함수에서 원의 둘레를 계산하는 기능을 작성하세요.
  type Circle = {
    radius: number;
  };

  function calculateCircumference(radius: Circle): number {
    return radius.radius * radius.radius * 3.14;
  }

  console.log(calculateCircumference({ radius: 3 }));
}
{
  // 8. 타입 별칭  - 연습문제 -
  //**문제**: `Product` 타입을 작성하여 `name` (문자열), `price` (숫자), `inStock` (불린값) 속성을 가지게 하세요.
  // `getDiscountedPrice` 함수에서 주어진 할인을 적용한 가격을 계산하세요.
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  function getDiscountedPrice(value: Product, per: number): number {
    if (value.inStock) {
      return value.price * 0.9;
    } else {
      return value.price;
    }
  }
  console.log(getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)); //900
}

{
  //### 9. 타입 별칭  - 연습문제 -
  // **문제**: `Book` 타입을 작성하여 `title` (문자열), `author` (문자열), `publishedYear` (숫자) 속성을 포함하도록 하세요.
  //  `getBookSummary` 함수에서 책에 대한 간단한 요약을 반환하도록 하세요.
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(value: Book): string {
    return `${value.title} by ${value.author}, published in ${value.publishedYear}`;
  }

  console.log(getBookSummary({ title: "river", author: "james", publishedYear: 2020 }));
}

{
  // 10. 타입 별칭  - 연습문제 -
  // **문제**: `Transaction` 타입을 작성하여 `id` (문자열), `amount` (숫자), `timestamp` (문자열) 속성을 가지게 하세요.
  // `isValidTransaction` 함수에서 amount가 0보다 큰지 비교해서 결과를 반환하는 로직을 작성해주세요.(참/거짓 반환)
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  function isValidTransaction(value: Transaction): boolean {
    if (value.amount > 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isValidTransaction({ id: "str", amount: 300, timestamp: "250413" }));
}
