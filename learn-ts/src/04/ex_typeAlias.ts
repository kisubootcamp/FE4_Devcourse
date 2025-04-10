{
  //1 Person 타입 작성
  type Person = {
    name: string;
    age: number;
  };

  const getPersonInfo = (person: Person): void => {
    console.log(person);
  };
  getPersonInfo({ name: "sucoding", age: 20 });
}

{
  //2 객체 생성
  type Config = {
    host: string;
    post: number;
    ssl: boolean;
  };

  const createConfig = (host: string, post: number, ssl: boolean): Config => ({
    host,
    post,
    ssl,
  });
  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  //3 Rectangle 타입 작성
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculateArea = (rect: Rectangle): void => {
    console.log(rect.height * rect.width);
  };
  calculateArea({
    width: 5,
    height: 10,
  });
}

{
  //4 Student 타입 작성
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(student: Student): void {
    console.log(
      student.grades.reduce((acc, cur) => acc + cur, 0) / student.grades.length
    );
  }
  calculateAverageGrade({
    name: "sucoding",
    age: 10,
    grades: [40, 80, 90, 20],
  });
}

{
  //5 Response 타입 작성
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
    return { status, data, message };
  }

  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

{
  //6 Employee 타입 작성
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  const getEmployeeInfo = function (employee: Employee): string {
    const { id, name, position } = employee;
    return `${name} works as a ${position} with ID: ${id}`;
  };
  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

{
  //7 Circle 타입 작성
  type Circle = {
    radius: number;
  };
  const calculateCircumference = function (circle: Circle): number {
    return 2 * Math.PI * circle.radius;
  };
  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  // 8 Product 타입 작성
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const getDiscountedPrice = (product: Product, sale: number): number => {
    return product.price * ((100 - sale) / 100);
  };
  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

{
  // 9 Book 타입 작성
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(book: Book): string {
    const { title, author, publishedYear } = book;
    return `${title} by ${author}, published in ${publishedYear}`;
  }
  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  //10 Transaction 타입 작성
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  function isValidTransaction(trans: Transaction): boolean {
    return trans.amount > 0;
  }
  console.log(isValidTransaction({ id: "hi", amount: 10, timestamp: "1232" }));
  console.log(isValidTransaction({ id: "hi", amount: -1, timestamp: "1232" }));
}
