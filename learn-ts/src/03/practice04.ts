{
  //1. 유니언 타입을 사용한 함수 구현: 타입에 따라 다르게 처리하기
  const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === "string") {
      return input;
    } else if (typeof input === "number") {
      return input * 5;
    } else if (typeof input === "boolean") {
      return "YES";
    }

    throw new Error("error");
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}
{
  //2. 유니언 타입으로 함수 반환 타입 처리
  const getFirstCharacter = (input: string | number): string | number => {
    if (typeof input === "string") {
      return [...input][0];
    } else if (typeof input === "number") {
      return Number([...String(input)][0]);
    }

    throw new Error("error");
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}
{
  //3. 인터섹션 타입을 활용한 복합 객체 다루기
  const combinePersonAndEmployee = (
    obj1: { name: string; age: number },
    obj2: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => {
    return {
      name: obj1.name,
      age: obj1.age,
      jobTitle: obj2.jobTitle,
      salary: obj2.salary,
    };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}
{
  //4. 유니언 타입을 이용한 객체의 프로퍼티 타입 검사
  const getIdValue = (obj: { id: string | number }): number => {
    return typeof obj.id === "number" ? obj.id : obj.id.length;
  };

  console.log(getIdValue({ id: "Alice" }));
  console.log(getIdValue({ id: 30 }));
}
{
  //5. 유니언 타입을 이용한 날짜 포맷 변환

  const formatDate = (input: string | Date): string => {
    if (typeof input === "string") {
      return input;
    } else {
      return `${input.getMonth()}/${input.getDate()}/${input.getFullYear()}`;
    }
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}
{
  //6. 유니언 타입을 사용한 숫자와 문자열 변환
  const convert = (input: number | string): number | string => {
    return Number(input) ? Number(input) : "NaN";
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}
{
  //7. 인터섹션 타입을 활용한 복합 객체 반환
  const combinePersonAndAddress = (
    obj1: { name: string; age: number },
    obj2: { street: string; city: string; zipcode: string }
  ): { name: string; age: number } & {
    street: string;
    city: string;
    zipcode: string;
  } => {
    return {
      name: obj1.name,
      age: obj1.age,
      street: obj2.street,
      city: obj2.city,
      zipcode: obj2.zipcode,
    };
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
  //8. 유니언 타입을 활용한 두 값 비교하기
  const compareValues = (a: number | string, b: number | string): boolean =>
    a > b ? true : false;

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}
{
  //9. 유니언 타입으로 복합 조건 처리
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
{
  //10. 인터섹션 타입을 활용한 동적 객체 반환

  type Person = { name: string; age: number };
  type ContactInfo = { email?: string; phoneNumber?: string };
  const mergeContactInfo = (
    obj1: Person,
    obj2: ContactInfo
  ): Person & ContactInfo => {
    return {
      name: obj1.name,
      age: obj1.age,
      email: obj2.email,
      phoneNumber: obj2.phoneNumber,
    };
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
