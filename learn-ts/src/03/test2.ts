//1
{
  const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === "string") {
      return input.toUpperCase();
    } else if (typeof input === "number") {
      return input * input;
    } else {
      return input ? "Yes" : "No";
    }
  };
  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}

//2
{
  const getFirstCharacter = (input: string | number): string | number => {
    if (typeof input === "string") {
      return input[0];
    } else {
      let tmp = input.toString();
      return tmp[0];
    }
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}

//3
{
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    jobTitle: string;
    salary: number;
  };

  type PersonWithJob = Person & Employee;

  const combinePersonAndEmployee = (
    person: Person,
    employee: Employee
  ): PersonWithJob => {
    return { ...person, ...employee };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}

//4
{
  const getIdValue = (id: string | number): number => {
    return typeof id === "number" ? id : id.length;
  };

  console.log(getIdValue("eunseo"));
  console.log(getIdValue(8181));
}

//5
{
  const formatDate = (data: string | Date): string | Date => {
    if (typeof data === "string") return data;
    let year = data.getFullYear();
    let month = String(data.getMonth() + 1).padStart(2, "0"); // getMoth는 0달 부터 시작해서 +1을 해줘야한다.
    let day = String(data.getDay()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}

//6
{
  const convert = (input: Number | string): number | string => {
    return typeof input === "number" ? String(input) : Number(input);
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}

//7
{
  type Person = {
    name: string;
    age: number;
  };

  type Address = {
    street: string;
    city: string;
    zipcode: string;
  };

  type PersonWithAddress = Person & Address;

  const combinePersonAndAddress = (
    p: Person,
    a: Address
  ): PersonWithAddress => {
    return { ...p, ...a };
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

//8
{
  const compareValues = (
    input1: string | number,
    input2: string | number
  ): boolean => {
    return input1 > input2;
  };

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}

//9
{
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

//10
{
  type Person = {
    name?: string;
    age?: number;
  };

  type Contact = {
    email?: string;
    phoneNumber?: string;
  };

  type PersonContact = Person & Contact;
  const mergeContactInfo = (p: Person, c: Contact): PersonContact => {
    return { ...p, ...c };
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
