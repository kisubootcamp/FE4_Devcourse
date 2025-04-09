{
  // 타입 오퍼레이터 연습문제
  // 1
  const printValue = (value: string | number): void => console.log(value);

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력

  // 2
  const doubleOrLength = (value: string | number): string | number => {
    if (typeof value === "string") return value.length;
    else return value * 2;
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)

  // 3
  const mergeObjects = (
    objP: { name: string; age: number },
    objE: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => ({
    name: objP.name,
    age: objP.age,
    jobTitle: objE.jobTitle,
    salary: objE.salary,
  });

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }

  // 4
  const getFirstElement = (
    arr: number[] | string[]
  ): number | string | undefined => {
    if (typeof arr[0] === "number" || typeof arr[0] === "string") return arr[0];
    else return undefined;
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined

  // 5
  const isEqual = (a: string | number, b: string | number): boolean => a === b;

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false

  // 6
  const updateAddress = (
    obj: { name: string; age: number },
    addr?: string
  ): { name: string; age: number } & { address?: string } => {
    if (addr) return { name: obj.name, age: obj.age, address: addr };
    else return { name: obj.name, age: obj.age };
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

  // 7
  const maxValue = (
    a: string | number,
    b: string | number
  ): string | number => {
    if (typeof a === "number" && typeof b === "number") return Math.max(a, b);
    else if (typeof a === "string" && typeof b === "string")
      return Math.max(a.length, b.length) === b.length ? b : a;
    else return "";
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"

  // 8
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(value: string): string;
  function getValue(value: number): string;
  function getValue(value: string | number): string {
    if (typeof value === "number") return "" + value;
    return value;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"

  // 9
  const createContact = (
    objP: { name: string; age: number },
    objC: { email: string }
  ): { name: string; age: number } & { email: string } => ({
    name: objP.name,
    age: objP.age,
    email: objC.email,
  });

  const person_ = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person_, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }

  // 10
  const getAge = (age: string | number): number => {
    if (typeof age === "string") return +age;
    else return age;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}

{
  // 타입 오퍼레이터 연습문제+
  // 1
}
