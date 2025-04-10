// 타입 오퍼레이터 연습문제
// 01
{
  const printValue = (value: number | string): void => {
    console.log(value);
  };

  printValue('Hello'); // "Hello" 출력
  printValue(42); // 42 출력
}

// 02
{
  const doubleOrLength = (value: number | string): number => {
    if (typeof value === 'number') {
      return value * 2;
    } else {
      return value.length;
    }
  };
  console.log(doubleOrLength('hello')); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

// 03
{
  type Person = {
    name: string;
    age: number;
  };
  type Employee = {
    jobTitle: string;
    salary: number;
  };

  const mergeObjects = (obj1: Person, obj2: Employee): Person & Employee => {
    return { ...obj1, ...obj2 };
  };

  const person = { name: 'Alice', age: 30 };
  const employee = { jobTitle: 'Engineer', salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

// 04
{
  const getFirstElement = (arr: number[] | string[]): number | string | undefined => {
    return arr.length > 0 ? arr[0] : undefined;
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(['a', 'b', 'c'])); // "a"
  console.log(getFirstElement([])); // undefined
}

// 05
{
  const isEqual = (v1: number | string, v2: number | string): boolean => {
    if (v1 === v2) {
      return true;
    } else {
      return false;
    }
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual('hello', 'world')); // false
  console.log(isEqual(5, '5')); // false
}

// 06
{
  type Info = {
    name: string;
    age: number;
  };

  const updateAddress = (obj: Info, str?: string | undefined): Info & { address?: string } => {
    if (typeof str === 'string') {
      return { ...obj, address: str };
    } else {
      return obj;
    }
  };

  const updatedPerson = updateAddress({ name: 'Jane', age: 28 }, '123 Maple St');
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: 'John', age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}

// 07
{
  const maxValue = (v1: string | number, v2: string | number): string | number => {
    if (typeof v1 === 'number' && typeof v2 === 'number') {
      return Math.max(v1, v2);
    } else if (typeof v1 === 'string' && typeof v2 === 'string') {
      return v1.length <= v2.length ? v2 : v1;
    } else {
      return '';
    }
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue('apple', 'banana')); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue('cat', 'dog')); // "dog"
}

// 08
{
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(value: string): string;
  function getValue(value: number): string;
  function getValue(value: string | number): string {
    return String(value);
  }

  console.log(getValue(123)); // "123"
  console.log(getValue('abc')); // "abc"
}

// 09
{
  type Person = {
    name: string;
    age: number;
  };
  type Contact = {
    email: string;
  };
  const createContact = (obj1: Person, obj2: Contact): Person & Contact => {
    return { ...obj1, ...obj2 };
  };

  const person = { name: 'Alice', age: 28 };
  const contact = { email: 'alice@example.com' };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

//10
{
  const getAge = (age: string | number): number => {
    if (typeof Number(age) === 'number') {
      return Number(age);
    } else {
      return NaN;
    }
  };

  console.log(getAge('25')); // 25
  console.log(getAge(30)); // 30
  console.log(getAge('abc')); // NaN
}

// 타입 오퍼레이터 연습문제+
// 01
{
  const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === 'string') {
      return input.toUpperCase();
    } else if (typeof input === 'number') {
      return input ** 2;
    } else {
      return input ? 'Yes' : 'No';
    }
  };

  // 테스트 케이스
  console.log(processInput('hello')); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}

// 02
{
  const getFirstCharacter = (value: number | string): number | string => {
    if (typeof value === 'number') {
      return Number(String(value)[0]);
    } else {
      return value[0];
    }
  };

  // 테스트 케이스
  console.log(getFirstCharacter('hello')); // "h"
  console.log(getFirstCharacter(12345)); // 1
}

// 03
{
  type Person = {
    name: string;
    age: number;
  };
  type Employee = {
    jobTitle: string;
    salary: number;
  };

  const combinePersonAndEmployee = (obj1: Person, obj2: Employee): Person & Employee => {
    return { ...obj1, ...obj2 };
  };

  // 테스트 케이스
  const person = { name: 'Alice', age: 30 };
  const employee = { jobTitle: 'Engineer', salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}

// 04
{
  const getIdValue = (obj: { id: string | number }): number => {
    if (typeof obj.id === 'number') {
      return obj.id;
    } else {
      return obj.id.length;
    }
  };
  console.log(getIdValue({ id: 22 }));
  console.log(getIdValue({ id: 'qweqwe' }));
}

// 05
{
  const formatDate = (data: string | Date): string => {
    if (typeof data === 'string') {
      return data;
    } else {
      return `${String(data.getMonth() + 1)}/${String(data.getDate())}/${String(data.getFullYear())} `;
    }
  };

  // 테스트 케이스
  console.log(formatDate('2024-11-19')); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}

// 06
{
  const convert = (input: number | string): string | number => {
    if (typeof input === 'number') {
      return String(input);
    } else {
      const num = Number(input);
      return Number.isNaN(num) ? NaN : num;
    }
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert('456')); // 456
  console.log(convert('abc')); // NaN
}

// 07
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
  const combinePersonAndAddress = (obj1: Person, obj2: Address): Person & Address => {
    return { ...obj1, ...obj2 };
  };

  // 테스트 케이스
  const person = { name: 'John', age: 25 };
  const address = { street: '123 Elm St', city: 'Springfield', zipcode: '12345' };
  console.log(combinePersonAndAddress(person, address));
}

// 08
{
  const compareValues = (v1: string | number, v2: string | number): boolean => {
    if (typeof v1 === 'number' && typeof v2 === 'number') {
      return v1 > v2 ? true : false;
    } else if (typeof v1 === 'string' && typeof v2 === 'string') {
      return v1[0] > v2[0] ? true : false;
    } else {
      throw new Error('두 값의 타입이 서로 다릅니다.');
    }
  };

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues('apple', 'banana')); // false
  console.log(compareValues('grape', 'apple')); // true
}

// 09
{
  const checkEvenOdd = (input: number | string): string => {
    if (typeof input === 'number') {
      return input % 2 ? 'Odd' : 'Even';
    } else {
      return input.length % 2 ? 'Odd Length' : 'Even Length';
    }
  };

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd('hello')); // "Odd Length"
  console.log(checkEvenOdd('code')); // "Even Length"
}

// 10
{
  type Person = {
    name?: string;
    age?: number;
  };
  type ContactInfo = {
    email?: string;
    phoneNumber?: string;
  };
  const mergeContactInfo = (obj1: Person, obj2: ContactInfo): Person & ContactInfo => {
    return { ...obj1, ...obj2 };
  };

  // 테스트 케이스
  const person = { name: 'Alice', age: 30 };
  const contactInfo = { email: 'alice@example.com', phoneNumber: '123-456-7890' };
  console.log(mergeContactInfo(person, contactInfo));

  const personWithoutContact = { name: 'Bob', age: 25 };
  console.log(mergeContactInfo(personWithoutContact, {}));
}
