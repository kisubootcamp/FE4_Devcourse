{
  //1.유니언 타입 사용하기: 값 출력하기
  const printValue = (input: number | string): void => {
    console.log(input);
  };

  printValue("Hello"); // "Hello" 출력
  printValue(42); // 42 출력
}
{
  //2.유니언 타입을 사용한 조건 처리
  const doubleOrLength = (input: string | number): number => {
    if (typeof input === "number") return input * 2;
    else if (typeof input === "string") return input.length;

    throw new Error("error");
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}
{
  //3.인터섹션 타입 사용하기: 객체 합치기
  const mergeObjects = (
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

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}
{
  //4. 유니언 타입을 사용한 배열 처리
  const getFirstElement = (
    arr: string[] | number[] | undefined
  ): number | string | undefined => {
    return arr != undefined ? arr[0] : undefined;
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}
{
  //5. 유니언 타입을 사용한 값 비교
  const isEqual = (a: number | string, b: number | string): boolean => a === b;

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}
{
  //6. 인터섹션 타입을 활용한 필드 업데이트
  const updateAddress = (
    obj: { name: string; age: number },
    address?: string
  ): { name: string; age: number } & { address?: string } => {
    return address != undefined
      ? {
          name: obj.name,
          age: obj.age,
          address: address,
        }
      : {
          name: obj.name,
          age: obj.age,
        };
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
  //7. 유니언 타입을 사용한 함수 반환 타입
  const maxValue = (
    a: number | string,
    b: number | string
  ): number | string => {
    return a > b ? a : b;
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}
{
  //8. 유니언 타입으로 함수 오버로딩하기
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(input: number): string;
  function getValue(input: string): string;
  function getValue(input: number | string): number | string {
    return `${input}`;
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}
{
  //9. 인터섹션 타입을 활용한 객체 합치기 (다양한 속성 포함)
  const createContact = (
    obj: { name: string; age: number },
    obj2: { email: string }
  ): { name: string; age: number } & { email: string } => {
    return {
      name: obj.name,
      age: obj.age,
      email: obj2.email,
    };
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}
{
  //10. 유니언 타입을 사용한 나이 체크
  const getAge = (input: string | number): string | number => {
    return Number(input) ? Number(input) : `NaN`;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
