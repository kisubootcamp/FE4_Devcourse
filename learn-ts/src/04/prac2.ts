//타입별칭 연습문제
{
  //1.
  type Person = {
    name: string;
    age: number;
  };
  const person = { name: "minji", age: 25 };
  // function getPersonInfo(a:Person){
  //     console.log(a.name);
  // }
  const getPersonInfo = (a: Person): void => {
    console.log(a.name);
  };
}
{
  //2.?
  interface Config {
    host: string;
    port: number;
    ssl: boolean;
  }

  const createConfig = (a: string, b: number, c: boolean): Config => {
    const configs: Config = {
      host: a,
      port: b,
      ssl: c,
    };
    return configs;
  };

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  //3.
  type Rectangle = {
    width: number;
    height: number;
  };
  // function calculateArea(a:Rectangle):number{
  //     return a.width*a.height;
  // }
  // const calculateArea=(a:Rectangle):number=>{
  //     return a.width*a.height;
  // }
  const calculateArea = (a: Rectangle): number => a.width * a.height;
}
{
  //4.
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  function calculateAverageGrade(a: Student): number {
    return a.grades.reduce((sum, num) => sum + num, 0) / a.grades.length;
  }
  const aver = calculateAverageGrade({
    name: "minji",
    age: 25,
    grades: [90, 80, 70, 60],
  });
  console.log(aver);
}
{
  //5. ?
  interface Response {
    status: string;
    data: string;
    message: string;
  }
  const createResponse = (a: string, b: string, c: string): Response => {
    const res: Response = {
      status: a,
      data: b,
      message: c,
    };
    return res;
  };
  console.log(createResponse("success", "John", "fetch success")); // { status: 'success', data: 'John', message: 'fetch success'
}

{
  //6.
  //code
  type Employee = {
    id: string;
    name: string;
    position: string;
  };
  const getEmployeeInfo = (a: Employee): string => {
    return `${a.name} works as a ${a.position} with ID: ${a.id}.`;
  };
  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  ); // "james works as a developer with ID: 1."
}

{
  //7.
  type Circle = {
    radius: number;
  };
  const calculateCircumference = (a: Circle): number => {
    return a.radius * 2 * Math.PI;
  };
  //code
  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  //9.
  interface Book {
    title: string;
    author: string;
    publishedYear: number;
  }
  const getBookSummary = (a: Book): string => {
    return `${a.title} by ${a.author}, published in ${a.publishedYear}.`;
  };
  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  //10.
  interface Transaction {
    id: string;
    amount: number;
    timestamp: string;
  }
  const inValidTransaction = (a: Transaction): boolean => {
    return a.amount > 0 ? true : false;
  };
  console.log(
    inValidTransaction({ id: "abc", amount: -1, timestamp: "2025-04-10" })
  );
}
