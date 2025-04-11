{
  // 1.
  const processInput = (
    value: string | number | boolean
  ): string | number | boolean => {
    if (typeof value === "string") return value.toUpperCase();
    else if (typeof value === "number") return value * value;
    else return value ? "YES" : "No";
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}
{
  // 2
  const getFirstCharacter = (value: string | number): string | number => {
    if (typeof value === "string") return value[0];
    else return Number(value.toString()[0]);
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}
{
  // 3
  const combinePersonAndEmployee = (
    person: { name: string; age: number },
    employee: { jobTitle: string; salary: number }
  ): { name: string; age: number; jobTitle: string; salary: number } => {
    return { ...person, ...employee };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}
{
  // 4.
  const getIdValue = (obj: { id: number | string }): number => {
    if (typeof obj.id === "number") return obj.id;
    else return obj.id.length;
  };

  console.log(getIdValue({ id: 10 }));
  console.log(getIdValue({ id: "Hello" }));
}
{
  // 5
  const formatDate = (value: string | Date): string => {
    if (typeof value === "string") return value;
    else {
      const day = value.getDate(); // day
      const year = value.getFullYear(); //year
      const month = value.getMonth() + 1;

      return `${month < 10 ? "0" : ""}${month}/${day < 10 ? "0" : ""}${
        day < 10 ? "0" : ""
      }${day}/${year}`;
    }
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}
{
  // 6.
  const convert = (input: number | string): string | number => {
    if (typeof input === "number") return input.toString();
    else return parseInt(input);
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}
{
  // 7.
  const combinePersonAndAddress = (
    person: { name: string; age: number },
    address: { street: string; city: string; zipcode: string }
  ): {
    name: string;
    age: number;
    street: string;
    city: string;
    zipcode: string;
  } => {
    return { ...person, ...address };
  };

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
  // 8.
  const compareValues = (
    value1: string | number,
    value2: string | number
  ): boolean => {
    return value1 > value2;
  };

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}
{
  // 9.
  const checkEvenOdd = (input: number | string): string => {
    if (typeof input === "number") return input % 2 === 0 ? "Even" : "Odd";
    else return input.length % 2 === 0 ? "Even Length" : "Odd Length";
  };

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd("hello")); // "Odd Length"
  console.log(checkEvenOdd("code")); // "Even Length"
}
{
  // 10.
  const mergeContactInfo = (
    person: { name: string; age: number },
    contactInfo: { email?: string; phoneNumber?: string }
  ): { name: string; age: number; email?: string; phoneNumber?: string } => {
    return { ...person, ...contactInfo };
  };

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
