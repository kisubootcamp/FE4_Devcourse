{
  //1
  const printValue = (value: string | number): void => console.log(value);
  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}

{
  //2
  const doubleOrLength = (value: string | number): number => {
    if (typeof value === "string") return value.length;
    else return value * 2;
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
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

  const mergeObjects = function (
    person: Person,
    employee: Employee
  ): Person & Employee {
    return { ...person, ...employee };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

{
  //4
  function getFirstElement(arr: number[]): number;
  function getFirstElement(arr: string[]): string;
  function getFirstElement(arr: (string | number)[]): string | number {
    return arr[0];
  }

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

{
  //5
  function isEqual(a: string | number, b: string | number): boolean {
    if (a === b) return true;
    else return false;
  }

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

{
  //6
  type Person = {
    name: string;
    age: number;
  };

  const updateAddress = (
    person: Person,
    address?: string
  ): Person & { address?: string } => {
    if (typeof address === "string") {
      return { ...person, address };
    } else {
      return person;
    }
  };

  const updatedPerson = updateAddress(
    { name: "Jane", age: 28 },
    "123 Maple St"
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}

{
  //7
  function maxValue(a: string, b: string): string;
  function maxValue(a: number, b: number): number;
  function maxValue(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") {
      return a.length > b.length ? a : b;
    } else {
      return a > b ? a : b;
    }
  }

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

{
  //8
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(value: string): string;
  function getValue(value: number): string;
  function getValue(value: string | number): string {
    if (typeof value === "number") {
      return value.toString();
    } else {
      return value;
    }
    // return value + "";
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

{
  //9
  type Person = { name: string; age: number };
  type Contact = { email: string };
  const createContact = (
    person: Person,
    contact: Contact
  ): Person & Contact => {
    return { ...person, ...contact };
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

{
  //10
  const getAge = (age: string | number): number => {
    if (typeof age === "string") {
      return Number(age);
    } else return age;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
