{
  // 연습문제 1번
  type Person = {
    name: string;
    age: number;
  };

  function getPersonInfo(person: Person) {
    console.log(person);
  }

  const person: Person = {
    name: "애니",
    age: 26,
  };
  getPersonInfo(person);
}

{
  // 연습문제 2번
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  function createConfig(host: string, port: number, ssl: boolean): Config {
    return { host, port, ssl };
  }

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // 연습문제 3번
  type Rectangle = {
    width: number;
    height: number;
  };

  function calculateArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }

  const rectangle: Rectangle = {
    width: 10,
    height: 20,
  };

  console.log(calculateArea(rectangle));
}

{
  // 연습문제 4번
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(student: Student): number {
    return student.grades.reduce((sum, num) => sum + num, 0) / student.grades.length;
  }

  const student: Student = {
    name: "대권",
    age: 28,
    grades: [90, 76, 86],
  };

  console.log(calculateAverageGrade(student));
}

{
  // 연습문제 5번
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  function createResponse(status: string, data: string, message: string): Response {
    return { status, data, message };
  }

  console.log(createResponse("success", "John", "fetch success"));
}

{
  // 연습문제 6번
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  function getEmployeeInfo(employee: Employee): string {
    return `${employee.name} works as a ${employee.position} with ID: ${employee.id}`;
  }

  console.log(getEmployeeInfo({ id: "1", name: "james", position: "developer" })); // "james works as a developer with ID: 1."
}

{
  // 연습문제 7번
  type Circle = {
    radius: number;
  };

  function calculateCircumference(calcum: Circle): number {
    return calcum.radius * 2 * 3.14;
  }

  console.log(calculateCircumference({ radius: 3 }));
}

{
  // 연습문제 8번
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  function getDiscountedPrice(product: Product, discount: number) {
    return product.price * (1 - discount / 100);
  }

  console.log(getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)); // 900
}

{
  // 연습문제 9번
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(book: Book) {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}`;
  }

  console.log(getBookSummary({ title: "river", author: "james", publishedYear: 2020 })); // "river by james, published in 2020."
}

{
  // 연습문제 10번
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  function isValidTransaction(transaction: Transaction) {
    if (transaction.amount > 0) return transaction.amount;
    else return "No";
  }

  console.log(isValidTransaction({ id: "T", amount: -11, timestamp: "4" }));
}
