// Q1
{
  const printValue = (arg: string | number) => console.log(arg);

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}

// Q2
{
  const doubleOrLength = (arg: number | string) => {
    if (typeof arg === "number") return arg * 2;
    else return arg.length;
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

// 03
{
  const mergeObjects = (
    person: { name: string; age: number },
    employee: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => ({
    ...person,
    ...employee,
  });

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

// Q4
{
  const getFirstElement = (arr: number[] | string[]): number | string => arr[0];

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

// Q5
{
  const isEqual = (a: number | string, b: number | string): boolean => {
    if (a === b) return true;
    else return false;
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}
// Q6
{
  const updateAddress = (
    obj: { name: string; age: number },
    address?: string
  ): { name: string; age: number } & { address?: string } => {
    if (address) {
      return { ...obj, address };
    } else return obj;
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

// Q7
{
  const maxValue = (
    a: number | string,
    b: number | string
  ): string | number => {
    if (typeof a === "number" && typeof b === "number") return Math.max(a, b);
    else if (typeof a === "string" && typeof b === "string") {
      if (a.length > b.length) return a;
      else return b;
    }
    throw new Error("error");
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

// Q8
{
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(a: number): string;
  function getValue(a: string): string;
  function getValue(a: string | number): string {
    return a.toString();
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

// Q9
{
  const createContact = (
    person: { name: string; age: number },
    contact: { email: string }
  ): { name: string; age: number } & { email: string } => ({
    ...person,
    ...contact,
  });

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

// Q10
{
  const getAge = (num: string | number): number => {
    if (typeof num === "string") return parseInt(num);
    else return num;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
