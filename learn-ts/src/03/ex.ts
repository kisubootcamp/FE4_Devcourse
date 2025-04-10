{
  //함수타입
  //1
  const add = (a: number, b: number): number => a + b;
  console.log(add(4, 30));

  //2
  const greet = (name: string): string => {
    return `Hello, ${name}!`;
  };
  console.log(greet("youjin"));

  //3
  const sumAll = (...n: number[]): number => {
    return n.reduce((n1, n2) => n1 + n2, 0);
  };
  console.log(sumAll(1, 2, 3, 4));

  //4
  const sum = (a: number, b: number = 0): number => a + b;
  console.log(sum(4));

  //5
  const multiply = (a: number, b: number): number => a * b;
  console.log(multiply(4, 30));

  //6
  const concat = (a: string, b: number): string => a + b;
  console.log(concat("ujsh", 430));

  //7 - 기본값이 있어서 옵셔널 파라미터를 안써도됨
  const greet2 = (name: string, message: string = "Welcome"): string =>
    `${message}, ${name}!`;
  console.log(greet2("youjin"));
  console.log(greet2("seongho", "Hello"));

  //8
  const findMax = (...n: number[]): number => Math.max(...n);
  console.log(findMax(1, 2, 3, 4));

  //9
  const double = (n: number): number => n * 2;
  console.log(double(4));

  //유니언, 인터섹션
  //1
  function printValue(a: string | number): string | number {
    return a;
  }
  console.log(printValue("유진"));
  console.log(printValue(430));

  //2
  function dOl(a: string | number): string | number {
    if (typeof a === "string") {
      return a.length;
    } else {
      return a * 2;
    }
  }
  console.log(dOl("유진"));
  console.log(dOl(430));

  //3
  type person = {
    name: string;
    age: number;
  };

  type worker = {
    jobTitle: string;
    salary: number;
  };

  function mO(person: person, worker: worker): person & worker {
    return { ...person, ...worker };
  }

  const person = { name: "유진", age: 29 };
  const worker = { jobTitle: "Frontend Developer", salary: 4000000 };
  console.log(mO(person, worker));
}
