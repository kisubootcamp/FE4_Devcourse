{
  // 1
  function processInput(input: string): string;
  function processInput(input: number): number;
  function processInput(input: boolean): string;
  function processInput(input: string | number | boolean): string | number {
    if (typeof input === "string") return input.toUpperCase();
    else if (typeof input === "number") return input ** 2;
    else return input ? "YES" : "NO";
  }

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}
{
  // 2
  function getFirstCharacter(input: string): string;
  function getFirstCharacter(input: number): number;
  function getFirstCharacter(input: string | number): string | number {
    if (typeof input === "number") return input.toString().charAt(0);
    else return input.charAt(0);
  }

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}
{
  // 3
  type Person = {
    name: string;
    age: number;
  };
  type Employee = {
    jobTitle: string;
    salary: number;
  };
  const combinePersonAndEmployee = (person: Person, employee: Employee): Person & Employee => {
    return { ...person, ...employee };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}
{
  // 4
  function getIdValue(obj: { id: number }): number;
  function getIdValue(obj: { id: string }): number;
  function getIdValue(obj: { id: number | string }): number {
    if (typeof obj.id === "number") return obj.id;
    else return obj.id.length;
  }
  console.log(getIdValue({ id: 123 }));
  console.log(getIdValue({ id: "123" }));
}
{
  // 5
  function formatDate(input: string): string;
  function formatDate(input: Date): string;
  function formatDate(input: string | Date): string {
    if (typeof input === "string") return input;
    else {
      const mm = input.getMonth() + 1;
      const dd = input.getDate();
      const yyyy = input.getFullYear();

      return `${mm}/${dd}/${yyyy}`;
    }
  }

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}
{
  // 6
  function convert(input: number): string;
  function convert(input: string): number;
  function convert(input: number | string): number | string {
    if (typeof input === "number") return input.toString();
    else return parseInt(input);
  }

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}
{
  // 7
  type Person = {
    name: string;
    age: number;
  };
  type Address = {
    street: string;
    city: string;
    zipcode: string;
  };
  const combinePersonAndAddress = (person: Person, address: Address): Person & Address => {
    return { ...person, ...address };
  };

  // 테스트 케이스
  const person = { name: "John", age: 25 };
  const address = { street: "123 Elm St", city: "Springfield", zipcode: "12345" };
  console.log(combinePersonAndAddress(person, address));
}
{
  // 8
  function compareValues(a: string, b: string): boolean;
  function compareValues(a: number, b: number): boolean;
  function compareValues(a: number | string, b: number | string): boolean {
    if (typeof a === "number" && typeof b === "number") return a > b ? true : false;
    else return a > b ? true : false;
  }

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}
{
  // 9
  function checkEvenOdd(input: number): string;
  function checkEvenOdd(input: string): string;
  function checkEvenOdd(input: number | string): string {
    if (typeof input === "number") return input % 2 ? "Odd" : "Even";
    else return input.length % 2 ? "Odd Length" : "Even Length";
  }

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd("hello")); // "Odd Length"
  console.log(checkEvenOdd("code")); // "Even Length"
}
{
  // 10
  type Person = {
    name: string;
    age: number;
  };
  type ContactInfo = {
    email?: string;
    phoneNumber?: string;
  };
  const mergeContactInfo = (person: Person, contactInfo: ContactInfo): Person & ContactInfo => {
    return { ...person, ...contactInfo };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const contactInfo = { email: "alice@example.com", phoneNumber: "123-456-7890" };
  console.log(mergeContactInfo(person, contactInfo));

  const personWithoutContact = { name: "Bob", age: 25 };
  console.log(mergeContactInfo(personWithoutContact, {}));
}
