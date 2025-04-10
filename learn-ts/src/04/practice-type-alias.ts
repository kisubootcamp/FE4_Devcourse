{
  // Q1
  type Person = {
    name: string;
    age: number;
  };

  const getPersonInfo = (person: Person): void => console.log(person);

  const person = {
    name: "park",
    age: 20,
  };

  getPersonInfo(person);
}

{
  // Q2
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  const createConfig = (host: string, port: number, ssl: boolean): Config => ({
    host,
    port,
    ssl,
  });

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // Q3
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculateArea = (rectangle: Rectangle): number =>
    rectangle.width * rectangle.height;

  const rectangle = {
    width: 30,
    height: 20,
  };

  console.log(calculateArea(rectangle));
}

{
  // Q4
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  const calculateAverageGrade = (student: Student): string => {
    const avgGrades =
      student.grades.reduce((acc, num) => acc + num, 0) / student.grades.length;
    return `${student.name}는 ${student.age}살이고 평균점수는 ${avgGrades}입니다`;
  };

  const student = {
    name: "park",
    age: 20,
    grades: [90, 80, 100, 80],
  };

  console.log(calculateAverageGrade(student));
}

{
  // Q5
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  const createResponse = (
    status: string,
    data: string,
    message: string
  ): Response => ({ status, data, message });

  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

{
  // Q6
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  const getEmployeeInfo = (employee: Employee): string =>
    `${employee.name} works as a ${employee.position} with ID: ${employee.id}`;

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

{
  // Q7
  type Circle = {
    radius: number;
  };

  const calculateCircumference = (circle: Circle): number =>
    circle.radius * 2 * Math.PI;

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  // Q8
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const getDiscountedPrice = (product: Product, discount: number): number =>
    product.price * ((100 - discount) / 100);

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

{
  // Q9
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const getBookSummary = (book: Book): string =>
    `${book.title} by ${book.author}, published in ${book.publishedYear}`;

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  // Q10
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  const isValidTransaction = (transaction: Transaction): boolean =>
    transaction.amount > 0;
}
