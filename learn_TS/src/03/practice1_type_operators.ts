{
  // 1. 유니언 타입 사용하기: 값 출력하기
  const printValue = (type: number | string): number | string => {
    return type;
  };

  console.log(printValue("Hello")); // "Hello" 출력
  console.log(printValue(42)); // 42 출력
}

{
  // 2. 유니언 타입을 사용한 조건 처리
  const doubleOrLength = function (type: number | string): number {
    if (typeof type === "string") {
      return type.length;
    } else {
      return type * 2;
    }
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

{
  // 3. 인터섹션 타입 사용하기: 객체 합치기
  type Person = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };
  const mergeObjects = (
    person: Person,
    employee: Employee
  ): Person & Employee => {
    let answer: Person & Employee = { ...person, ...employee };
    return answer;
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

{
  // 4.유니언 타입을 사용한 배열 처리
  const getFirstElement = function (arr: (number | string)[]) {
    return arr[0];
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

{
  // 5. 유니언 타입을 사용한 값 비교
  const isEqual = (a: number | string, b: number | string): boolean => {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

{
  // 6. 인터섹션 타입을 활용한 필드 업데이트
  type PersonInfo = { name: string; age: number; address?: string };
  type Address = string;
  const updateAddress = (obj: PersonInfo, address?: Address): PersonInfo => {
    if (address) {
      return { ...obj, address };
    }
    return obj;
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
  // 7. 유니언 타입을 사용한 함수 반환 타입
  const maxValue = (
    a: number | string,
    b: number | string
  ): number | string | undefined => {
    if (typeof a === "number" && typeof b === "number") {
      if (a > b) {
        return a;
      } else if (b > a) {
        return b;
      } else {
        return a;
      }
    }
    if (typeof a === "string" && typeof b === "string") {
      let length1 = a.length;
      let length2 = b.length;
      if (length1 > length2) {
        return a;
      } else if (length2 > length1) {
        return b;
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

{
  // 8. 유니언 타입으로 함수 오버로딩하기
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(type: number | number): number;
  function getValue(type: number | string): string;
  function getValue(type: string | string): string;
  function getValue(type: string | number): string;
  function getValue(type: number | string): number | string {
    if (typeof type === "number") {
      return type.toString();
    }
    return type;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

{
  // 9. 인터섹션 타입을 활용한 객체 합치기 (다양한 속성 포함)
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
  // 10. 유니언 타입을 사용한 나이 체크
  const getAge = (age: string | number): number | typeof NaN | undefined => {
    if (typeof age === "number") {
      return age;
    } else if (typeof age === "string") {
      if (typeof Number(age) === "number") {
        return Number(age);
      } else {
        let nan = NaN;
        return nan;
      }
    }
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
