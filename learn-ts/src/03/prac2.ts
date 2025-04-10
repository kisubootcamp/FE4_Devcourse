//타입 오퍼레이터
{
  //1.
  const printValue = (a: string | number) => {
    console.log(a);
  };

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}
{
  //2.
  const doubleOrLength = (a: string | number): number => {
    if (typeof a === "string") return a.length;
    else return a * 2;
  };
  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}
{
  //3.
  type Person = {
    name: string;
    age: number;
  };
  type Employee = {
    jobTitle: string;
    salary: number;
  };

  const mergeObjects = (a: Person, b: Employee): Person & Employee => {
    return { ...a, ...b };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

{
  //4.
  const getFirstElement = (a: number[] | string[]): number | string => {
    return a[0];
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

{
  //5.
  const isEqual = (a: string | number, b: string | number): boolean => {
    if (a === b) return true;
    else return false;
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

{
  //6.
  type Person = { name: string; age: number };
  type Address = { address?: string };
  const updateAddress = (a: Person, b?: string): Person & Address => {
    if (b) {
      return { ...a, address: b };
    } else {
      return a as Person & Address;
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
  //7.
  const maxValue = (
    a: string | number,
    b: string | number
  ): string | number => {
    if (typeof a === "string" && typeof b === "string")
      return a.length > b.length ? a : b;
    else if (typeof a === "number" && typeof b === "number")
      return a >= b ? a : b;
    else {
      throw new Error("error!");
    }
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

{
  //8.
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(a: string): string;
  function getValue(a: number): string;
  function getValue(a: string | number): string {
    if (typeof a === "number") return `${a}`;
    else return a;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

{
  //9.
  type Person = { name: string; age: number };
  type Email = { email: string };
  const createContact = (a: Person, b: Email): Person & Email => {
    return { ...a, ...b };
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

{
  //10.
  const getAge = (a: string | number): number => {
    if (typeof a === "string") return parseInt(a);
    else return a;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
