// 01
{
  type Person = string | number;

  function getPersonInfo(name: Person, age: Person) {
    return { name, age };
  }

  console.log(getPersonInfo("John", 20));
}

// 02
{
  type Config = string | number | boolean;

  function createConfig(host: Config, port: Config, ssl: Config) {
    return { host, port, ssl };
  }

  const config = createConfig("localhost", 8080, true);
  console.log(config);
}

// 03
{
  type Rectangle = number;

  function calculateArea(width: Rectangle, height: Rectangle) {
    return width * height;
  }

  console.log(calculateArea(2, 2));
}

// 04
{
  type Student = string | number | number[];

  function calculateAverageGrade(
    grades: number[],
    name?: string,
    age?: number
  ): Student {
    let a = 0;
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
      a += grades[i];
      average = a / grades.length;
    }
    return average;
  }

  console.log(calculateAverageGrade([1, 2, 3]));
}

// 05
{
  type Response = string;

  function createResponse(status: Response, data: Response, merge: Response) {
    return `{ status: '${status}', data: '${data}', message: '${merge}' }`;
  }

  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

// 06
{
  type Employee = { id: string; name: string; position: string };

  function getEmployeeInfo(employee: Employee) {
    return `${employee.name} works as a ${employee.position} with ID: ${employee.id}`;
  }

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

// 07
{
  type Circle = { radius: number };

  function calculateCircumference(circle: Circle) {
    return 2 * Math.PI * circle.radius;
  }

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

// 08
{
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  function getDiscountedPrice(product: Product, num: number) {
    return product.price - product.price / num;
  }

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

// 09
{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(book: Book) {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}`;
  }

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

// 10
{
  type Transaction = {
    amount: number;
    id?: string;
    timestamp?: string;
  };

  function isVaildTransaction(transaction: Transaction) {
    if (transaction.amount > 0) return true;
    else return false;
  }

  console.log(isVaildTransaction({ amount: 1 }));
}
