{
  //   ### 1. `Person` 타입 작성
  // **문제**: 사람을 나타내는 `Person` 타입을 정의하세요.
  // 이 타입은 `name` (문자열), `age` (숫자) 속성을 가집니다.
  // 그리고 이를 사용하는 `getPersonInfo` 함수를 작성하여 `Person` 객체를 출력하세요.
  type Person = {
    name: string;
    age: number;
  };

  function getPersonInfo(person: Person): void {
    console.log(`이름 : ${person.name} , 나이 : ${person.age}`);
  }
  const person: Person = {
    name: "지은",
    age: 20,
  };
  getPersonInfo(person);
  // 이름 : 지은 , 나이 : 20
}

{
  //   ### 2. **객체 생성**
  // **문제**: `Config` 타입을 정의하여 `host` (문자열), `port` (숫자), `ssl` (불린값)을 갖는 객체 타입입니다.
  // `createConfig` 함수는 `Config` 타입을 반환하도록 하세요.
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };
  function createConfig(host: string, port: number, ssl: boolean): Config {
    return { host, port, ssl };
  }
  //code

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  //   ### 3. `Rectangle` 타입 작성
  // **문제**: `Rectangle` 타입을 정의하여 `width` (숫자)와 `height` (숫자) 속성을 가지게 하세요.
  // `calculateArea` 함수를 작성하여 `Rectangle` 객체의 면적을 계산하세요.
  type Rectangle = {
    width: number;
    height: number;
  };
  function calculateArea(rect: Rectangle): number {
    return rect.width * rect.height;
  }
  const rec: Rectangle = {
    width: 10,
    height: 20,
  };
  console.log(calculateArea(rec)); // 200
}

{
  //   ### 4. `Student` 타입 작성
  // **문제**: `Student` 타입을 정의하여 `name` (문자열), `age` (숫자), `grades` (숫자 배열) 속성을 포함하게 하세요.
  // `calculateAverageGrade` 함수를 작성하여 평균 성적을 계산하세요.
  // 모르겠다 => 나중에 풀어보기
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  function calculateAverageGrade(student: Student): string {
    return "";
  }
}

{
  //   ### 5. `Response` 타입 작성
  // **문제**: `Response` 타입을 작성하여 `status` (문자열), `data` (문자열), `message` (문자열) 속성을 포함하게 하세요.
  // `createResponse` 함수를 작성하여 이 타입의 객체를 반환하세요.
  type Response1 = {
    status: string;
    data: string;
    message: string;
  };
  function createResponse(
    status: string,
    data: string,
    message: string
  ): Response1 {
    return { status, data, message };
  }
  // code
  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

{
  //   ### 6. `Employee` 타입 작성
  // **문제**: `Employee` 타입을 작성하여 `id` (문자열), `name` (문자열), `position` (문자열) 속성을 가집니다.
  // `getEmployeeInfo` 함수에서 이 정보를 반환하도록 하세요.
  type Employee = {
    id: string;
    name: string;
    position: string;
  };
  function getEmployeeInfo(emp: Employee): string {
    return `${emp.name} works as a ${emp.position} with ID ${emp.id}`;
  }
  //code
  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

{
  //   ### 7. `Circle` 타입 작성
  // **문제**: `Circle` 타입을 작성하여 `radius` (숫자) 속성을 가지게 하세요.
  // `calculateCircumference` 함수에서 원의 둘레를 계산하는 기능을 작성하세요.
  type Circle = {
    radius: number;
  };
  function calculateCircumference(cir: Circle): number {
    return cir.radius * 2 * Math.PI;
  }
  //code
  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  //   ### 8. `Product` 타입 작성
  // **문제**: `Product` 타입을 작성하여 `name` (문자열), `price` (숫자), `inStock` (불린값) 속성을 가지게 하세요.
  // `getDiscountedPrice` 함수에서 주어진 할인을 적용한 가격을 계산하세요.
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };
  function getDiscountedPrice(pro: Product, dis: number): number {
    return pro.price * ((100 - dis) / 100);
  }
  //code
  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

{
  //   ### 9. `Book` 타입 작성
  // **문제**: `Book` 타입을 작성하여 `title` (문자열), `author` (문자열), `publishedYear` (숫자) 속성을 포함하도록 하세요.
  // `getBookSummary` 함수에서 책에 대한 간단한 요약을 반환하도록 하세요.
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  function getBookSummary(book: Book): string {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}`;
  }
  //code..
  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  // ### 10. `Transaction` 타입 작성
  // **문제**: `Transaction` 타입을 작성하여 `id` (문자열), `amount` (숫자), `timestamp` (문자열) 속성을 가지게 하세요.
  // `isValidTransaction` 함수에서 amount가 0보다 큰지 비교해서 결과를 반환하는 로직을 작성해주세요.(참/거짓 반환)
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };
  function isValidTransaction(trn: Transaction): boolean {
    return trn.amount > 0;
  }
  console.log(
    isValidTransaction({ id: "001", amount: 100, timestamp: "2025-04-10" })
  ); // true
}
