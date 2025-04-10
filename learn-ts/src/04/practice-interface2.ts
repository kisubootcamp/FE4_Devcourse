{
  // Q1
  interface Animal {
    name: string;
    speak(): string;
  }

  interface Dog extends Animal {
    speak(): "Woof";
  }

  interface Cat extends Animal {
    speak(): "Meow";
  }
}

{
  // Q2
  interface Employee {
    name: string;
    age: number;
    position?: string;
  }

  interface Company {
    name: string;
    location: string;
    employee: Employee[];
  }
}

{
  // Q3
  interface Logger {
    history: string[];
    log(message: string): void;
    [key: string]: any;
  }

  const logger: Logger = {
    history: [],
    log(message: string) {
      this.history.push(message)
    },
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history); // ["App started", "User logged in"]
}
