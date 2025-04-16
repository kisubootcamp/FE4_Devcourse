{
  // 1. 숫자 배열의 첫 번째 값 구하기
  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  console.log(getFirst([1, 2, 3])); // 1
}

{
  // 2. 배열의 길이 구하기
  function getLength<E>(arr: E[]): number {
    return arr.length;
  }

  console.log(getLength([1, 2, 3])); // 3
}

{
  // 3. 배열에서 마지막 값 구하기
  function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1];
  }

  console.log(getLast([1, 2, 3])); // 3
}

{
  // 4. 두 값을 더하는 함수
  function add<T extends number>(a: T, b: T): number {
    return a + b;
  }

  console.log(add(2, 3)); // 5
}

{
  // 5. 객체에서 특정 키의 값 구하기
  function getValue<T>(obj: { name: T }): T {
    return obj.name;
  }

  console.log(getValue({ name: 'Alice' })); // "Alice"
}

{
  // 6. 두 값을 비교하는 함수
  function isEqual<T>(a: T, b: T): boolean {
    return a === b;
  }

  console.log(isEqual(2, 2)); // true
}

{
  // 7. 배열의 모든 값을 제곱하는 함수
  function square<E extends number>(arr: E[]): number[] {
    return arr.map((num) => num * num);
  }

  console.log(square([1, 2, 3])); // [1, 4, 9]
}

{
  // 8. 배열의 첫 번째와 마지막 값을 반환하는 함수
  function getFirstAndLast<T>(arr: T[]): T[] {
    return [arr[0], arr[arr.length - 1]];
  }

  console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
}

{
  // 9. 두 개의 객체 병합 함수
  function mergeObjects<T, U>(obj1: { name: T }, obj2: { age: U }) {
    return { ...obj1, ...obj2 };
  }

  console.log(mergeObjects({ name: 'Alice' }, { age: 25 })); // { name: "Alice", age: 25 }
}

{
  // 10. 배열에서 고유한 값을 반환하는 함수
  function getUnique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]
}
