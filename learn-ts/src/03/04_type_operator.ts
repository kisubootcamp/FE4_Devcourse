// 타입 오퍼레이터 연습문제+
{
  // 1. 유니언 타입을 사용한 함수 구현: 타입에 따라 다르게 처리하기
  const processInput = (data: string | number | boolean): string | number => {
    if (typeof data === "number") {
      return data * 5;
    } else if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data === "boolean") {
      return data ? "YES" : "NO";
    }

    throw new Error("지원하지 않는 타입입니다.");
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}

console.log("------------------------------");

{
  // 2. 유니언 타입으로 함수 반환 타입 처리
  const getFirstCharacter = (data: string | number): string | number => {
    if (typeof data === "string") return data[0];
    else if (typeof data === "number") {
      return +data.toString()[0];
    }

    throw new Error("지원하지 않는 타입입니다.");
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}

console.log("------------------------------");

{
  // 3. 인터섹션 타입을 활용한 복합 객체 다루기
  const combinePersonAndEmployee = (
    obj1: { name: string; age: number },
    obj2: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => ({
    ...obj1,
    ...obj2,
  });

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}

console.log("------------------------------");

{
  // 4. 유니언 타입을 이용한 객체의 프로퍼티 타입 검사
  const getIdValue = (data: { id: string | number }): number => {
    if (typeof data.id === "number") return data.id;
    else if (typeof data.id === "string") return data.id.length;

    throw new Error("지원하지 않는 타입입니다.");
  };

  console.log(getIdValue({ id: 123 }));
  console.log(getIdValue({ id: "1234" }));
}

console.log("------------------------------");

{
  // 5. 유니언 타입을 이용한 날짜 포맷 변환
  const formatDate = (date: string | Date): string => {
    if (typeof date === "string") return date;
    else if (typeof date === "object")
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    throw new Error("지원하지 않는 타입입니다.");
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}

console.log("------------------------------");

{
  // 6. 유니언 타입을 사용한 숫자와 문자열 변환
  const convert = (a: string | number): number | string => {
    if (typeof a === "string") return +a;
    else return a.toString();
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}

console.log("------------------------------");

{
  // 7. 인터섹션 타입을 활용한 복합 객체 반환
  const combinePersonAndAddress = (
    person: { name: string; age: number },
    address: { street: string; city: string; zipcode: string }
  ): { name: string; age: number } & {
    street: string;
    city: string;
    zipcode: string;
  } => ({ ...person, ...address });

  // 테스트 케이스
  const person = { name: "John", age: 25 };
  const address = {
    street: "123 Elm St",
    city: "Springfield",
    zipcode: "12345",
  };
  console.log(combinePersonAndAddress(person, address));
}

console.log("------------------------------");

{
  // 8. 유니언 타입을 활용한 두 값 비교하기
  function compareValues(a: number, b: number): boolean;
  function compareValues(a: string, b: string): boolean;
  function compareValues(a: number | string, b: number | string): boolean {
    if (typeof a === "number" && typeof b === "number") {
      return a > b;
    } else if (typeof a === "string" && typeof b === "string") {
      return a > b;
    }

    throw new Error("두 값의 타입이 서로 달라 비교할 수 없습니다.");
  }

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}

console.log("------------------------------");

{
  // 9. 유니언 타입으로 복합 조건 처리
  const checkEvenOdd = (a: number | string): string => {
    if (typeof a === "number") return a % 2 === 0 ? "Even" : "Odd";
    else if (typeof a === "string")
      return a.length % 2 === 0 ? "Even Length" : "Odd Length";

    throw new Error("지원하지 않는 타입입니다.");
  };

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd("hello")); // "Odd Length"
  console.log(checkEvenOdd("code")); // "Even Length"
}

console.log("------------------------------");

{
  // 10. 인터섹션 타입을 활용한 동적 객체 반환
  const mergeContactInfo = (
    obj1: { name: string; age: number },
    obj2: { email?: string; phoneNumber?: string }
  ): { name: string; age: number } & {
    email?: string;
    phoneNumber?: string;
  } => ({ ...obj1, ...obj2 });

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
