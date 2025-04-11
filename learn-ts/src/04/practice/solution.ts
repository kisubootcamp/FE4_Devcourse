// 01
{
  const printValue = (a: string | number): void => {
    console.log(a);
  };

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}

// 02
{
  const doubleOrLength = (a: string | number): number => {
    if (typeof a === "number") {
      return a * 2;
    } else if (typeof a === "string") {
      return a.length;
    } else {
      return a;
    }
  };
  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

// 03

{
  let a: { name: string } & { age: number };
  let b: { jobTitle: string } & { salary: number };
  const mergeObjects = (a: object, b: object) => {
    let merge = { ...a, ...b };
    return merge;
  };
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
}
// 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }

// 04
{
  const getFirstElement = (a: number[] | string[]) => {
    return a[0];
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

// 05
{
  const isEqual = (a: number | string, b: number | string): boolean => {
    if (a === b) {
      return true;
    } else if (a !== b) {
      return false;
    } else {
      return false;
    }
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

// 06
{
  const updateAddress = (
    a: { name: string; age: number },
    address: string
  ): { name: string; age: number } & { address: string } => {
    let arr = {};
    return (arr = { ...a, address });
  };

  const updatedPerson = updateAddress(
    { name: "Jane", age: 28 },
    "123 Maple St"
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }
  // const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  // console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}

// 07
{
  const maxValue = (a: string | number, b: string | number) => {
    if (typeof a === "string" && typeof b === "string") {
      if (a.length > b.length) {
        return a;
      } else {
        return b;
      }
    } else if (typeof a === "number" && typeof b === "number") {
      if (a > b) {
        return a;
      } else {
        return b;
      }
    }
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

// 08
{
  function getValue(a: string): string;
  function getValue(a: number): number;
  function getValue(a: string | number): number | string {
    return a;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

// 09
{
  const createContact = (
    per: { name: string; age: number },
    cont: { email: string }
  ) => {
    let Arr = {};
    return (Arr = { ...per, ...cont });
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

// 10
{
  const getAge = (age: string | number) => {
    return Number(age);
  };
  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
