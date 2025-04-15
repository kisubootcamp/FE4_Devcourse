{
  //1
  type Person = {
    name: string;
    age: number;
  };
  function getPersonInfo(): Person {
    return {
      name: "j",
      age: 20,
    };
  }
  console.log(getPersonInfo());
}

{
  //2

  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };
  function createConfig(a: string, b: number, c: boolean): Config {
    return {
      host: a,
      port: b,
      ssl: c,
    };
  }
  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  //3

  type Rectangle = {
    width: number;
    height: number;
  };

  function calculateArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }
  const myRect: Rectangle = { width: 3, height: 4 };
  console.log(calculateArea(myRect));
}

{
  //4
  type Student = {
    name: string;
    age: number;
    grade: number[];
  };

  function calculateAverageGrade(
    name: string,
    age: number,
    grade: number[]
  ): number {
    let sum = grade.reduce((a, b) => a + b, 0);
    return sum / student.grade.length;
  }

  const student: Student = { name: "s", age: 20, grade: [100, 90, 80] };
  console.log(calculateAverageGrade(student.name, student.age, student.grade));
}

{
  //5
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
  // { status: 'success', data: 'John', message: 'fetch success'
}

{
  // 6
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
  );
  // "james works as a developer with ID: 1."
}

{
  //7
  type Circle = {
    radius: number;
  };
  function calculateCircumference(circle: Circle): number {
    return circle.radius * 2 * 3.14;
  }
  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  //8
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(book: Book): string {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}`;
  }

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  );
  // "river by james, published in 2020."
}

{
  //9
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };
  const transaction = (tran: Transaction): boolean | undefined => {
    if (tran.amount > 0) {
      return true;
    }
  };
  console.log(transaction({ id: "a", amount: 34, timestamp: "string" }));
}
