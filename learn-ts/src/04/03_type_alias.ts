// 타입 별칭 연습 문제
{
  // 1. Person 타입 작성
  type Person = {
    name: string;
    age: number;
  };

  const getPersonInfo = (person: Person) => {
    return `Name: ${person.name}, Age: ${person.age}`;
  };

  const person = {
    name: "PSY",
    age: 20,
  };
  console.log(getPersonInfo(person));
}

console.log("-------------------------------------");

{
  // 2. 객체 생성
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  const createConfig = (host: string, port: number, ssl: boolean): Config => {
    return { host, port, ssl };
  };

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

console.log("-------------------------------------");

{
  // 3. Rectangle 타입 작성
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculateArea = (rectangle: Rectangle): number =>
    rectangle.width * rectangle.height;

  const rectangle = {
    width: 10,
    height: 5,
  };
  console.log(calculateArea(rectangle));
}

console.log("-------------------------------------");

{
  // 4. Student 타입 작성
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  const calculateAverageGrade = (student: Student): number => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    return total / student.grades.length;
  };

  const student = {
    name: "PSY",
    age: 19,
    grades: [95, 87, 90, 88, 92],
  };
  console.log(calculateAverageGrade(student));
}

console.log("-------------------------------------");

{
  // 6. Employee 타입 작성
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  const getEmployeeInfo = (employee: Employee): string => {
    return `${employee.name} works as a ${employee.position} with ID: ${employee.id}.`;
  };
  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

console.log("-------------------------------------");

{
  // 7. Circle 타입 작성
  type Circle = {
    radius: number;
  };

  const calculateCircumference = (circle: Circle): number => {
    return 2 * Math.PI * circle.radius;
  };

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

console.log("-------------------------------------");

{
  // 8 Product 타입 작성
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const getDiscountedPrice = (product: Product, discount: number): number => {
    return product.price * (1 - discount / 100);
  };

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

console.log("-------------------------------------");

{
  // 9. Book 타입 작성
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const getBookSummary = (book: Book): string => {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}`;
  };

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

console.log("-------------------------------------");

{
  // 10. Transaction 타입 작성
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  const isValidTransaction = (transaction: Transaction): boolean => {
    // amount > 0
    return (
      transaction.amount > 0 && new Date(transaction.timestamp) > new Date()
    );
  };

  console.log(
    isValidTransaction({ id: "1", amount: 100, timestamp: "2024-01-01" })
  ); // false
}
