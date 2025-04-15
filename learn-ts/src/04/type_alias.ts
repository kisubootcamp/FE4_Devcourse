// 타입 별칭

// 연습문제
{
  // 1. Person 타입 작성
  type Person = {
    name: string;
    age: number;
  };

  function getPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }

  const person1: Person = {
    name: "kyo",
    age: 25,
  };

  getPersonInfo(person1); // Name: kyo, Age: 25
}
{
  // 2. 객체 생성
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
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}
{
  // 3. Rectangle 타입 작성
  type Rectangle = {
    width: number;
    height: number;
  };

  function calculateArea(rect: Rectangle): number {
    return rect.width * rect.height;
  }

  const area: Rectangle = {
    width: 2,
    height: 3,
  };

  console.log(calculateArea(area)); // 6
}
{
  // 4. Student 타입 작성 *
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(student: Student): number {
    return (
      student.grades.reduce((acc, curr) => acc + curr, 0) /
      student.grades.length
    );
  }

  const student1 = {
    name: "kyo",
    age: 20,
    grades: [90, 80, 70],
  };

  console.log(calculateAverageGrade(student1)); // 80
}
{
  // 5. Response 타입 작성
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  function createResponse(
    status: string,
    data: string,
    message: string
  ): Response {
    return {
      status,
      data,
      message,
    };
  }

  console.log(createResponse("success", "John", "fetch success"));
  // { status: 'success', data: 'John', message: 'fetch success' }
}
{
  // 6. Employee 타입 작성 *
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  function getEmployeeInfo(employee: Employee): string {
    return `${employee.name} works as a ${employee.position} with ID: ${employee.id}.`;
  }

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // james works as a developer with ID: 1.
}
{
  // 7. Circle 타입 작성
  type Circle = {
    radius: number;
  };

  function calculateCircumference(circle: Circle): number {
    return 2 * circle.radius;
  }

  console.log(calculateCircumference({ radius: 3 }));
}
{
  // 8. Product 타입 작성
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  function getDiscountedPrice(product: Product, sale: number): number {
    return (product.price * (100 - sale)) / 100;
  }

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}
{
  // 9. Book 타입 작성
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(book: Book): string {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
  }

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  );
  // river by james, published in 2020.
}
{
  // 10. Transaction 타입 작성
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  function isValidTransaction(transaction: Transaction): boolean {
    return transaction.amount > 0;
  }

  const tran = {
    id: "1",
    amount: 2,
    timestamp: "2025",
  };

  console.log(isValidTransaction(tran)); // true
}
