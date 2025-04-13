//1
{
  type Person = {
    name: string;
    age: number;
  };

  const getPersonInfo = (p: Person) => {
    console.log(`name: ${p.name}, age: ${p.age}`);
  };

  const eunseo: Person = {
    name: "eunseo",
    age: 26,
  };

  getPersonInfo(eunseo);
}

//2
{
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  const createConfig = (h: string, n: number, b: boolean): Config => {
    return { host: h, port: n, ssl: b };
  };

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

//3
{
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculateArea = (rec: Rectangle): number => {
    return rec.width * rec.height;
  };

  const myRec: Rectangle = { width: 3, height: 5 };
  console.log(calculateArea(myRec));
}

//4
{
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  const eunseo = { name: "eunseo", age: 25, grades: [1, 2, 1, 3] };
  console.log(eunseo);

  const calculateGrade = (stu: Student): number => {
    let len = stu.grades.length;
    let avg = 0;
    stu.grades.map((g) => (avg += g));
    avg /= len;
    return avg;
  };

  console.log(`avg : ${calculateGrade(eunseo)}`);
}

//5
{
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  const createResponse = (s: string, d: string, m: string): Response => {
    return {
      status: s,
      data: d,
      message: m,
    };
  };

  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

//6
{
  type Employee = {
    id: string;
    name: string;
    position: string;
  };

  const getEmployeeInfo = (emp: Employee) => {
    return `${emp.name} works as a ${emp.position} with ID: ${emp.id}`;
  };

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

//7
{
  type Circle = {
    radius: number;
  };

  const calculateCircumference = (c: Circle) => {
    return c.radius * 2 * Math.PI;
  };

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

//8
{
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const getDiscountedPrice = (pr: Product, discountRatio: number) => {
    return pr.price - pr.price * discountRatio * 0.01;
  };

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

//9
{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const getBookSummary = (b: Book) => {
    return `${b.title} by ${b.author}, published in ${b.publishedYear}`;
  };
  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

//10
{
  type Transaction = {
    id: string;
    amount: number;
    timestemp: string;
  };

  const isValidTransaction = (t: Transaction) => {
    return t.amount > 0 ? "참" : "거짓";
  };

  console.log(
    isValidTransaction({ id: "1-gjfk", amount: 3, timestemp: "asdf" })
  );
}
