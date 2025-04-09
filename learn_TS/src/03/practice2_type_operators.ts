{
  // 1. 유니언 타입을 사용한 함수 구현: 타입에 따라 다르게 처리하기
  const processInput = (
    input: number | string | boolean
  ): string | number | undefined => {
    if (typeof input === "number") {
      return input ** 2;
    }
    if (typeof input === "string") {
      return input.toUpperCase();
    }
    if (typeof input === "boolean") {
      if (input === true) {
        return "YES";
      } else {
        return "NO";
      }
    }
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}

{
  // 2. 유니언 타입으로 함수 반환 타입 처리
  const getFirstCharacter = (
    input: string | number
  ): string | number | undefined => {
    if (typeof input === "string") {
      return input[0];
    } else if (typeof input === "number") {
      let answer = input.toString();
      return Number(answer[0]);
    }
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}

{
  // 3. 인터섹션 타입을 활용한 복합 객체 다루기
  type PersonInfo = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };
  const combinePersonAndEmployee = (
    obj: PersonInfo,
    employee: Employee
  ): PersonInfo & Employee => {
    return { ...obj, ...employee };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}

{
  // 4. 유니언 타입을 이용한 객체의 프로퍼티 타입 검사
  const getIdValue = (id: number | string): number => {
    if (typeof id === "number") {
      return id;
    } else {
      return id.length;
    }
  };
  console.log(getIdValue(12345));
  console.log(getIdValue("hello"));
}

{
  // 5. 유니언 타입을 이용한 날짜 포맷 변환
  const formatDate = (date: string | Date): string => {
    if (typeof date === "string") {
      return date;
    } else {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      return `${month}/${day}/${year}`;
    }
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "11/19/2024"
}

{
  // 6. 유니언 타입을 사용한 숫자와 문자열 변환
  const convert = (input: string | number): number | string | undefined => {
    if (typeof input === "number") {
      return input.toString();
    } else if (typeof input === "string") {
      return Number(input);
    }
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  //console.log(convert("abc"));    // NaN
}

{
  // 7. 인터섹션 타입을 활용한 복합 객체 반환

  type Person = { name: string; age: number };
  type Address = { street: string; city: string; zipcode: string };
  const combinePersonAndAddress = (
    person: Person,
    address: Address
  ): Person & Address => {
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
  // 8. 유니언 타입을 활용한 두 값 비교하기
  const compareValues = function (
    a: number | string,
    b: number | string
  ): boolean | undefined {
    if (typeof a === "string" && typeof b === "string") {
      let aStr = a.charCodeAt(0);
      let bStr = b.charCodeAt(0);
      if (aStr > bStr) {
        return true;
      } else {
        return false;
      }
    }
    if (typeof a === "number" && typeof b === "number") {
      if (a > b) {
        return true;
      } else {
        return false;
      }
    }
  };

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}

{
  // 9. 유니언 타입으로 복합 조건 처리
  const checkEvenOdd = (input: number | string): string | undefined => {
    if (typeof input === "number") {
      if (input % 2 === 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
    if (typeof input === "string") {
      if (input.length % 2 === 0) {
        return "Even Length";
      } else {
        return "Odd Length";
      }
    }
  };

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd("hello")); // "Odd Length"
  console.log(checkEvenOdd("code")); // "Even Length"
}

{
  // 10. 인터섹션 타입을 활용한 동적 객체 반환
  type Person = { name: string; age: number };
  type ContactInfo = { email: string; phoneNumber: string };
  const mergeContactInfo = function (
    person?: Person,
    contactInfo?: ContactInfo
  ): Person & ContactInfo {
    return { ...person, ...contactInfo };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const contactInfo = {
    email: "alice@example.com",
    phoneNumber: "123-456-7890",
  };
  console.log(mergeContactInfo(person, contactInfo));

  //const personWithoutContact = { name: "Bob", age: 25 };
  //console.log(mergeContactInfo(personWithoutContact, {}));
}
