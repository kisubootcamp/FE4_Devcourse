{
  // 1. Person 타입 작성
  type Person = { name: string; age: number };

  const getPersonInfo = (person: Person): string => {
    return `${person.name}, ${person.age}`;
  };

  const user: Person = {
    name: 'sy',
    age: 25,
  };

  console.log(getPersonInfo(user)); // sy, 25
}

{
  // 2. 객체 생성
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  const createConfig = (host: string, port: number, ssl: boolean): Config => {
    return {
      host,
      port,
      ssl,
    };
  };

  const config = createConfig('localhost', 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // 3. Rectangle 타입 작성
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculageArea = (rect: Rectangle): number => {
    return rect.width * rect.height;
  };

  const rectangleInfo: Rectangle = {
    width: 5,
    height: 10,
  };

  console.log(calculageArea(rectangleInfo)); // 50
}

{
  // 4. Student 타입 작성
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  const calculateAverageGrade = (stu: Student): number => {
    if (stu.grades.length === 0) return 0;

    const total = stu.grades.reduce((sum, grade) => sum + grade, 0);
    return total / stu.grades.length;
  };

  const studentInfo: Student = {
    name: 'sy',
    age: 25,
    grades: [90, 85, 100],
  };

  console.log(Math.floor(calculateAverageGrade(studentInfo))); // 91
}

{
  // 5. Response 타입 작성
  type Responses = {
    status: string;
    data: string;
    message: string;
  };

  const createResponses = (
    status: string,
    data: string,
    message: string
  ): Responses => {
    return {
      status,
      data,
      message,
    };
  };

  console.log(createResponses('success', 'John', 'fetch success')); // { status: 'success', data: 'John', message: 'fetch success' }
}

{
  // 6. Employee 타입 작성
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  const getEmployeeInfo = (emp: Employee): string => {
    return `${emp.name} works as a ${emp.position} with ID: ${emp.id}.`;
  };
  console.log(
    getEmployeeInfo({ id: '1', name: 'james', position: 'developer' })
  ); // james works as a developer with ID: 1.
}

{
  // 7. Circle 타입 작성
  type Circle = {
    radius: number;
  };

  const calculateCircumference = (cir: Circle): number => {
    return cir.radius * 2 * Math.PI;
  };

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  // 8. Product 타입 작성
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const getDiscountedPrice = (pro: Product, discount: number): number => {
    const dis = pro.price * (discount / 100);
    return pro.price - dis;
  };

  console.log(
    getDiscountedPrice({ name: 'bag', price: 1000, inStock: true }, 10)
  ); // 900
}

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
    getBookSummary({ title: 'river', author: 'james', publishedYear: 2020 })
  ); // river by james, published in 2020
}

{
  // 10. Transaction 타입 작성
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  const isValidTransaction = (tr: Transaction): boolean => {
    if (tr.amount > 0) return true;
    else return false;
  };

  console.log(
    isValidTransaction({ id: '001', amount: 100, timestamp: '2025-04-12' })
  ); // true
}
