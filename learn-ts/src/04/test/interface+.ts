//1
{
  interface Animal {
    name: string;
    speak(): string;
  }

  interface Dog extends Animal {
    // speak() : string
  }
  interface Cat extends Animal {}

  const dog: Dog = {
    name: "snow",
    speak() {
      return "Woof !🐶";
    },
  };

  const cat: Cat = {
    name: "apple",
    speak() {
      return "Meow !😺";
    },
  };

  console.log(dog.speak());
  console.log(cat.speak());
}

//2
{
  interface Company {
    name: string;
    location: string;
    employees: Employee[];
  }

  interface Employee {
    name: string;
    age: number;
    position?: string;
  }
}

//3
{
  interface Logger {
    log(str: string): void;
    history: string[];
  }

  const logger: Logger = {
    history: [],
    log(message: string): void {
      this.history.push(message);
      console.log(message);
    },
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history);
}

//4
{
  interface success {
    status: "success";
    data: string;
  }

  interface err {
    status: "error";
    error: string;
  }
  type Response = success | err;

  const handleResponse = (res: Response): string => {
    if (res.status === "success") {
      return `Success: ${res.data}`;
    } else return `Error: ${res.error}`;
  };

  const res1: Response = {
    status: "success",
    data: "😊",
  };

  const res2: Response = {
    status: "error",
    error: "☠️",
  };

  console.log(handleResponse(res1));
  console.log(handleResponse(res2));
}

//5
{
  interface Book {
    title: string;
    publishedYear: number;
    author: Author;
  }

  interface Author {
    name: string;
    birthYear: number;
  }
}

//6
{
  interface Employee {
    name: string;
    age: number;
  }

  interface Manager extends Employee {
    team: string[];
  }

  interface Developer extends Employee {
    language: string;
  }

  const man1: Manager = {
    name: "eunseo",
    age: 25,
    team: ["snow", "apple"],
  };

  const dev1: Developer = {
    name: "seoeun",
    age: 26,
    language: "ts",
  };
}
