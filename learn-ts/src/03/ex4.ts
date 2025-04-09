{
  //1
  const processInput = (
    value: string | number | boolean
  ): string | number | boolean => {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else if (typeof value === "number") {
      return Math.pow(value, 2);
    } else {
      return value ? "YES" : "NO";
    }
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}

{
  //2
  const getFirstCharacter = (value: string | number): string | number => {
    if (typeof value === "string") {
      return value[0];
    } else {
      return value.toString()[0];
    }
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}

{
  //3
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    jobTitle: string;
    salary: number;
  };

  const combinePersonAndEmployee = function (
    person: Person,
    employee: Employee
  ): Person & Employee {
    return { ...person, ...employee };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}

{
  //4
  const getIdValue = (obj: { id: string | number }): number => {
    if (typeof obj.id === "string") {
      return obj.id.length;
    } else return obj.id;
  };
  console.log(getIdValue({ id: 2 }));
  console.log(getIdValue({ id: "2" }));
}

{
  //5
  const formatDate = (value: string | Date): string => {
    if (typeof value === "string") {
      let date = new Date(value);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    } else {
      return `${
        value.getMonth() + 1
      }/${value.getDate()}/${value.getFullYear()}`;
    }
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}

{
  //6
  function convert(input: number): string;
  function convert(input: string): number;
  function convert(input: number | string): number | string {
    if (typeof input === "number") {
      return input.toString();
    } else {
      return Number(input);
    }
  }

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}

{
  //7
  type Person = {
    name: string;
    age: number;
  };
  type Address = { street: string; city: string; zipcode: string };

  const combinePersonAndAddress = (
    person: Person,
    address: Address
  ): Person & Address => ({ ...person, ...address });
  // 테스트 케이스
  const person = { name: "John", age: 25 };
  const address = {
    street: "123 Elm St",
    city: "Springfield",
    zipcode: "12345",
  };
  console.log(combinePersonAndAddress(person, address));
}

{
  //8
  const compareValues = (a: string | number, b: string | number): boolean => {
    if (
      (typeof a === "string" && typeof b === "string") ||
      (typeof a === "number" && typeof b === "number")
    )
      return a > b;
    else throw Error("new error");
    // return a > b;
  };

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}

{
  //9
  const checkEvenOdd = (input: number | string): string => {
    if (typeof input === "number") {
      return input % 2 === 0 ? "Even" : "Odd";
    } else {
      return input.length % 2 === 0 ? "Even Length" : "Odd Length";
    }
  };

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd("hello")); // "Odd Length"
  console.log(checkEvenOdd("code")); // "Even Length"
}

{
  //10
  type Person = {
    name?: string;
    age?: number;
  };
  type ContactInfo = {
    email?: string;
    phoneNumber?: string;
  };

  const mergeContactInfo = (
    person: Person,
    contactInfo: ContactInfo
  ): Person & ContactInfo => ({ ...person, ...contactInfo });

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const contactInfo = {
    email: "alice@example.com",
    phoneNumber: "123-456-7890",
  };
  console.log(mergeContactInfo(person, contactInfo));

  const personWithoutContact = { name: "Bob", age: 25 };
  console.log(mergeContactInfo(personWithoutContact, {}));
}
