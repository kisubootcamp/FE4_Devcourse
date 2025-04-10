//함수

//연습문제
{
  // 1
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(add(1, 2));
}

{
  // 2
  function greet(name: string): string {
    return `Hello ${name}`;
  }
  console.log(greet("이준호"));
}

{
  // 3
  function sumAll(...arg: number[]): number {
    return arg.reduce((acc, num) => acc + num, 0);
  }
  console.log(sumAll(1, 2, 3, 4));
}

{
  // 4
  function sum(num1: number, num2: number = 0): number {
    return num1 + num2;
  }
  console.log(sum(5));
}

{
  // 5
  function multiply(a: number, b: number): number {
    return a * b;
  }
  console.log(multiply(2, 3));
}

{
  // 6
  function concatStringAndNumber(str: string, num: number): string {
    return `${str}${num}`;
  }
  console.log(concatStringAndNumber("hello", 10));
}

{
  // 7
  function greet(str1: string, str2?: string): string {
    if (!str2) return `Welcome, ${str1}`;
    return `${str2}, ${str1}`;
  }
  console.log(greet("Alice", "Hello"));
  console.log(greet("Bob"));
}

{
  // 8
  function findMax(nums: number[]): number {
    return Math.max(...nums);
  }
  console.log(findMax([10, 20, 30, 40]));
}

{
  // 9
  function double(num: number): void {
    console.log(num * 2);
  }
  double(10);
}

//연습문제+
{
  //1
  function sumAllNumbers(...arg: number[][]): number[] {
    return arg.map((arr) => arr.reduce((acc, num) => acc + num, 0));
  }
  console.log(sumAllNumbers([1, 2], [3, 4, 5], [6, 7]));
}

{
  //2
  function doubleValue(value: string | number): number {
    if (typeof value === "string") return value.length * 2;
    return value * 2;
  }

  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1);
  console.log(result2);
}

{
  //3
  // 함수 정의
  const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
    let temp: number[] = [];
    arr1.forEach((num, idx) => {
      temp.push(num * arr2[idx]);
    });
    return temp;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]
}

{
  //4
  // 함수 정의
  const intersection = (arr1: number[], arr2: number[]): number[] => {
    let temp: number[] = [];
    arr1.forEach((num) => {
      if (arr2.indexOf(num) > -1) {
        temp.push(num);
      }
    });
    return temp;
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

{
  //5
  // 함수 정의
  type Info = {
    name: string;
    age?: number;
  };
  const formatInfo = (info: Info): string | number | void => {
    if (info.age) return info.age;
    if (info.name) return info.name;
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
}

{
  //6
  // 함수 정의
  const combineStrings = (str1: string, str2: string): string => {
    return str1 + str2;
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}

{
  //7
  // 함수 정의
  const squareArray = (arr: number[]): number[] => {
    return arr.map((num) => num * num);
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

{
  //8
  // 함수 정의
  function addStringAndNumber(str: string, num: number): string {
    return `${str} ${num}`;
  }

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

{
  //9
  // 함수 정의
  const compareValues = (num: number, str: string): string | void => {
    if (str.length > num) "String is larger";
    if (str.length < num) "Number is larger";
  };
  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); //
}

{
  //10
  // 함수 정의
  function checkValue(value: string | number | boolean): string | void {
    if (typeof value === "string") "It's a string";
    if (typeof value === "number") "It's a number";
    if (typeof value === "boolean") "It's a boolean";
  }

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}

//타입 오퍼레이터
console.log("타입 오퍼레이션");
{
  // 1
  const printValue = (value: string | number): void => {
    if (typeof value === "string") return console.log(`${value}`);
    else return console.log(value);
  };

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}

{
  // 2
  const doubleOrLength = (value: string | number): number => {
    if (typeof value === "string") return value.length;
    else return value * 2;
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

{
  // 3
  type Person = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };

  const mergeObjects = (
    person: Person,
    employee: Employee
  ): Person & Employee => {
    return { ...person, ...employee };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
}

{
  // 4
  type Mix = number[] | string[] | undefined[];

  function getFirstElement(value: string[]): string;
  function getFirstElement(value: number[]): number;
  function getFirstElement(value: undefined[]): undefined;
  function getFirstElement(value: Mix): string | number | undefined {
    if (typeof value[0] === "string") return value[0];
    if (typeof value[0] === "number") return value[0];
    else return undefined;
  }

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

{
  // 5
  const isEqual = (
    value1: string | number,
    value2: string | number
  ): boolean => {
    if (typeof value1 === typeof value2 && value1 === value2) return true;
    else return false;
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

{
  // 6
  type UpdateAddress = { name: string; age: number; address?: string };
  type Inpo = { name: string; age: number };

  const updateAddress = (info: Inpo, address?: string): UpdateAddress => {
    if (address) return { ...info, address: address };
    else return info;
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
  // 7
  type Mix = string | number;

  function maxValue(value1: Mix, value2: Mix): string | number {
    if (typeof value1 === "string" && typeof value2 === "string")
      return value1.length >= value2.length ? `${value1}` : `${value2}`;
    else return value1 >= value2 ? value1 : value2;
  }

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

{
  // 8
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(value: string | number): string {
    return `${value}`;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

{
  // 9
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
  const getAge = (value: string | number): number => {
    if (typeof value === "string") return +value;
    else return NaN;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}

//연습문제+
{
  //1
  const processInput = (
    value: string | number | boolean
  ): string | number | boolean => {
    if (typeof value === "string") return value.toUpperCase();
    if (typeof value === "number") return value * value;
    else return value ? true : false;
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}

{
  //2
  const getFirstCharacter = (value: string | number): string | number => {
    if (typeof value === "string") return `${value[0]}`;
    else return +`${value}`.split("")[0];
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}

{
  //3
  type Person = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };
  const combinePersonAndEmployee = (
    person: Person,
    employee: Employee
  ): Person & Employee => {
    return { ...person, ...employee };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}

{
  //4
  function getIdValue(id: string | number): number {
    if (typeof id === "string") return id.length;
    else return id;
  }
  console.log(getIdValue("숙제 중"));
  console.log(getIdValue(5));
}

{
  //5
  const formatDate = (value: string | Date): string => {
    if (typeof value === "string") return value;
    else {
      const date = value;
      const getDate = date.getDate();
      const getMonth = date.getMonth() + 1;
      const getYear = date.getFullYear();
      return `${getMonth}/${getDate}/${getYear}`;
    }
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}

{
  //6
  const convert = (value: string | number): string | number => {
    if (typeof value === "string") return +value;
    else return `${value}`;
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}

{
  //7
  type Person = { name: string; age: number };
  type Address = {
    street: string;
    city: string;
    zipcode: string;
  };
  type Mix = Person & Address;
  const combinePersonAndAddress = (person: Person, address: Address): Mix => {
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
  //8
  type Mix = string | number;
  const compareValues = (value1: Mix, value2: Mix): boolean => {
    if (typeof value1 === "string" && typeof value2 === "string")
      return value1 > value2 ? true : false;
    else return value1 === value2;
  };

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}

{
  //9
  const checkEvenOdd = (value: number | string): string => {
    if (typeof value === "string")
      return value.length % 2 === 0 ? "Even Langth" : "Odd Length";
    else return value % 2 === 0 ? "Even" : "Odd";
  };

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd("hello")); // "Odd Length"
  console.log(checkEvenOdd("code")); // "Even Length"
}

{
  //10
  type Person = { name: string; age: number };
  type ContactInfo = {
    email?: string;
    phoneNumber?: string;
  };
  type Mix = Person & ContactInfo;

  function mergeContactInfo(person: Person, contactInfo: ContactInfo): Mix {
    return { ...person, ...contactInfo };
  }

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
