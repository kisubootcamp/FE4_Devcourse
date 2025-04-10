// 타입별칭 연습문제
// 01
{
  type Person = {
    name: string;
    age: number;
  };

  const getPersonInfo = (person: Person): void => {
    console.log(person.name + person.age);
  };
  getPersonInfo({ name: 'ty', age: 11 });
}

// 02
{
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  const createConfig = (host: string, port: number, ssl: boolean): Config => {
    return { host, port, ssl };
  };
  //code

  const config = createConfig('localhost', 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

// 03
{
  type Rectangle = {
    width: number;
    height: number;
  };
  const calculateArea = (re: Rectangle): number => {
    return re.width * re.height;
  };
  console.log(calculateArea({ width: 2, height: 4 }));
}

// 04
{
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  const calculateAverageGrade = (cal: Student): number => {
    return cal.grades.reduce((result, num) => result + num, 0);
  };
  console.log(calculateAverageGrade({ name: '1', age: 1, grades: [1, 2, 3, 4] }));
}

// 05
{
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  const createResponse = (s1: string, s2: string, s3: string): Response => {
    return { status: s1, data: s2, message: s3 };
  };
  console.log(createResponse('success', 'John', 'fetch success'));
}

// 06
{
  type Employee = {
    id: string;
    name: string;
    position: string;
  };
  const getEmployeeInfo = (obj1: Employee): string => {
    return `${obj1.name} works as a ${obj1.position} with ID: ${obj1.id}.`;
  };

  console.log(getEmployeeInfo({ id: '1', name: 'james', position: 'developer' })); // "james works as a developer with ID: 1."
}

// 07
{
  type Circle = { radius: number };
  const calculateCircumference = (r: Circle): number => {
    return r.radius * 2 * 3.14;
  };

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

// 08
{
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };
  const getDiscountedPrice = (obj: Product, sale: number): number => {
    if (obj.inStock) {
      return (obj.price * (100 - sale)) / 100;
    }
    return obj.price;
  };

  console.log(getDiscountedPrice({ name: 'bag', price: 1000, inStock: true }, 10)); // 900
}

// 09
{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const getBookSummary = (obj: Book): string => {
    return `${obj.title} by ${obj.author}, published in ${obj.publishedYear}.`;
  };

  console.log(getBookSummary({ title: 'river', author: 'james', publishedYear: 2020 })); // "river by james, published in 2020."
}

// 10
{
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };
  const isValidTransaction = (obj: Transaction): boolean => {
    if (obj.amount > 0) {
      return true;
    }
    return false;
  };
  console.log(isValidTransaction({ id: 'q', amount: 1, timestamp: 'e' }));
}
