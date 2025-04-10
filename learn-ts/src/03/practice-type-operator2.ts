// Q1
{
  const processInput = (input: string | number | boolean) => {
    if (typeof input === "string") return input.toUpperCase();
    else if (typeof input === "number") return input ** 2;
    else return input ? "YES" : "NO";
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}

// Q2
{
  const getFirstCharacter = (x: string | number): number | string => {
    if (typeof x === "string") return x[0];
    else return x.toString()[0];
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}

// Q3
{
  const combinePersonAndEmployee = (
    person: { name: string; age: number },
    employee: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => ({
    ...person,
    ...employee,
  });

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}

// Q4
{
  const getIdValue = (obj: { id: string | number }): number => {
    if (typeof obj.id === "number") return obj.id;
    else return obj.id.length;
  };

  const strObj = { id: "hello" };
  const numObj = { id: 4 };
  console.log(getIdValue(strObj));
  console.log(getIdValue(numObj));
}

// Q5
{
  const formatDate = (date: string | Date): string => {
    if (typeof date === "string") return date;
    const year = date.getFullYear();
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}/${day}/${year}`;
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 1, 9))); // "11/19/2024"
}

// Q6
{
  const convert = (input: number | string): number | string => {
    if (typeof input === "number") return input.toString();
    else return parseInt(input);
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}

// Q7
{
  const combinePersonAndAddress = (
    person: { name: string; age: number },
    address: { street: string; city: string; zipcode: string }
  ): { name: string; age: number } & {
    street: string;
    city: string;
    zipcode: string;
  } => ({ ...person, ...address });

  // 테스트 케이스
  const person = { name: "John", age: 25 };
  const address = {
    street: "123 Elm St",
    city: "Springfield",
    zipcode: "12345",
  };
  console.log(combinePersonAndAddress(person, address));
}

// Q8
{
  const compareValues = (x: string | number, y: string | number): boolean => {
    if (typeof x === "number" && typeof y === "number") return x > y;
    else if (typeof x === "string" && typeof y === "string") return x > y;
    throw new Error("error");
  };

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}

// Q9
{
  const checkEvenOdd = (x: string | number): string => {
    if (typeof x === "string") {
      if (x.length % 2 === 0) return "Even Length";
      else return "Odd Length";
    } else {
      if (x % 2 === 0) return "Even";
      else return "Odd";
    }
  };

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd("hello")); // "Odd Length"
  console.log(checkEvenOdd("code")); // "Even Length"
}

// Q10
{
  type Person = { name: string; age: number };
  type ContactInfo = { email?: string; phoneNumber?: string };
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

