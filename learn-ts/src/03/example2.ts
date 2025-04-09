{
  // 연습문제 1번
  const printValue = (val: string | number) => {
    return console.log(val);
  };

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력

  // 연습문제 2번
  const doubleOrLength = (isu: string | number) => {
    if (typeof isu === "string") {
      return isu.length;
    } else if (typeof isu === "number") {
      return isu * 2;
    }
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)

  // 연습문제 3번
  type Person = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };
  type PerEmp = Person & Employee;
  const mergeObjects = (person: Person, employee: Employee): PerEmp => {
    return { ...person, ...employee };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }

  // 연습문제 4번
  const getFirstElement = (die: number[] | string[]): number | string => {
    return die[0];
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined

  // 연습문제 5번
  const isEqual = (a: string | number, b: string | number): string | number => {
    if (a === b) {
      return "true";
    } else return "false";
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false

  // 연습문제 6번
  // 헤멘 문제
  type UpPerson = { name: string; age: number };
  type Address = { address: string };
  const updateAddress = (person: UpPerson, address?: string): UpPerson | (UpPerson & Address) => {
    if (address !== undefined) {
      return { ...person, address };
    } else return person;
  };

  const updatedPerson = updateAddress({ name: "Jane", age: 28 }, "123 Maple St");
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  console.log(updatedPersonWithoutAddress);
  //예상 출력: { name: "John", age: 22 }

  // 연습문제 7번
  const maxValue = (val1: string | number, val2: string | number) => {
    if (typeof val1 > typeof val2) {
      return val1;
    } else return val2;
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"

  // 연습문제 8번
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(a: string): string;
  function getValue(a: number): string;
  function getValue(a: string | number): string {
    return `${a}`;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"

  // 연습문제 9번
  type Person1 = { name: string; age: number };
  type Contact = { email: string };
  type PerCon = Person1 & Contact;
  const createContact = (person1: Person1, contact: Contact): PerCon => {
    return { ...person1, ...contact };
  };

  const person1 = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person1, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }

  // 연습문제 10번
  const getAge = (age: number | string) => {
    if (typeof age === "string") {
      return parseInt(age);
    } else return age;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}

{
  // 연습문제+ 1번
  const processInput = (allin: number | string | boolean) => {
    if (typeof allin === "string") {
      return allin;
    } else if (typeof allin === "number") {
      return allin ** 2;
    } else {
      if (allin === true) return "YES";
      else return "NO";
    }
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"

  // 연습문제+ 2번
  const getFirstCharacter = (char: string | number) => {
    if (typeof char === "string") {
      return char[0];
    } else return char.toString()[0];
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1

  // 연습문제+ 3번
  type Person = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };
  type PerEmp = Person & Employee;
  const combinePersonAndEmployee = (person: Person, employee: Employee): PerEmp => {
    return { ...person, ...employee };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));

  // 연습문제+ 4번
  const getIdValue = (id: number | string) => {
    if (typeof id === "number") {
      return id;
    } else return id.length;
  };

  // 테스트 케이스
  console.log(getIdValue(80));
  console.log(getIdValue("sucoding gimoring"));

  // 연습문제+ 5번
  const formatDate = (date: string | Date) => {
    if (typeof date === "string") {
      return date;
    } else {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${month}/${day}/${year}`;
    }
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}
