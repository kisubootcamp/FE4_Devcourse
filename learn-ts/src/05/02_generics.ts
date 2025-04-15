// 제네릭 연습문제+
{
  // 1. 배열 합계 계산 함수
  function sumArray<T>(arr: T[], reducer: (acc: T, curr: T) => T): T {
    return arr.reduce(reducer);
  }

  console.log(sumArray([1, 2, 3], (a, b) => a + b)); // 6
}

console.log("-------------------------------------");

{
  // 2. 객체 속성 값 추출 함수 개선
  function getName<T>(obj: { name: T }): T {
    return obj.name;
  }

  const person = { name: "John", age: 30 };
  console.log(getName(person)); // John
}

console.log("-------------------------------------");

{
  // 3. 배열 반전 함수 개선
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
}

console.log("-------------------------------------");

{
  // 4. 배열 타입을 이용한 중복 제거 함수 개선
  function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
}

console.log("-------------------------------------");

{
  // 5. 기본값을 설정하는 함수 개선
  function setDefault<T, U extends number>(
    obj: { name: T; age: U },
    defaultValue: U
  ): {
    name: T;
    age: U;
  } {
    return { ...obj, age: obj.age || defaultValue };
  }

  console.log(setDefault({ name: "Alice", age: 0 }, 18)); // { name: "Alice", age: 18 }
}

console.log("-------------------------------------");

{
  // 6. 제네릭을 사용한 키 값 건증 함수
  function hasKey<T extends {}>(obj: T, key: keyof T): boolean {
    return key in obj;
  }

  const person = { name: "Alice", age: 30 };
  console.log(hasKey(person, "name")); // true
  // 타입이 맞지 않아 오류나므로 주석처리
  // console.log(hasKey(person, "address")); // false
}

console.log("-------------------------------------");

{
  // 7. 제네릭을 활용한 타입 변환 함수
  function convertToString<T extends { toString: () => string }>(
    arr: T[]
  ): string[] {
    return arr.map((num) => num.toString());
  }

  console.log(convertToString([1, 2, 3])); // ["1", "2", "3"]
}

console.log("-------------------------------------");

{
  // 8. 타입 안전한 객체 병합 함수
  function mergeObjects<T, U>(
    obj1: { name: T },
    obj2: { age: U }
  ): { name: T; age: U } {
    return { ...obj1, ...obj2 };
  }

  const obj1 = { name: "John" };
  const obj2 = { age: 25 };
  console.log(mergeObjects(obj1, obj2)); // { name: "John", age: 25 }
}

console.log("-------------------------------------");

{
  // 9. 값 검증 함수 개선
  function isPositive<T extends string | number>(num: T): boolean {
    if (typeof num === "number") return num > 0;
    else if (typeof num === "string") return num.length > 0;
    return false;
  }

  console.log(isPositive(10)); // true
}
