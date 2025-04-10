// 연습문제
{
  // 1. 유니언 타입 사용하기: 값 출력하기
  const printValue = (data: string | number): void => console.log(data);

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}

console.log("------------------------------");

{
  // 2. 유니언 타입을 사용한 조건 처리
  const doubleOrLength = (data: string | number): number => {
    if (typeof data === "number") return data * 2;
    else return data.length;
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

console.log("------------------------------");

{
  // 3. 인터섹션 타입 사용하기
  const mergeObjects = (
    obj1: { name: string; age: number },
    obj2: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => ({
    ...obj1,
    ...obj2,
  });

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

console.log("------------------------------");

{
  // 4. 유니언 타입을 사용한 배열 처리
  function getFirstElement(arr: number[]): number | undefined;
  function getFirstElement(arr: string[]): string | undefined;
  function getFirstElement(
    data: number[] | string[]
  ): string | number | undefined {
    return data.length > 0 ? data[0] : undefined;
  }

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefinedw
}

console.log("------------------------------");

{
  // 5. 유니언 타입을 사용한 값 비교
  const isEqual = (a: number | string, b: string | number): boolean => a === b;

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

console.log("------------------------------");

{
  // 6. 인터섹션 타입을 활용한 필드 업데이트
  const updateAddress = (
    user: { name: string; age: number },
    address?: string
  ): { name: string; age: number } & { address?: string } => {
    if (address !== undefined) return { ...user, address };
    else return user;
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

console.log("------------------------------");

{
  // 7. 유니언 타입을 사용한 함수 반환 타입
  function maxValue(a: string, b: string): string;
  function maxValue(a: number, b: number): number;
  function maxValue(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
      return a >= b ? a : b;
    }

    if (typeof a === "string" && typeof b === "string") {
      return a.length >= b.length ? a : b;
    }

    throw new Error("두 값은 같은 타입이어야 합니다.");
  }

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

console.log("------------------------------");

{
  // 8. 유니언 타입으로 함수 오버로딩하기
  function getValue(a: string): string;
  function getValue(a: number): string;
  function getValue(a: string | number): string {
    return typeof a === "number" ? a.toString() : a;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

console.log("------------------------------");

{
  // 9. 인터섹션 타입을 활용한 객체 합치기
  const createContact = (
    obj1: { name: string; age: number },
    obj2: { email: string }
  ): { name: string; age: number } & { email: string } => ({
    ...obj1,
    ...obj2,
  });

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

console.log("------------------------------");

{
  // 10. 유니언 타입을 사용한 나이 체크
  const getAge = (age: string | number): number => {
    if (typeof age === "string") return +age;
    return age;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
